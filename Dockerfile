FROM node:10.9.0-alpine

WORKDIR /usr/app/
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install -qy
COPY . ./
RUN yarn build
RUN yarn styleguidist build
RUN yarn update:i18n

ENV PORT 8000
ENV API_URL https://api.prod.makeorg.tech

EXPOSE 8000

CMD ["yarn", "server"]
