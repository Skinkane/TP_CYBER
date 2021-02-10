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
informations et les lire via POSTMAN. Cette a pour but de gérer des profiles de réseaux sociaux gestion
des amis.

```

## FAILLES
```
Injection SQL :

 --> Faire des appels API via POSTMAN (Collection d'appels disponible).

La base de données contient des données sensibles sur les utilisateurs, ce point d'accés crée donc des problèmes de confidentitalité. Il est possible de lire ces informations sensibles via les appels API, il y a donc une rupture totale de
l'intégrité de l'application.Des informations de connexions peuvent être récupérer durant l'opération. Celles-ci pourraient permettre à ceux qui se sont introduit de s'introduire sur d'autres plateformes. Le manque de système d'administration permet aux personnes qui s'introduise de modifier des informations précieuses.

Pour combler cette faille il faudrait penser à developper le système d'administration et donc de restreindre les différents
appels API libres aux seuls adinistrateur de l'application.

Faille HTTP (Certificat SSL manquant):

 --> L'application est accessible uniquement en HTTP.

Le manque de certificat SSL sur l'applicaion fait que cette dernière n'est pas en HTTPS et cela induit que les requêtes ne sont pas criptés, celles-ci sont en clair et donc cela crée une fois de plus une rupture de l'intégrité de l'application. Le manque d'intégrité de l'application induit égalementun manque de confidentialité et de sécurité notamment sur les réseaux publics.

Pour combler cette faille il faudrait acquérir un certificat SSL et donc passer en HTTPS.


```

## MERMAIDJS

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgT1NbT1NdIC0tPiBEb2NrZXJ7RG9ja2VyfVxuICBMQU5bTEFOIGV0IHBvcnRzIG91dmVydHNdIC0tPiBEb2NrZXJcbiAgRG9ja2VyIC0tPiBBcGlbQVBJXVxuICBBcGkgLS0-IFNRTFtSZXF1w6p0ZXMgU1FMXVxuICBTUUwgLS0-IEluamVjW0luamVjdGlvbiBTUUxdXG4gIERvY2tlciAtLT4gQkREW0gyXVxuICBCREQgLS0-IE1EUFtNb3QgZGUgcGFzc2VdIiwibWVybWFpZCI6e30sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgT1NbT1NdIC0tPiBEb2NrZXJ7RG9ja2VyfVxuICBMQU5bTEFOIGV0IHBvcnRzIG91dmVydHNdIC0tPiBEb2NrZXJcbiAgRG9ja2VyIC0tPiBBcGlbQVBJXVxuICBBcGkgLS0-IFNRTFtSZXF1w6p0ZXMgU1FMXVxuICBTUUwgLS0-IEluamVjW0luamVjdGlvbiBTUUxdXG4gIERvY2tlciAtLT4gQkREW0gyXVxuICBCREQgLS0-IE1EUFtNb3QgZGUgcGFzc2VdIiwibWVybWFpZCI6e30sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

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
