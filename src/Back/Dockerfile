FROM node:16.13-alpine

RUN mkdir /back

WORKDIR /back

COPY package.json /back

COPY tsconfig.json /back

COPY .env /back

RUN mkdir src

COPY src/Back /back/src/

EXPOSE 8080

CMD ["yarn", "run", "back"]
