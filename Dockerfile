FROM node:16

ENV PORT=3331

WORKDIR /usr/app/app

COPY package*.json ./

RUN yarn

COPY . .

RUN npm run build

EXPOSE 49151

CMD [ "node", "./build/server.js" ]