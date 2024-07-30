# Etapa de construcción
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm run build

# Etapa de producción
FROM node:18-alpine AS prod
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]

