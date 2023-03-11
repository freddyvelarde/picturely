FROM golang:1.17-alpine3.14

WORKDIR /app/posts

COPY . .

RUN apk update && apk add --no-cache git
RUN go mod download

# RUN go get -u github.com/gin-gonic/gin

CMD ["go", "run", "main.go"]

