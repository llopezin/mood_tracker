FROM node:18.17.0

WORKDIR /app

COPY . .
COPY mood_tracker.sql /docker-entrypoint-initdb.d/

RUN yarn 
RUN yarn add bcrypt 
RUN yarn compile

EXPOSE 4000

CMD node dist/index.js