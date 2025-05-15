# 1) Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# 1.1) Installer tout (prod + dev)
COPY package*.json ./
RUN npm install

# 1.2) Copier le code et builder
COPY . .
RUN npm run build

# 2) Runtime stage
FROM node:20-alpine
WORKDIR /app

# 2.1) Copier TOUT le contenu buildé + configs + node_modules
COPY --from=builder /app /app

# 2.2) Ne garder que les dépendances de production
RUN npm prune --production

EXPOSE 3000
CMD ["npm", "run", "serve"]
