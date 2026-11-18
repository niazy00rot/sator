package route
import(
	"github.com/gin-gonic/gin"
	"sator.local/backend/internal/controller"
)

func RegisterAuthRouter(
	router *gin.RouterGroup,
	authController *controller.AuthController,
)	{
		authRouters := router.Group("/auth")
		{
			authRouters.POST("/register",authController.Register)
		}
}