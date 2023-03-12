# Picturely

ShieldPassword is a password manager app that securely stores all your login credentials and
sensitive information in one place. With shieldPassword, you can generate strong passwords,
autofill login forms, and access your passwords from anywhere, on any device.

## Getting started and Installation:

While I'm coding this app I'm using docker containers so if you want to develop with docker
too and you have installed docker and docker-compose in your machine, you can just run the next
command and everything will be available for coding:

```sh
# for development environment
docker compose -f docker-compose-dev.yml --build
```

Installing dependencies inside containers isolates code from the local machine, making developer tools unavailable. A solution is to use a single command to install all dependencies using a package manager. This enables code editors and containerization tools to be used for easy development and deployment.

```sh
# this script has my own libraries preferences, you can edit it if you want.
./dev-install.sh
```
