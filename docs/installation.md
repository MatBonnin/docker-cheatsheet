---
id: installation
title: Installation de Docker
---

# Installation de Docker

## Windows
1. Télécharger **Docker Desktop** sur docker.com  
2. Exécuter l’installateur  
3. Activer le sous-système Windows pour Linux (WSL2)  
4. Redémarrer si demandé

```powershell
# Vérifier l’état du service
Get-Service com.docker.service
```

## macOS
- Installer via **Homebrew** :
  ```bash
  brew install --cask docker
  ```
- Lancer l’application **Docker Desktop**

## Linux (Ubuntu)
```bash
sudo apt update
sudo apt install \
  ca-certificates \
  curl \
  gnupg \
  lsb-release

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

- Ajouter l’utilisateur courant au groupe `docker` :
  ```bash
  sudo usermod -aG docker $USER
  ```
- Reloger pour prendre effet

```bash
# Tester l’installation
docker run hello-world
```
