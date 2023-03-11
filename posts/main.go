package main

import (
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		// Make an HTTP GET request
		resp, err := http.Get("http://users:5000")
		if err != nil {
			c.AbortWithStatus(http.StatusInternalServerError)
			return
		}

		defer resp.Body.Close()

		// Read the response body
		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			c.AbortWithStatus(http.StatusInternalServerError)
			return
		}

		// Set the response content type and body
		c.Header("Content-Type", "application/json")
		c.String(http.StatusOK, string(body))
	})

	r.Run(":8080")
}
