# Picturely

Picturely is a social media app that allows users to share their photos
and connect with others around the world. It's designed as a clone of Instagram,
with similar features and functionality.

## Getting started and Installation:

While I'm coding this app I'm using docker containers so if you want to develop with docker
too and you have installed docker and docker-compose in your machine, you can just run the next
command and everything will be available for coding:

```sh
# for development environment
docker compose -f docker-compose-dev.yml --build
```

It's true that when you install dependencies and libraries inside containers in a microservices app, they are isolated from your local machine. While this can help ensure consistency across different environments, it can also make it more difficult to have code auto-completion and other developer tools available when working on the codebase.

One solution to this problem is to manually install all the dependencies on your local machine, but this can be time-consuming and error-prone. Alternatively, you can use a single command to automatically install all the dependencies and libraries required by the microservices app.

This command typically involves using a package manager such as npm or pip to install all the required packages listed in the project's package.json or requirements.txt file. This can help ensure that all the dependencies are installed in the correct versions and with the correct configuration.

Once all the dependencies are installed on your local machine, you can use code editors such as Visual Studio Code or PyCharm to take advantage of auto-completion and other developer tools. Additionally, some containerization tools such as Docker Compose allow you to mount your local source code directory as a volume in the container, enabling you to edit the code on your local machine while still running it inside the container.

```sh
# this script has my own libraries preferences, you can edit it if you want.
./dev-install.sh
```
