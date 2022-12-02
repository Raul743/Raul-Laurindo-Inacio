FROM node:16

ENV PORT=3000

WORKDIR /usr/app/app

COPY package*.json ./

RUN yarn

COPY . .

RUN npm run build

EXPOSE 49151

CMD [ "node", "./build/infra/server.js" ]