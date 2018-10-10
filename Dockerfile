FROM node:10.9.0-alpine

WORKDIR /usr/app/
COPY package*.json ./
RUN yarn install -qy
COPY . ./
RUN yarn build

ENV PORT 8000
ENV API_URL https://api.prod.makeorg.tech

EXPOSE 8000

CMD ["yarn", "server"]
