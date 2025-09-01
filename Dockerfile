# Étape 1 : construire l'application
FROM node:20-alpine AS builder
WORKDIR /app

# Copier les fichiers nécessaires
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : lancer l'application avec next
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copier seulement le nécessaire depuis le builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
