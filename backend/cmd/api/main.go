package main

import (
	"log"
	"github.com/gin-gonic/gin"
	"sator.local/backend/internal/config/database"
	"sator.local/backend/internal/repository"
	authController "sator.local/backend/internal/controller"
	authService "sator.local/backend/internal/service"
	authRoutes "sator.local/backend/internal/route"
)

func main() {
	db, err := database.ConnectDatabase()
	if err != nil {
		panic("Failed to connect to the database: " + err.Error())
	}
	userRepo := repository.NewUserRepo(db)
	service := authService.NewAuthService(userRepo)
	controller := authController.NewAuthController(service)

	router := gin.Default()
	api:= router.Group("/api")
	authRoutes.RegisterAuthRouter(api, controller)
	log.Println("Starting server on :8080")
	if err := router.Run(":8080"); err != nil {
		log.Fatal("Failed to start server: ", err)
	}
}
