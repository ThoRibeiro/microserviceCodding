# Microservices API démo mémoire

Bienvenue dans ce projet qui démontre le développement et la mise en œuvre d'une API basée sur une architecture de microservices. 
Ce projet utilise **Bun** comme gestionnaire de packages et comprend plusieurs services découplés (Gateway, User Service, et Order Service).

---

## Table des matières

1. [Aperçu du projet](#aperçu-du-projet)
2. [Structure des microservices](#structure-des-microservices)
3. [Prérequis](#prérequis)
4. [Installation et configuration](#installation-et-configuration)
5. [Démarrage du projet](#démarrage-du-projet)
6. [Utilisation des endpoints](#utilisation-des-endpoints)
7. [Développement avec Bun](#développement-avec-bun)
8. [Contributions](#contributions)
9. [Licence](#licence)

---

## Aperçu du projet

Ce projet est conçu pour illustrer les concepts fondamentaux des microservices en utilisant une architecture modulaire. Il comprend :

- **Gateway** : Point d'entrée pour orchestrer les appels vers les services internes.
- **User Service** : Service dédié à la gestion des utilisateurs (CRUD).
- **Order Service** : Service dédié à la gestion des commandes (CRUD).
- **Product Service** : Service dédié à la gestion des produits (CRUD).

Chaque service est autonome et communique via des appels HTTP.

---

## Structure des microservices

```
microserviceCodding/
├── docker-compose.yml
├── gateway/
│   ├── Dockerfile
│   ├── src/
│   │   ├── server.ts
│   │   └── routes/
├── services/
│   ├── user-service/
│   │   ├── Dockerfile
│   │   ├── src/
│   │   │   ├── server.ts
│   │   │   ├── models/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   └── routes/
│   ├── order-service/
│   │   ├── Dockerfile
│   │   ├── src/
│   │   │   ├── server.ts
│   │   │   ├── models/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   └── routes/
│   ├── product-service/
│   │   ├── Dockerfile
│   │   ├── src/
│   │   │   ├── server.ts
│   │   │   ├── models/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   └── routes/
├──────────────────────────
```

---

## Prérequis

- [Node.js](https://nodejs.org) version 18 ou supérieure
- [Bun](https://bun.sh) (gestionnaire de packages rapide)
- [Docker](https://www.docker.com) et [Docker Compose](https://docs.docker.com/compose/)
- Client API (ex : Postman ou cURL)

---

## Installation et configuration

### 1. Installer Bun

Pour installer **Bun**, exécutez :

```bash
curl -fsSL https://bun.sh/install | bash
```

Vérifiez l'installation avec :

```bash
bun --version
```

### 2. Cloner le projet

Clonez le projet sur votre machine :

```bash
git clone https://github.com/ThoRibeiro/microserviceCodding.git
cd microserviceCodding
```

### 3. Configuration des variables d'environnement

Chaque service utilise un fichier `.env` pour ses configurations. Exemple de fichier `.env` :

**`gateway/.env`**
```
ORDER_SERVICE_URL=http://order-service:3002
USER_SERVICE_URL=http://user-service:3001
PORT=3000
```

**`services/user-service/.env`**
```
MONGO_URI=mongodb://mongo:27017/user-service
PORT=3001
```

**`services/order-service/.env`**
```
MONGO_URI=mongodb://mongo:27017/order-service
PORT=3002
```

---

## Démarrage du projet

### Avec Docker Compose

1. Construisez et démarrez les conteneurs :

```bash
docker-compose up
```

2. Vérifiez que tous les services sont en cours d'exécution :

```bash
docker ps
```

3. Accédez à la Gateway sur :

```
http://localhost:3000/
```

---

## Utilisation des endpoints

### Gateway
- **GET** `/` : Point de test pour vérifier que la Gateway fonctionne.

### User Service
- **GET** `/users` : Récupérer tous les utilisateurs.
- **GET** `/users/:id` : Récupérer un utilisateur spécifique.
- **POST** `/users` : Créer un nouvel utilisateur.
- **PUT** `/users/:id` : Mettre à jour un utilisateur.
- **DELETE** `/users/:id` : Supprimer un utilisateur.

### Order Service
- **GET** `/orders` : Récupérer toutes les commandes.
- **GET** `/orders/:id` : Récupérer une commande spécifique.
- **POST** `/orders` : Créer une nouvelle commande.
- **PUT** `/orders/:id` : Mettre à jour une commande.
- **DELETE** `/orders/:id` : Supprimer une commande.

### Product Service
- **GET** `/products`
- **GET** `/products/:id`
- **POST** `/products`
- **PUT** `/products/:id`
- **DELETE** `/products/:id`

---

## Développement avec Bun

### Installer les dépendances

Depuis le répertoire de chaque service (par exemple, `gateway/`) :

```bash
bun install
```

### Lancer un service localement

Pour lancer un service localement (sans Docker) :

```bash
bun run src/server.ts
```

---

## Contributions

**RIBEIRO Thomas / RAOUT Enguéran / BONAL Alexis**

---

## Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus de détails.
