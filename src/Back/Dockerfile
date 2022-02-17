FROM node:16.13-alpine

WORKDIR /var/app/back

COPY package.json ./

COPY tsconfig.json ./

COPY .env ./

COPY . ./

CMD ["yarn", "run", "back-docker"]
