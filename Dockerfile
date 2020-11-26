FROM keymetrics/pm2:12-alpine AS BUILD_IMAGE

RUN apk --no-cache add curl git

WORKDIR /usr/app/
COPY . .
RUN yarn install --no-progress --frozen-lockfile
RUN yarn build
RUN yarn version:build

# keep only production modules and autoclean
RUN yarn install -A --no-progress --frozen-lockfile --check-files --production
RUN yarn autoclean --force


FROM keymetrics/pm2:12-alpine

ENV PORT 8000
ENV API_URL https://api.preprod.makeorg.tech

WORKDIR /usr/app/
COPY --from=BUILD_IMAGE /usr/app/dist ./dist
COPY --from=BUILD_IMAGE /usr/app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /usr/app/ecosystem.config.js ./ecosystem.config.js
COPY --from=BUILD_IMAGE /usr/app/bin ./bin
COPY --from=BUILD_IMAGE /usr/app/certs ./certs


EXPOSE 8000

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]

HEALTHCHECK --interval=20s CMD curl --fail http://localhost:8000 || exit 1
