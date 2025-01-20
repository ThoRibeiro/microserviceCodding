FROM node:18-alpine

RUN apk add --no-cache curl bash && \
    curl -fsSL https://bun.sh/install | bash && \
    mv /root/.bun/bin/bun /usr/local/bin/bun

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 3002

# Lancement de l'application
CMD ["bun", "run", "src/server.ts"]
