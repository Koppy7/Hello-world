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

function TheArene (Typ){
    var _that = this;

    this.typ = Typ;

    this.describe = function () {
        var texts = {
            Security:
                "Notre garde robotique dernière génération est et restera" +
                "\npendant encore une décénnie la plus robuste, la plus agile" +
                "\net la plus pointue des armées robotique de notre génération" + 
                "\net marquera le début d'une nouvelle ère en matière de défense" +
                "\nà petite et grande échelle. Nous vous présentons aujourd'hui ..."+
                "\nLA révolution : Les iMPLANTS TROUPERS\n\n",
                
            whatIsThis:   
                "La fondation McCourt est heureuse de vous présenter" +
                "\nsa toute nouvelle arène de combattants iTech !" +
                "\nEquipée d'une garde robotique et de barrières" +
                "\nelectromagnétiques empéchant toute fuite de la part" +
                "\nd'un lache et peureux combattant." + 
                "\nVos sièges sont équipés de casques de réalité virtuelle" +
                "\nafin de revivre au plus prés de l'action une phase qui vous" +
                "\na marqué. Réveillez votre instinct en vous arrêtant au stand" +
                "\nde puçage électronique afin de vivre le 'Show' plus intensément." +
                "\n--SOYEZ CE QU'ON VOUS SOMME D'ÊTRE--\n\n",
            
            Fundation:
                "La fondation McCourt offre à nos clients et fideles combattants" +
                "\nla certitude d'un controle total sur le bon déroulé de chacuns" +
                "\nde nos combats grâce à l'apaisement de foule offert par nos" +
                "\npartenaires et sponsors aux stands de puçage qui se trouvent aux" +
                "\n4 coins de l'arène. Osez être nous même.\n\n"
        };

        var text = texts[_that.typ];

        return text;
    };
    this.annonce = function () {
        var texts = {
            WelcomeAll:
                "[SPEAKER]Bienvenue ! Nous nous retrouvons aujourd'hui pour un combat" +
                "\ncomptant pour les Wildcards en vue des championnats du Monde qui" +
                "\nse joueront ici même à Marseille. Nous vous promettons un show" +
                "\ninoubliable pour le dernier combat de notre ère. La finale se" +
                "\njouera seulement lorsque les deux finalistes seront remis" +
                "\net prêts à combattre. Cela peut prendre plusieurs années" +
                "\nlorsque qu'un combattant a du se battre à mort avec une" +
                "\nvingtaine d'adversaire en moins de 3 mois afin d'arriver en" +
                "\nfinale.\n\n",

            Welcome1stFighter:
                "[SPEAKER]Nous avons le plaisir d'accueillir notre premier combattant !" +
                "\nQUE LE SHOW COMMENCE\n\n",
            
            Welcome2ndFighter:
                "[SPEAKER]C'est maintenant le tour du deuxième combattant d'entrer en scène," +
                "\nJe vous demande une ovation !\n\n",
            
            Reprise:
                "[SPEAKER]Doux Jesus, quelle ambiance !\n"

        };

        var text = texts[_that.typ];

        return text;
    };
}
TheArene.TYP = {
    SECURITY: "Security",
    WHATISTHIS: "whatIsThis",
    FUNDATION: "Fundation",
    WELCOMEALL: "WelcomeAll",
    WELCOME1st: "Welcome1stFighter",
    WELCOME2nd: "Welcome2ndFighter",
    REPRISE: "Reprise"
};

function Ambiance (Effect) {
    var _that = this;

    this._effect = Effect;

    this.effect = function () {
        var texts = {
            Lumieres:
                "Les faisseaux lumineux dansent ensemble dans un rythme qui semble s'accelerer...\n\n",
            
            Sons:
                "Dans une danse entre tambours et trompettes le temps semble s'être arreter." +
                "\nLe rythme semble être en parfait accord avec la danse des lumières",

            Fumée:
                "Une épaisse fumée rouge entoure l'ensemble du champ de bataille ..." +
                "\nL'odeur de la mort se fait de plus en plus préssentir dans tous les" +
                "\nrecoins de l'arène.",
            
            Fermeture:
                 "Les portes donnant accés aux tribunes se sont brusquement refermées" +
                "tandis que celles du champs de bataille s'ouvrent lentement. On" +
                "distingue difficilement le bruit de feraille à travers la musique."
        }
        var text = texts[_that._effect];

        return text;
    };
}
Ambiance.EFFECT = {
    LUMIERES: "Lumieres",
    SONS: "Sons",
    FUMÉE: "Fumée",
    FERMETURE: "Fermeture"
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

var Garde = new TheArene(TheArene.TYP.SECURITY);
var Arene = new TheArene(TheArene.TYP.WHATISTHIS);
var Fondation = new TheArene(TheArene.TYP.FUNDATION);
var WelcomeAll = new TheArene(TheArene.TYP.WELCOMEALL);
var Welcome1st = new TheArene(TheArene.TYP.WELCOME1st);
var Welcome2nd = new TheArene(TheArene.TYP.WELCOME2nd);
var Reprise = new TheArene(TheArene.TYP.REPRISE);

var Lumieres = new Ambiance(Ambiance.EFFECT.LUMIERES);
var Sons = new Ambiance(Ambiance.EFFECT.SONS);
var Fumee = new Ambiance(Ambiance.EFFECT.FUMEE);
var Fermeture = new Ambiance(Ambiance.EFFECT.FERMETURE);

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


//console.log(Travis.describe());
//console.log(Travis.drawsWeapon(Kaina));
//console.log(Travis.shot(Kaina));
//console.log(Arene.describe());
//console.log(Fondation.describe());
//console.log(Security.describe());

//console.log(WelcomeAll.annonce());
//console.log(Welcome1st.annonce());
//console.log(Welcome2nd.annonce());
//console.log(Reprise.annonce());

 console.log(Lumieres.effect());
 console.log(Sons.effect());
 console.log(Fumee.effect());
 console.log(Fermeture.effect());