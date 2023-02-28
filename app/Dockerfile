FROM node:19 AS wait-for-it-stage
RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for

FROM wait-for-it-stage AS build-stage
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm install

FROM node:19-alpine
RUN apk add --no-cache wget netcat-openbsd && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for && \
    apk del wget

USER node
WORKDIR /app
COPY --chmod=0755 --from=build-stage /usr/bin/wait-for /usr/bin/wait-for
COPY --chown=node:node --from=build-stage /app .
COPY --chown=node:node index.js .
CMD ["node", "index.js"]
