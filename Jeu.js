function Perso (Name, Gender, Alias, From, HP, Weapon, weaponPower, criticalWeapon, Master) {
    var _this = this;

    this.name = Name;
    this.gender = Gender;
    this.alias = Alias;
    this.from = From;
    this.hp = HP;
    this.weapon = Weapon;
    this.weaponPower = weaponPower;
    this.criticalWeapon = criticalWeapon;
    this.master = Master;

    this.describe = function() {
        var texts = {
            MALE:
                "[{{name}}] ({{hp}}hp)" +
                "\nAussi connu sous le nom de {{alias}}" +
                "\nIl nous vient tout droit de {{from}}" +
                "\nIl a décidé de se battre avec {{weapon}}" +
                "\nSon pouvoir est de {{weaponPower}}" +
                "\nSon Maitre trainer est \"{{master}}\"",
            FEMALE:
                "[{{name}}] ({{hp}}hp)" +
                "\nAussi connue sous le nom de {{alias}}" +
                "\nElle nous vient tout droit de {{from}}" +
                "\nElle a décidé de se battre avec {{weapon}}" +
                "\nSon pouvoir est de {{weaponPower}}" +
                "\nSon Maitre trainer est \"{{master}}\""
        };

        var text = texts[_this.gender],
            key = null;

        for (key in _this) {
            if (_this.hasOwnProperty(key)) {
                text = text.replace(new RegExp('{{' + key + '}}', 'g'), _this[key]);
            }
        }

        return text;
    };
}

Perso.GENDERS = {
    MALE: "MALE",
    FEMALE: "FEMALE"
};

// You can remove this

// function decrire(obj) {
//     var description = "Nom : " + obj.Name + " \nAussi connu sous l'alias de " + obj.Alias + " \nil nous vient tout droit de " +
//     obj.From + " il possède " + obj.HP + " points de vie !\nIl a décidé de se battre avec : " + obj.Weapon + " ! Son pouvoir est de : " + obj.weaponPower + "\nson Maitre trainer est : "
//      + obj.Master + " !\n\n"

//                 if (obj.Gender == "Femme") {
//                     description = "Nom : " + obj.Name + "\nAussi connue sous le pseudo de " + obj.Alias + "\nelle nous vient tout droit de " +
//                     obj.From + " elle possède " + obj.HP + " points de vie !\nIl a décidé de se battre avec : " + obj.Weapon + " ! Son pouvoir est de : " + obj.weaponPower + "\nSon Maitre trainer est : "
//                     + obj.Master + " !\n\n";
//                 }

//             return description;
// }

annonceArene = {
    bienvenue1: function() {
        var bienvenue = "\n[SPEAKER]\n--Bienvenue dans l'arène 1 contre 1--\n\nNous sommes réunis ce soir pour voir du sang et il va y en avoir.\nCOMBAT À MORT FAITES ENTRER LES COMBATTANTS\n\nPremier combattant ! \n";
           return bienvenue
    },
    bienvenue2: function() {
        var bienvenue = "\n[SPEAKER]\nC'est l'heure du second combattant ! C'est parti !\n";
            return bienvenue;
    },
    inPosition: function() {
        var inPosition = "\n[SPEAKER]\nEn position, guerriers"
            return inPosition;
    },
    newCombattant: function(obj) {
        var bienvenue = "\n[SPEAKER]\nMon dieu ! C'est .. C'est l'esprit de lumière ?";
            return bienvenue;
        }
    }

fight = {
    sortirArme: function(obj) {
        var sortie = obj.Name + " décide de passer à l'action et sort son arme '" + obj.Weapon + "' !";
            return sortie;
    },
    enGarde: function(obj) {
        var Garde = obj.Name + " se met en garde !";
            return Garde;
    },
    attaque: function(obj, adversaire) {

        var attaque = obj.Name + " décide d'attaquer la première ! "
        var touch = obj.Name + " a touché sa cible ! Quel coup ! " + adversaire.Name + " perd " + obj.weaponPower + " HP !";
        var criticalTouch = obj.Name + " vient d'infliger un coup critique ! Exceptionnel ! " + adversaire.Name + " perd " + obj.criticalWeapon + " HP !";
        var noTouch = obj.Name + " a raté son coup ! Quel dommage ! ";
        var echecCritique = Math.floor((Math.random() * 10) + 1);
        var coupCritique = Math.floor((Math.random() * 20) + 10);

        if (obj.Gender == "Homme") {
                attaque = obj.Name + " décide d'attaquer le premier ! ";
            }

        if(echecCritique == 6) {

                    return noTouch;

            } else if (coupCritique == 18) {

                adversaire.HP -= obj.criticalWeapon;

                    return criticalTouch;

             } else {

                adversaire.HP -= obj.weaponPower;

                    return touch;
            }
        console.log(attaque);


    },
    attaque2: function(obj, adversaire) {
        var attaque = obj.Name + " décide d'attaquer à son tour ! ";
        var touch = obj.Name + " a touché sa cible ! Quel coup ! " + adversaire.Name + " perd " + obj.weaponPower + " HP !";
        var criticalTouch = obj.Name + " vient d'infliger un coup critique ! Exceptionnel ! " + adversaire.Name + " perd " + obj.weaponPower + " HP !";
        var noTouch = obj.Name + " a raté son coup ! Quel dommage ! ";
        var echecCritique = Math.floor((Math.random() * 10) + 1);
        var coupCritique = Math.floor((Math.random() * 20) + 10);


        console.log(attaque);

            if(echecCritique == 6) {

                    return noTouch;
                } else if (coupCritique == 18) {

                    adversaire.HP -= obj.criticalWeapon;

                        return criticalTouch;

                } else {

                     adversaire.HP -= obj.weaponPower;

                         return touch;

        }

    }

}

