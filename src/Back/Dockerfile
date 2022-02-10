FROM node:16.13-alpine

WORKDIR /var/app/back

COPY package.json ./

COPY tsconfig.json ./

COPY .env ./

COPY . ./

# EXPOSE 8080

CMD ["yarn", "run", "back-docker"]
