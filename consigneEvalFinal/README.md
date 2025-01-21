# Évaluation : Migration d'une API de paiement vers une architecture microservices

## **🔍 Table des matières :**
1. [🔢 Objectif](#objectif)
2. [📊 Contexte](#contexte)
3. [⚖️ Consignes techniques](#consignes-techniques)
   - [1. Fonctionnalités attendues](#1-fonctionnalités-attendues)
   - [2. Contraintes techniques](#2-contraintes-techniques)
4. [📊 Évaluation et barème (sur 20 points)](#évaluation-et-barème-sur-20-points)
5. [🔧 Consignes pour les étudiants](#consignes-pour-les-étudiants)
6. [⏳ Durée de l’évaluation](#durée-de-lévaluation)

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

✅ Pour vous aider dans cette démarche, nous avons initié une collection Postman que vous pouvez télécharger ici !

🚨 Pour commencer le projet, vous devez forker le dépôt existant et le renommer sous la forme `evalFinale-NOM-Prénom`. Toute personne qui ne respecte pas les demandes sera **sanctionnée en points** !

---

## **⚖️ Consignes techniques :**

### **1. Fonctionnalités attendues :**
Le **Payment Service** doit inclure les routes suivantes :

1. **POST /payments** :
   - Permet de créer un paiement pour une commande existante.
   - Corps attendu :
     ```json
     {
       "orderId": "id_de_la_commande",
       "amount": 100.50,
       "status": "pending"
     }
     ```
   - Validez que l'**Order Service** contient la commande avant de créer le paiement.

2. **GET /payments** :
   - Permet de récupérer tous les paiements.

3. **GET /payments/:id** :
   - Permet de récupérer un paiement spécifique par son ID.

4. **GET /payments/order/:orderId** :
   - Permet de récupérer tous les paiements associés à une commande.

5. **PUT /payments/:id** :
   - Permet de mettre à jour le statut d’un paiement (par exemple : `completed` ou `failed`).

6. **DELETE /payments/:id** :
   - Permet de supprimer un paiement.

### **2. Contraintes techniques :**
- Utilisez **TypeScript** et **Express** pour le développement.
- Utilisez **MongoDB** pour stocker les paiements.
- Intégrez l’**Order Service** pour valider les commandes via une requête HTTP.
- Fournissez un fichier **Dockerfile** pour conteneuriser votre microservice.
- Ajoutez la configuration nécessaire dans le fichier **docker-compose.yml** existant pour intégrer votre microservice.
- Créez une documentation **Postman** (ou similaire) décrivant toutes vos requêtes pour tester l’API.

---

## **📊 Évaluation et barème (sur 20 points) :**

1. **Fonctionnalités de base (8 points) :**
   - Implémentation des routes CRUD (POST, GET, PUT, DELETE).
   - Validation avec l’**Order Service** avant la création d’un paiement.

2. **Architecture et organisation du code (4 points) :**
   - Utilisation des bonnes pratiques (MVC).
   - Code lisible et bien organisé.

3. **Intégration et communication (4 points) :**
   - Intégration réussie avec l’Order Service via des requêtes HTTP.
   - Ajout correct dans le `docker-compose.yml`.

4. **Documentation et tests (4 points) :**
   - Documentation complète (README, Postman ou équivalent).
   - Exemple de requêtes cURL ou Postman pour tester l’API.

---

## **🔧 Consignes pour les étudiants :**

1. Clonez le dépôt existant contenant l'architecture des services actuels.
2. Forkez le dépôt et renommez-le sous la forme `evalFinale-NOM-Prénom`.
3. Créez un nouveau service en suivant ces étapes : 
    - Aller dans services `cd services`.
   - Exécutez `mkdir nom-du-service` pour créer un dossier dédié.
   - Accédez au dossier avec `cd nom-du-service`.
   - Initialisez un projet Bun avec `bun init` en définissant le point d'entrée à `src/server.ts`.
4. Fournissez votre code avec :
   - Un dossier `src/` contenant `models/`, `routes/`, `controllers/` et `services/`.
   - Un fichier `server.ts` pour démarrer le microservice.
   - Une configuration **Dockerfile** pour conteneuriser votre service.
5. Modifiez le fichier `docker-compose.yml` pour inclure votre service.
6. Testez votre microservice en local via Docker et fournissez une capture d'écran ou une vidéo démontrant son bon fonctionnement.
7. Vérification du bon fonctionnement des autres services (aucun effet de bord dû au développement)

---

## **⏳ Durée de l’évaluation :**
- **En classe :** 8 heures.

---

Bonne chance à tous !
