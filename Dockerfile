FROM node:latest
WORKDIR /srv/app
COPY package.json ./
COPY yarn.lock ./

RUN npm i -y

COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]