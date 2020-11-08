# Kanban (TP intégration back-end & front-end)


## Lancement serveur Back-end

pour lancer le serveur Back-end suivez les instructions données
[ici](https://github.com/kimohmd/TPSpring/tree/master/spring-boot-sample-data-jpa-standalone)

#### Remarque

notez qu'au lancement du serveur Back-end 2 utilisateurs sont créés dans la BDD.

## Installation des dépendences

pour installer les dépendances

```bash
npm install
```
## Lancement du serveur Front-end

pour lancer le serveur de developpement
 
```bash
ng serve
```
puis rendez-vous dans `http://localhost:4200/`.

## Remarque

un proxy est utilisé pour éviter les problèmes de cors. Il est configuré dans le fichier proxy.conf.json, et permet de rediriger les appels au APIs depuis http://localhost:4200/* vers le serveur Back-end sur http://localhost:8080.


## Auteur
Abdel Karim HAMMAD
