package models

import (
	"time"

	"github.com/google/uuid"
)

type User struct {
	ID           uuid.UUID  `gorm:"type:uuid;primaryKey;default:gen_random_uuid()" json:"id"`
	Name         *string    `gorm:"type:varchar(150);not null" json:"name"`
	Email        *string    `gorm:"type:varchar(255);uniqueIndex" json:"email"`
	PasswordHash *string    `gorm:"type:text" json:"-"`
	Phone        *string    `gorm:"type:varchar(20);uniqueIndex" json:"phone"`
	Address      *string    `gorm:"type:text" json:"address"`
	DateOfBirth  *time.Time `gorm:"type:date" json:"date_of_birth"`
	IsVerified   bool       `gorm:"not null;default:false" json:"is_verified"`
	IsActive     bool       `gorm:"not null;default:true" json:"is_active"`
	CreatedAt    time.Time  `gorm:"not null" json:"created_at"`
	UpdatedAt    time.Time  `gorm:"not null" json:"updated_at"`
}
