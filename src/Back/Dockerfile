FROM node:16.13-alpine

RUN mkdir /back

WORKDIR /back

COPY package.json ./

COPY tsconfig.json ./

COPY .env ./

COPY . ./

RUN yarn install

# EXPOSE 8080

CMD ["yarn", "run", "back-docker"]
