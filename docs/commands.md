---
id: commands
title: Commandes essentielles Docker
---

# Commandes essentielles Docker

| Commande                                         | Description                                 |
|--------------------------------------------------|---------------------------------------------|
| `docker run -d --name web nginx`                 | Lancer Nginx en arrière-plan                |
| `docker ps`                                      | Liste des conteneurs actifs                 |
| `docker ps -a`                                   | Liste de tous les conteneurs                |
| `docker images`                                  | Liste des images locales                    |
| `docker pull <image>`                            | Télécharger une image depuis un registre    |
| `docker build -t monapp:latest .`                | Construire une image depuis `Dockerfile`    |
| `docker stop <container>`                        | Arrêter un conteneur                        |
| `docker rm <container>`                          | Supprimer un conteneur arrêté               |
| `docker rmi <image>`                             | Supprimer une image                         |
| `docker logs <container>`                        | Afficher les logs d’un conteneur            |
| `docker exec -it <container> sh`                 | Ouvrir un shell dans un conteneur           |
| `docker-compose up -d`                           | Démarrer les services définis en `docker-compose.yml` |
| `docker-compose down`                            | Arrêter et supprimer les services           |

## Cheat-sheet Dockerfile

```dockerfile
# Image de base légère
FROM node:18-alpine

# Définition du répertoire de travail
WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm ci

# Copie du code source
COPY . .

# Exposition du port
EXPOSE 3000

# Commande par défaut
CMD ["npm", "start"]
```

