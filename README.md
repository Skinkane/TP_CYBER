# PROJECT CYBERSECURITE

## SETUP
```
1 - Clonner le repo

2 - Se placer à la racine du projet

3 - Faire les commandes suivante :

        . docker build -t 'projet_secu' .

        . docker run -d -p 8080:8080 projet_secu

4 - Se rendre sur l'adresse : http://localhost:8080/

```

## DESCRIPTION
```

Ce projet est développé en SPRING et contient une base de données avec une API. On peut envoyer des 
informations et les lire via POSTMAN.

```

## DICT
```
Disponibilité : 3/5 : La disponibilité de cette application est relative, dans le sens ou elle peut être 
                      lancée à n'importe quel moment via le container Docker, cependant celle-ci ne sera 
                      dispoible qu'en local, d'où la note moyenne.
```
```
Intégrité : 1/5 : La modification n'as pas de restriction si ce n'est ce que peut supporter le container 
                  Docker, l'application mérite donc selon moi une mauvaise note à ce niveau.
```
```
Confidentitalité : 1/5 : Les données sont en libre lecture sur l'application à ce stade, la 
			 confidentialité est donc minimale, ce qui justifie selon moi une mauvaise 
                         note également.
```
```
Tracabilité : 4/5 : L'application ne retiens aucune information personelle et aucun journaux, il n'y à 
                    pas de tracabilité réélle, elle est donc selon moi très bonne sur ce point.
```

### AUTEUR
```
Gautier Couture
```