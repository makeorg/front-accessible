FROM keymetrics/pm2:latest-alpine

WORKDIR /usr/app/
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install -qy
COPY . ./
RUN yarn build
RUN yarn styleguidist build
RUN yarn update:i18n

RUN apk --no-cache add curl

ENV PORT 8000
ENV API_URL https://api.preprod.makeorg.tech

EXPOSE 8000

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]

HEALTHCHECK --interval=20s CMD curl --fail http://localhost:8000 || exit 1
