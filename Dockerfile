# Build stage
FROM node:18.19.0 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:ssr

# Serve stage
FROM node:18.19.0
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
RUN npm install
CMD ["node", "dist/server/main.js"]
