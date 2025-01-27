# Évaluation : Migration d'une API de paiement vers une architecture microservices

## **🔍 Table des matières :**
1. [🔢 Objectif](#objectif)
2. [📊 Contexte](#contexte)
3. [⚖️ Consignes techniques](#consignes-techniques)
   - [1. Fonctionnalités attendues](#1-fonctionnalités-attendues)
   - [2. Contraintes techniques](#2-contraintes-techniques)
4. [🕰️ Modifications à effectuer dans les services existants](#modifications-à-effectuer-dans-les-services-existants)
5. [📊 Évaluation et barème (sur 20 points)](#évaluation-et-barème-sur-20-points)
6. [🔧 Consignes pour les étudiants](#consignes-pour-les-étudiants)
7. [⏳ Durée de l’évaluation](#durée-de-l’évaluation)

---

## **🔢 Objectif :**

Migrer une **API monolithique de paiement** vers une architecture microservices en TypeScript, basée sur **Express**, avec une base de données **MongoDB**. Ce microservice devra s'intégrer parfaitement dans l'architecture existante et respecter les standards définis pour une intégration fluide avec les autres services.

---

## **📊 Contexte :**

Vous faites partie d'une équipe travaillant sur une architecture microservices. L'architecture actuelle comprend déjà les services suivants :

- **User Service** : Gestion des utilisateurs.
- **Order Service** : Gestion des commandes.
- **Product Service** : Gestion des produits.

Votre mission est de migrer une API monolithique de paiement vers un **Payment Service** en microservice, qui permettra de :

1. Créer des paiements associés à une commande.
2. Récupérer les informations de paiements par ID ou par commande.
3. Mettre à jour le statut d’un paiement.
4. Supprimer un paiement.

Le **Payment Service** devra communiquer avec l’**Order Service** pour valider que la commande existe avant de créer un paiement.

💡 **Nouvelle demande du client :**
Le client souhaite pouvoir consulter le total dépensé par chaque utilisateur. Vous devez donc :
- Implémenter une fonctionnalité pour **incrémenter** le montant total des paiements d’un utilisateur lorsque celui-ci effectue un paiement.
- **Décrémenter** ce montant lorsqu’un paiement est annulé.

🛑 Pour commencer, vous devez forker le dépôt existant et le renommer sous la forme `evalFinale-NOM-Prénom`.

---

## **⚖️ Consignes techniques :**

### **1. Fonctionnalités attendues :**

Le **Payment Service** doit inclure les routes suivantes :

- **POST /payments** :
  - Permet de créer un paiement pour une commande existante.
  - **Corps attendu :**
    ```json
    {
      "orderId": "id_de_la_commande",
      "userId":"6e36752Z657865XT324",
      "amount": 100.50,
      "status": "pending"
    }
    ```
  - Validez que l'**Order Service** contient la commande avant de créer le paiement.

- **GET /payments** :
  - Permet de récupérer tous les paiements.

- **GET /payments/:id** :
  - Permet de récupérer un paiement spécifique par son ID.

- **GET /payments/order/:orderId** :
  - Permet de récupérer tous les paiements associés à une commande.

- **PUT /payments/:id** :
  - Permet de mettre à jour le statut d’un paiement (par exemple : `completed` ou `failed`).

- **DELETE /payments/:id** :
  - Permet de supprimer un paiement.

### **2. Contraintes techniques :**

1. Utilisez **TypeScript** et **Express** pour le développement.
2. Utilisez **MongoDB** pour stocker les paiements.
3. Intégrez l’**Order Service** pour valider les commandes via une requête HTTP.
4. Implémentez la gestion du total dépensé par les utilisateurs dans le **User Service** :
   - Créez une méthode pour **incrémenter** et **décrémenter** le champ `totalPayments`.
5. Fournissez un fichier **Dockerfile** pour conteneuriser votre microservice.
6. Ajoutez la configuration nécessaire dans le fichier **docker-compose.yml** existant pour intégrer votre microservice.
7. Créez une documentation **Postman** (ou similaire) décrivant toutes vos requêtes pour tester l’API.

---

## **🕰️ Modifications à effectuer dans les services existants :**

### **User Service :**
1. **Ajout d’un champ `totalPayments` dans le modèle utilisateur :**
   - Ce champ doit suivre le montant total des paiements effectués par chaque utilisateur.
2. **Mise à jour automatique de `totalPayments` :**
   - **Incrémentez** le montant lors de la création d’un paiement.
   - **Diminuez** le montant lors de la suppression d’un paiement.

Ajoutez deux routes dans le **User Service** :
- **PUT /users/:id/increment-payments** :
  - Incrémente le champ `totalPayments` d’un utilisateur.
  - Corps attendu :
    ```json
    {
      "amount": 100.50
    }
    ```
- **PUT /users/:id/decrement-payments** :
  - Diminue le champ `totalPayments` d’un utilisateur.
  - Corps attendu :
    ```json
    {
      "amount": 100.50
    }
    ```

### **Order Service :**
1. **Validation avant la confirmation de commande :**
   - Ajoutez une validation pour vérifier qu’un paiement valide existe avant de confirmer une commande.

---

## **📊 Évaluation et barème (sur 20 points) :**

1. **Fonctionnalités de base (15 points) :**
   - Implémentation des routes CRUD (POST, GET, PUT, DELETE).
   - Validation avec l’Order Service avant la création d’un paiement.
   - Intégration dans le User Service.

2. **Architecture et organisation du code (2 points) :**
   - Utilisation des bonnes pratiques (MVC).
   - Code lisible et bien organisé.

3. **Intégration et communication (1 point) :**
   - Intégration réussie avec l’Order Service via des requêtes HTTP.
   - Ajout correct dans le `docker-compose.yml`.

4. **Documentation et tests (2 points) :**
   - Documentation complète (README, Postman ou équivalent).
   - Exemple de requêtes cURL ou Postman pour tester l’API.

---

## **🔧 Consignes pour les étudiants :**

1. Clonez le dépôt existant contenant l'architecture des services actuels.
2. Forkez le dépôt et renommez-le sous la forme `evalFinale-NOM-Prénom`.
3. Créez un nouveau service en suivant ces étapes :
   - Allez dans le dossier `services` : `cd services`.
   - Exécutez `mkdir payment-service` pour créer un dossier pour votre service.
   - Accédez au dossier : `cd payment-service`.
   - Initialisez un projet Bun avec `bun init` en définissant le point d'entrée à `src/server.ts`.
   - Configurez un fichier `.env` à la racine de votre projet avec les variables d’environnement nécessaires.
4. Fournissez votre code avec :
   - Un dossier `src/` contenant `models/`, `routes/`, `controllers/` et `services/`.
   - Un fichier `server.ts` pour démarrer le microservice.
   - Une configuration **Dockerfile** pour conteneuriser votre service.
5. Modifiez le fichier `docker-compose.yml` pour inclure votre service.
6. Testez votre microservice en local via Docker et fournissez une capture d'écran ou une vidéo démontrant son bon fonctionnement.
7. Assurez-vous que les autres services fonctionnent correctement après vos modifications.

---

## **⏳ Durée de l’évaluation :**

- **En classe :** 8 heures.

---

**Bonne chance à tous !**
