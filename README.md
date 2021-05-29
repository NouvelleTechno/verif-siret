# verif-siret
Librairie Javascript permettant de vérifier la validité et/ou l'existance d'un numéro de SIRET

## Installation
Pour utiliser la librairie, téléchargez le zip et copiez `Siret.min.js` dans votre projet

## Utilisation
### Inclure la librairie
Pour utiliser la librairie et vérifier un numéro de SIRET, commencez par inclure le fichier `Siret.min.js` dans la page concernée (il est conseillé d'inclure cette balise dans la partie `<head>` de la page)
```html
<script src="cheminverslejs/Siret.min.js" defer></script>
```
### Instancier la librairie
Instanciez la librairie en ajoutant cette ligne (Remplacez les `00000000000000` par le numéro de SIRET à vérifier)
```javascript
let siret = new Siret("00000000000000");
```
### Les méthodes
Plusieurs méthodes sont à votre disposition
#### Vérifier si le SIRET est valide (pas s'il existe)
Utilisez la méthode `valid()` comme ci-dessous. Elle retourne un booléen indiquant si le SIRET est correct.

ATTENTION: cette méthode ne vérifie pas l'existence réelle du numéro de SIRET.
```javascript
siret.valid();
```
#### Vérifier si le SIRET existe
Utilisez la méthode `exists()` comme ci-dessous. Elle retourne un booléen indiquant si le SIRET est correct.

ATTENTION: cette méthode utilise une API externe, elle est donc asynchrone. Elle ne garantit pas à 100% l'existence du SIRET.
```javascript
siret.exists()
    .then(response => {
        // Ici response contient true si le SIRET existe et false dans le cas contraire
    });
```
#### Convertir le SIRET en numéro de TVA intracommunautaire
Utilisez la méthode `convert()` comme ci-dessous. Elle retourne le numéro de TVA intracommunautaire correspondant au SIRET

ATTENTION: cette méthode ne vérifie pas l'existence réelle du numéro de SIRET.
```javascript
let tva = siret.convert();
```
