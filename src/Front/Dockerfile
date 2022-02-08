FROM node:16.13-alpine

RUN mkdir /front

WORKDIR /front

COPY . ./

RUN yarn install --network-timeout 1000000

# EXPOSE 3000

CMD ["yarn", "run", "start"]
