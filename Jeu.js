
persoFactory = {
    init: function(Name, Alias, From, HP, Weapon, weaponPower, criticalWeapon, Master) {
        this.Name = Name;
        this.Alias = Alias;
        this.From = From;
        this.HP = HP;
        this.Weapon = Weapon;
        this.weaponPower = weaponPower;
        this.criticalWeapon = criticalWeapon;
        this.Master = Master;
    },
    decrireAllPerso: function() {
        for (var i = 0; i < Personnages.length; i++){
     var descriptionAll = "Nom : " + Personnages[i].Name + " Aussi connu sous l'alias de " + Personnages[i].Alias + " \nil nous vient tout droit de " + 
        Personnages[i].From + " il possède " + Personnages[i].HP + " points de vie !\n'DECLAREZ VOTRE ARME COMBATTANT' '" + Personnages[i].Weapon + " ! son pouvoir est de " + Personnages[i].weaponPower + "' 'très bien.' \nson Maitre trainer est : " 
        + Personnages[i].Master + " !\n\n";

        return descriptionAll;
     }
    }
}

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
    newCombattant: function(Object) {
        var bienvenue = "\n[SPEAKER]\nMon dieu ! C'est .. C'est l'esprit de lumière ?";
        return bienvenue;
    }
}
fight = {
    sortirArme: function(Object) {
        var sortie = Object.Name + " décide de passer à l'action et sort son arme '" + Object.Weapon + "' !";
        return sortie;
    },
    enGarde: function(Object) {
        var Garde = Object.Name + " se met en garde !";
        return Garde;
    },
    attaqueF: function(Object, adversaire) {
        var touch = Object.Name + " a touché sa cible ! Quel coup ! " + adversaire.Name + " perd 30 HP !";
        var criticalTouch = Object.Name + " vient d'infliger un coup critique ! Exceptionnel ! " + adversaire.Name + " perd 50 HP !";
        var noTouch = Object.Name + " a ratée son coup ! Quel dommage ! ";
        var echecCritique = Math.floor((Math.random() * 10) + 1);
        var coupCritique = Math.floor((Math.random() * 20) + 10);
        
        console.log(Object.Name + " décide d'attaquer la première !");

        if(echecCritique == 6) {
                return noTouch;
            } else if (coupCritique == 18) {
                adversaire.HP -= Object.criticalWeapon;
                return criticalTouch;
            } else {
                 adversaire.HP -= Object.weaponPower;
                return touch;
            }

    },
    attaqueH: function(Object, adversaire) {
        var attaque = Object.Name + " décide d'attaquer le premier ! ";
        var touch = Object.Name + " a touché sa cible ! Quel coup ! " + adversaire.Name + " perd " + weaponPower + " HP !";
        var criticalTouch = Object.Name + " vient d'infliger un coup critique ! Exceptionnel ! " + adversaire.Name + " perd " + criticalWeapon + " HP !";
        var noTouch = Object.Name + " a raté son coup ! Quel dommage ! ";
        var echecCritique = Math.floor((Math.random() * 10) + 1);
        var coupCritique = Math.floor((Math.random() * 20) + 10);
        
        console.log(attaque);

        if(echecCritique == 6) {
                return noTouch;
            } else if (coupCritique == 18) {
                adversaire.HP -= Object.criticalWeapon;
                return criticalTouch;
            } else {
                 adversaire.HP -= Object.weaponPower;
                return touch;
            }

    },
    attaqueF2: function(Object, adversaire) {
        var touch = Object.Name + " a touché sa cible ! Quel coup ! " + adversaire.Name + " perd " + Object.weaponPower + " HP !";
        var criticalTouch = Object.Name + " vient d'infliger un coup critique ! Exceptionnel ! " + adversaire.Name + " perd " + Object.weaponPower + " HP !";
        var noTouch = Object.Name + " a ratée son coup ! Quel dommage ! ";
        var echecCritique = Math.floor((Math.random() * 10) + 1);
        var coupCritique = Math.floor((Math.random() * 20) + 10);
        
        console.log(Object.Name + " décide d'attaquer à son tour ! ");

        if(echecCritique == 6) {
                return noTouch;
            } else if (coupCritique == 18) {
                adversaire.HP -= Object.criticalWeapon;
                return criticalTouch;
            } else {
                 adversaire.HP -= Object.weaponPower;
                return touch;
            }

    },
    attaqueH2: function(Object, adversaire) {
        var attaque = Object.Name + " décide d'attaquer à son tour ! ";
        var touch = Object.Name + " a touché sa cible ! Quel coup ! " + adversaire.Name + " perd " + Object.weaponPower + " HP !";
        var criticalTouch = Object.Name + " vient d'infliger un coup critique ! Exceptionnel ! " + adversaire.Name + " perd " + Object.weaponPower + " HP !";
        var noTouch = Object.Name + " a raté son coup ! Quel dommage ! ";
        var echecCritique = Math.floor((Math.random() * 10) + 1);
        var coupCritique = Math.floor((Math.random() * 20) + 10);
        
        console.log(attaque);

        if(echecCritique == 6) {
                return noTouch;
            } else if (coupCritique == 18) {
                adversaire.HP -= Object.criticalWeapon;
                return criticalTouch;
            } else {
                 adversaire.HP -= Object.weaponPower;
                return touch;
            }

    }
}
ambiance = {
    etatPerso: function(Object, adversaire) {
        if (Object.HP > 20) {
            console.log(Object.Name + " se sent bien dans ce combat, il lui reste " + Object.HP);
                if (adversaire.HP < 21) {
                    console.log("Ce n'est pas le cas pour son adversaire " + adversaire.Name + " qui possède maintenant " + adversaire.HP + " HP\n" + adversaire.Name + 
                    " décide d'abattre sa dernière carte, c'est le moment...\n");
                } else {
                    console.log(adversaire.Name + " ne se sent pas bien mais il n'abandonnera pas, c'est un combat à mort ! il lui reste " + adversaire.HP + " HP !\n");
                }
        } else {
            console.log(Object.Name + " est mal en point ... C'est difficile pour elle et elle risque de devoir rendre les armes dans peu de temps !");
        }
    },
    etatHP: function(Object, adversaire, invocation) {
        console.log(Object.Name + " : " + Object.HP + " HP");
        console.log(adversaire.Name + " : " + adversaire.HP + " HP");
        console.log(invocation.Name + " : " + invocation.HP + " HP");
    }
}
function decrireH(Object) {
    var description = "Nom : " + Object.Name + " \nAussi connu sous l'alias de " + Object.Alias + " \nil nous vient tout droit de " + 
        Object.From + " il possède " + Object.HP + " points de vie !\nIl a décidé de se battre avec : " + Object.Weapon + " ! Son pouvoir est de : " + Object.weaponPower + "\nson Maitre trainer est : " 
        + Object.Master + " !\n\n"

        return description;
}
function decrireF(Object) {
    var description = "Nom : " + Object.Name + " \nAussi connue sous l'alias de " + Object.Alias + " \nElle nous vient tout droit de " + 
        Object.From + " elle possède " + Object.HP + " points de vie !\nElle a décidé de se battre avec : " + Object.Weapon + " ! Son pouvoir est de : " + Object.weaponPower + "\nson Maitre trainer est : " 
        + Object.Master + " !\n\n"

        return description;
}

