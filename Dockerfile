FROM node:lts-alpine3.18

WORKDIR /app

COPY package*.json .

RUN npm i

COPY app.js .

ENTRYPOINT "node"

CMD ["app.js"]
