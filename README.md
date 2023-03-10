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

But all these dependencies and libraries will be installed inside the containers, that means
that not in your machine, but what is the problem?

The problem is that if you want code auto-completion and so on you won't have it.

To auto-install all the dependencies in your machine you need to install it one by one, or
just run this single command:

```sh
# this script has my own libraries preferences, you can edit it if you want.
./dev-install.sh
```
