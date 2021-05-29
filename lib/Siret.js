class Siret {
    constructor(siret) {
        this.siret = siret;
    }
    valid() {
        if (this.siret.length > 13 && Siret.estSiretValide(this.siret)) {
            return true;
        }
        return false;
    }
    static estSiretValide(siret) {
        if ((siret.length != 14) || (isNaN(siret)))
            return false;
        else {
            let somme = 0;
            let tmp;
            for (let cpt = 0; cpt < siret.length; cpt++) {
                if ((cpt % 2) == 0) { // Les positions impaires : 1er, 3è, 5è, etc... 
                    tmp = siret.charAt(cpt) * 2; // On le multiplie par 2
                    if (tmp > 9)
                        tmp -= 9; // Si le résultat est supérieur à 9, on lui soustrait 9
                } else
                    tmp = siret.charAt(cpt);
                somme += parseInt(tmp);
            }
            console.log(somme);
            if ((somme % 10) !== 0) return false; // Si la somme est un multiple de 10 alors le SIRET est valide         
        }
        return true;
    }
    convert() {
        let siren = this.siret.substring(0, 9);
        let tva = (12 + 3 * (siren % 97)) % 97;
        return "FR" + tva + siren;
    }
    async exists(){
        let response = await fetch(`https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/${this.siret}`);
        let data = await response.json();
        if(data.etablissement === undefined){
            return false;
        }
        return true;
    }
}