package database

import (
	"fmt"
	"os"
	"strings"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ConnectDatabase() (*gorm.DB, error) {
	for _, envFile := range []string{".env", ".env"} {
		_, err := os.Stat(envFile)
		if err != nil {
			if os.IsNotExist(err) {
				continue
			}
			return nil, fmt.Errorf("check environment file %q: %w", envFile, err)
		}
		if err := godotenv.Load(envFile); err != nil {
			return nil, fmt.Errorf("load environment file %q: %w", envFile, err)
		}
		break
	}

	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		host := os.Getenv("DB_HOST")
		if strings.HasPrefix(host, "postgres://") || strings.HasPrefix(host, "postgresql://") {
			dsn = host
		} else {
			for _, name := range []string{"DB_HOST", "DB_USER", "DB_NAME"} {
				if os.Getenv(name) == "" {
					return nil, fmt.Errorf("missing required database environment variable %s", name)
				}
			}

			dsn = fmt.Sprintf(
				"host=%s user=%s password=%s dbname=%s",
				host,
				os.Getenv("DB_USER"),
				os.Getenv("DB_PASSWORD"),
				os.Getenv("DB_NAME"),
			)
		}
	}

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, fmt.Errorf("open postgres connection: %w", err)
	}

	return db, nil
}
