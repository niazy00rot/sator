package service

import (
	"context"
	"errors"
	"strings"

	"sator.local/backend/internal/models"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

var ErrEmailAlreadyExists = errors.New("email already exists")

type UserRepo interface{
	Create(ctx context.Context,user *models.User)error
	FindByEmail(ctx context.Context,email string)(*models.User,error)
}
type AuthService struct{
	userRepo UserRepo
}

func NewAuthService(userRepo UserRepo)*AuthService{
	return &AuthService{
		userRepo:userRepo,
	}
}

type RegisterRequest struct{
	Name string `json:"name"`
	Email string `json:"email"`
	Password string `json:"password"`
	Phone string `json:"phone"`
}

func (s *AuthService) Register(
	ctx context.Context,
	input RegisterRequest,
) (*models.User,error){
	email := strings.ToLower(input.Email)
	existingUser,err := s.userRepo.FindByEmail(ctx,email)
	if err == nil && existingUser != nil {
		return nil, ErrEmailAlreadyExists
	}
	if err != nil && !errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, err
	}
	hashedPassword, err := bcrypt.GenerateFromPassword(
		[]byte(input.Password),
		bcrypt.DefaultCost,
	)
	if err != nil {
		return nil, err
	}
	name := strings.TrimSpace(input.Name)
	passwordHash := string(hashedPassword)
	user := &models.User{
		Name: &name,
		Email: &email,
		PasswordHash: &passwordHash,
		IsVerified: false,
		IsActive: true,
	}
	phone := strings.TrimSpace(input.Phone)
	if phone != "" {
		user.Phone = &phone
	}
	if err := s.userRepo.Create(ctx, user); err != nil {
        return nil, err
    }
    return user, nil
}