var Travis = Object.create(persoFactory);
var Kaïna = Object.create(persoFactory);
var Ryan = Object.create(persoFactory);

 Travis.init("Travis", "Guardian Angel", "Independenza", 250, "Light Spirit", 60, 90, "-The W-");
 Kaïna.init("Kaïna", "Fatal Smooth", "Kanazawa", 140, "Telescopic Katana", 30, 50, "Musashi Miyamoto");
 Ryan.init("Ryan", "Fucking Casu", "Call of Duty", 50, "Shrill Voice", 15, 50, "'Only me can judge me'");


 var Personnages = [];
 Personnages.push(Travis);
 Personnages.push(Kaïna);
 Personnages.push(Ryan);
 
console.log(annonceArene.bienvenue1());
 console.log(decrireF(Kaïna));
 console.log(annonceArene.bienvenue2());
 console.log(decrireH(Ryan));
 console.log(annonceArene.inPosition());
 console.log(fight.attaqueF(Kaïna, Ryan));
  console.log(ambiance.etatPerso(Kaïna, Ryan));
 console.log(fight.attaqueH2(Ryan, Kaïna));
  console.log(decrireH(Travis));
 console.log(fight.sortirArme(Travis));
 console.log(fight.enGarde(Kaïna));
 console.log(fight.attaqueH2(Travis, Kaïna));
 console.log(ambiance.etatHP(Kaïna, Ryan, Travis));


 

