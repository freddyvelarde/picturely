FROM node:current-alpine

WORKDIR /app/pictures

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npm", "start"]
