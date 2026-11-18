package repository

import(
	"context"
	"gorm.io/gorm"
	"sator.local/backend/internal/models"
	"github.com/google/uuid"
)

type UserRepo struct{
	db *gorm.DB
}

func NewUserRepo(db *gorm.DB) *UserRepo{
	return &UserRepo{
		db:db,
	}
}

func (r *UserRepo) Create(ctx context.Context, user *models.User)error{
	res := r.db.WithContext(ctx).Create(user)
	return res.Error
}

func (r *UserRepo)FindByID(ctx context.Context,id uuid.UUID)(*models.User,error){
	var user models.User
	res:= r.db.WithContext(ctx).First(&user,"id=?",id)
	if res.Error !=nil{
		return nil,res.Error
	}
	return &user,nil
}

func (r *UserRepo)FindByEmail(ctx context.Context,email string)(*models.User,error){
	var user models.User
	res := r.db.WithContext(ctx).First(&user,"email=?",email)
	if res.Error !=nil{
		return nil,res.Error
	}
	return &user,nil
}