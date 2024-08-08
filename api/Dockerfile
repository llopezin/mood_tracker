FROM node:16

WORKDIR /app

COPY . .

RUN yarn 
RUN yarn add bcrypt 
RUN yarn compile

EXPOSE 4000

CMD node dist/index.js