ambiance = {
    etatPerso: function(obj, adversaire) {
        if (obj.HP > 20) {
            if (obj.Gender == "Femme") {
                console.log(obj.Name + " se sent bien dans ce combat, elle lui reste " + obj.HP + " HP !");
            } else {
            console.log(obj.Name + " se sent bien dans ce combat, il lui reste " + obj.HP + " HP !");
             }

                if (adversaire.HP < 21) {

                        console.log("Ce n'est pas le cas pour son adversaire " + adversaire.Name + " qui possède maintenant " + adversaire.HP + " HP\n" + adversaire.Name +
                        " décide d'abattre sa dernière carte, c'est le moment...\n");

                } else {

                    console.log(adversaire.Name + " ne se sent pas bien mais il n'abandonnera pas, c'est un combat à mort ! il lui reste " + adversaire.HP + " HP !\n");

            }
        } else {
            if (obj.Gender == "Homme") {
                console.log(obj.Name + " est mal en point ... C'est difficile pour lui et il risque de devoir rendre les armes dans peu de temps !");
            } else {
                console.log(obj.Name + " est mal en point ... C'est difficile pour elle et elle risque de devoir rendre les armes dans peu de temps !");
            }
            }
    },
    etatHP: function(obj, adversaire, invocation) {
        console.log(obj.Name + " : " + obj.HP + " HP");
        console.log(adversaire.Name + " : " + adversaire.HP + " HP");
        console.log(invocation.Name + " : " + invocation.HP + " HP");
    }
}

var Travis = new Perso("Travis", Perso.GENDERS.MALE, "Guardian Angel", "Independenza", 250, "Light Spirit", 60, 90, "-The W-");
var Kaina = new Perso("Kaina", Perso.GENDERS.FEMALE, "Fatal Smooth", "Kanazawa", 140, "Telescopic Katana", 30, 50, "Musashi Miyamoto");
var Ryan = new Perso("Ryan", Perso.GENDERS.MALE, "Fucking Casu", "Call of Duty", 50, "Shrill Voice", 15, 50, "'Only me can judge me'");


 var Personnages = [];
 Personnages.push(Travis);
 Personnages.push(Kaina);
 Personnages.push(Ryan);

 function decrireAllPerso() {
    for (var i = 0; i < Personnages.length; i++){
         var descriptionAll = "- Nom : " + Personnages[i].Name + " Aussi connu sous l'alias de " + Personnages[i].Alias + " \nil nous vient tout droit de " +
         Personnages[i].From + " il possède " + Personnages[i].HP + " points de vie !\n'DECLAREZ VOTRE ARME COMBATTANT' '" + Personnages[i].Weapon + " ! son pouvoir est de " + Personnages[i].weaponPower + "' 'très bien.' \nson Maitre trainer est : "
         + Personnages[i].Master + " !\n";

         console.log(descriptionAll);
        }
    }
}

console.log(Travis.describe());


 //console.log(annonceArene.bienvenue1());
 //console.log(decrire(Kaina));
 //console.log(annonceArene.bienvenue2());
 //console.log(decrire(Ryan));
 //console.log(annonceArene.inPosition());
 //console.log(fight.attaque(Kaina, Ryan));
 //console.log(fight.attaque2(Ryan, Kaina));
 //console.log(decrireAllPerso());
 //console.log(decrire(Kaina));
 //console.log(ambiance.etatPerso(Kaina, Ryan));
 //console.log(decrireH(Travis));
 //console.log(fight.sortirArme(Travis));
 //console.log(fight.enGarde(Kaina));
 //console.log(ambiance.etatHP(Kaina, Ryan, Travis));
 //console.log(ambiance.etatPerso(Kaina, Ryan));