package main

import (
	"log"

	"sator.local/backend/internal/config/database"
	"sator.local/backend/internal/models"
)

func main() {
	db, err := database.ConnectDatabase()
	if err != nil {
		log.Fatal("database connection failed: ", err)
	}

	if err := db.AutoMigrate(&models.User{}); err != nil {
		log.Fatal("migration failed: ", err)
	}
	log.Println("Migration completed successfully!")
}
