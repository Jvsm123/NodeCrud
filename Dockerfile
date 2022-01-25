FROM node:16.13-alpine

RUN mkdir /nodeCrud

WORKDIR /nodeCrud

COPY package.json /nodeCrud

COPY tsconfig.json /nodeCrud

RUN mkdir src

COPY src /nodeCrud/src/

RUN npm i

EXPOSE 8080
