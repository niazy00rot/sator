package controller
import(
	"errors"
	"net/http"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"sator.local/backend/internal/service"
)

type AuthController struct{
	authService *service.AuthService
}

func NewAuthController(authService *service.AuthService)*AuthController{
	return &AuthController{
		authService:authService,
	}
}
type RegisterRequest struct{
	Name string `json:"name" binding:"required"`
	Email string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=8"`
	Phone string `json:"phone"`
}

func (c *AuthController) Register(ctx *gin.Context){
	var req RegisterRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid registration data",
			"details": err.Error(),
		})
		return
	}
	input := service.RegisterRequest{
		Name: req.Name,
		Email: req.Email,
		Password: req.Password,
		Phone: req.Phone,
	}
	user,err:= c.authService.Register(ctx.Request.Context(),input)
	if err != nil {
		if errors.Is(err, service.ErrEmailAlreadyExists) {
			ctx.JSON(http.StatusConflict, gin.H{
				"error": "Email already exists",
			})
			return
		}
		if errors.Is(err,gorm.ErrDuplicatedKey){
			ctx.JSON(http.StatusConflict, gin.H{
				"error": "Email or phone already exists",
			})
			return
		}
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to register user",
			"details": err.Error(),
		})
		return
	}
	ctx.JSON(http.StatusCreated, gin.H{
		"message": "User registered successfully",
		"user": gin.H{
			"id": user.ID,
			"name": user.Name,
			"email": user.Email,
			"phone": user.Phone,
		},	
	
	})
}