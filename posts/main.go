package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	// Create a new Gin router
	r := gin.Default()

	// Define a route for handling GET requests to the root path
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Welcome to the Posts Services API!",
		})
	})

	// Run the server on port 8080
	if err := r.Run(":8080"); err != nil {
		panic(err)
	}
}
