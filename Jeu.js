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
                "\nSon Maitre trainer est \"{{master}}\"\n",
            FEMALE:                
                "[{{name}}] ({{hp}}hp)" + 
                "\nAussi connue sous le nom de {{alias}}" +
                "\nElle nous vient tout droit de {{from}}" +
                "\nElle a décidé de se battre avec {{weapon}}" +
                "\nSon pouvoir est de {{weaponPower}}" +
                "\nSon Maitre trainer est \"{{master}}\"\n"
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

    this.winning = function () {
        var victoire = 
            "{{name}} est le gagnant du combat, il remporte une place au prochain tour des WildCards" +
            "\net un panier garni !";
        
        return victoire;
    }

}

Perso.GENDERS = {
    MALE: "MALE",
    FEMALE: "FEMALE"
};
Perso.NAME = {
    TRAVIS: "Travis",
    KAINA: "Kaina",
    RYAN: "Ryan"
}

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

            Welcome1stname:
                "[SPEAKER]Nous avons le plaisir d'accueillir notre premier combattant !" +
                "\nQUE LE SHOW COMMENCE\n\n",
            
            Welcome2ndname:
                "[SPEAKER]C'est maintenant le tour du deuxième combattant d'entrer en scène," +
                "\nJe vous demande une ovation !\n\n",
            
            Reprise:
                "[SPEAKER]Doux Jesus, quelle ambiance !\n",

            StartFight:
                "L'annonce de début de combat vient de retentir ... C'est parti !\n",
            
            Applause:
                "Toute l'arène applaudit à l'unisson pour celebrer la victoire de notre nouveau Champion !\n"

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
    WELCOME1st: "Welcome1stname",
    WELCOME2nd: "Welcome2ndname",
    REPRISE: "Reprise",
    STARTFIGHT: "StartFight",
    APPLAUSE: "Applause"
};

function Ambiance (Effect) {
    var _that = this;

    this._effect = Effect;

    this.effect = function () {
        var texts = {
            Lumieres:
                "Les faisseaux lumineux dansent ensemble dans un rythme qui semble s'accelerer...\n" ,
            
            Sons:
                "Dans une danse entre tambours et trompettes le temps semble s'être arreter." +
                "\nLe rythme semble être en parfait accord avec la danse des lumières\n",

            Fumee:
                "Une épaisse fumée rouge entoure l'ensemble du champ de bataille ..." +
                "\nL'odeur de la mort se fait de plus en plus préssentir dans tous les" +
                "\nrecoins de l'arène.\n",
            
            Fermeture:
                 "Les portes donnant accés aux tribunes se sont brusquement refermées" +
                "\ntandis que celles du champs de bataille s'ouvrent lentement. On" +
                "\ndistingue difficilement le bruit de feraille à travers la musique.\n"
        }
        var text = texts[_that._effect];

        return text;
    };
    this.eyeContact = function () {
        var txt = 
            "Les deux combattants sont maintenant prêts, ils se tournent autour tout en se regardant fixement...\n";
        
        return txt;
    }
}
Ambiance.EFFECT = {
    LUMIERES: "Lumieres",
    SONS: "Sons",
    FUMÉE: "Fumee",
    FERMETURE: "Fermeture",
    EYECONTACT: "Eyecontact"
}

function Fight (Name, Gender, HP, Weapon, WeaponPower, CriticalWeapon) {
    var _that = this;

    this.name = Name;
    this.gender = Gender;
    this.hp = HP;
    this.weapon = Weapon;
    this.weaponPower = WeaponPower;
    this.criticalWeapon = CriticalWeapon;

    this.shot = function (Victim) {
        Victim.hp -= _that.weaponPower;

            if (Victim.hp <= 0) {
                var txt = {
                    MALE : Victim.name + " a succombé au coup fatal de " + _that.name + " RIP man.",

                    FEMALE : Victim.name + " a succombée au coup fatal de " + _that.name + " RIP girl."
                };
                var text = txt[Victim.gender];

                return text;
            }

        var txt = {
            MALE : _that.name + " décide d'attaquer ! " + Victim.name + " est touché et perd " + _that.weaponPower,

            FEMALE : _that.name + " décide d'attaquer ! " + Victim.name + " est touchée et perd " + _that.weaponPower
        };
        var text = txt[Victim.gender];
        
        return text;
    };
    
    this.criticalShot = function (Victim) {
        Victim.hp -= _that.criticalWeapon;
            if (Victim.hp <= 0) {
                var txt = {
                    MALE : Victim.name + " a succombé au coup critique fatal de " + _that.name + " RIP man.\n",

                    FEMALE : Victim.name + " a succombée au coup critique fatal de " + _that.name + " RIP girl.\n"
                };
                var text = txt[Victim.gender];

                return text;
            }
        var txt = {
            MALE: _that.name + " décide d'attaquer et inflige un coup critique ! " + Victim.name + " est lourdement " +
            "touché et perd " + _that.criticalWeapon + " il possède maintenant " + Victim.hp + " HP.",

            FEMALE: _that.name + " décide d'attaquer et inflige un coup critique ! " + Victim.name + " est lourdement " +
            "touchée et perd " + _that.criticalWeapon + " elle possède maintenant " + Victim.hp + " HP."
        }

        var text = txt[Victim.gender]

        
        return text;
    };

    this.drawWeapon = function () {
        var txt = {
            MALE : "{{name}} se saisit de son arme '{{weapon}}‘ et s'apprête à attaquer, tous les regards se tournent vers lui !",

            FEMALE: "{{name}} se saisit de son arme '{{weapon}}' et s'apprête à attaquer, tous les regards se tournent vers elle !"
        }
        
        var text = txt[_that.gender],
            key = null;

        for (key in _that) {
            if (_that.hasOwnProperty(key)) {
                text = text.replace(new RegExp('{{' + key + '}}', 'g'), _that[key]);
            }
        }

        return text;
    }

    this.keepWeapon = function () {
        var txt = {
           MALE : "{{name}} a décidé de ranger son '{{weapon}}'.",
           
           FEMALE : "{{name}} a décidée de ranger son '{{weapon}}'"
       }
        var text = txt[_that.gender],
            key = null;

        for (key in _that) {
            if (_that.hasOwnProperty(key)) {
                text = text.replace(new RegExp('{{' + key + '}}', 'g'), _that[key]);
            }
        }
        return text;
    }

    this.defense = function () {
        var txt = {
            MALE : "{{name}} se met en garde et se tient prêt à parer n'importe quel coup.",

            FEMALE : "{{name}} se met en garde et se tient prête à parer n'importe quel coup."
        }
        var text = txt[_that.gender],
            key = null;

        for (key in _that) {
            if (_that.hasOwnProperty(key)) {
                text = text.replace(new RegExp('{{' + key + '}}', 'g'), _that[key]);
            }
        }
        return text;
    }
    
    this.entree = function () {
        var txt = {
            TRAVIS: 
                "{{name}} entre dans l'arène sous les applaudissements, il dégage un charisme et" +
                "\nune confiance en lui presque arrogante. La machoire serrée et les yeux vers les" +
                "\ntravées de l'arène, il avance pas à pas vers le centre du champ de bataille.\n",
            
            KAINA:
                "{{name}} décide d'entrer dans l'arène à sa manière, les yeux rivés sur son adversaire" +
                "\nelle éclabousse de son agilité et de sa technique. Le public l'ovationne.\n",
            
            RYAN:
                "{{name}} entre maintenant dans l'arène, bombant le torse et marchant sans grande assurance" +
                "\nil se retrouve au milieu de l'arène plus rapidement que ses homologues.\n"
        }
        var text = txt[_that.name],
            key = null;

        for (key in _that) {
            if (_that.hasOwnProperty(key)) {
                text = text.replace(new RegExp('{{' + key + '}}', 'g'), _that[key])
            }
        }
        return text;
    }
    }
Fight.GENDER = {
    MALE : "MALE",
    FEMALE: "FEMALE"
}
Fight.NAME = {
    TRAVIS: "TRAVIS",
    KAINA: "KAINA",
    RYAN: "RYAN"
}

var Travis = new Perso(Perso.NAME.TRAVIS, Perso.GENDERS.MALE, "Guardian Angel", "Independenza", 250, "Light Spirit", 60, 90, "-The W-");
var Kaina = new Perso(Perso.NAME.KAINA, Perso.GENDERS.FEMALE, "Fatal Smooth", "Kanazawa", 140, "Telescopic Katana", 30, 50, "Musashi Miyamoto");
var Ryan = new Perso(Perso.NAME.RYAN, Perso.GENDERS.MALE, "Fucking Casu", "Call of Duty", 50, "Shrill Voice", 15, 50, "'Only me can judge me'");
var ALL = new Perso("A", "A", "A", "A", 1, "A", 1, 1, "A");

var Garde = new TheArene(TheArene.TYP.SECURITY);
var Arene = new TheArene(TheArene.TYP.WHATISTHIS);
var Fondation = new TheArene(TheArene.TYP.FUNDATION);
var WelcomeAll = new TheArene(TheArene.TYP.WELCOMEALL);
var Welcome1st = new TheArene(TheArene.TYP.WELCOME1st);
var Welcome2nd = new TheArene(TheArene.TYP.WELCOME2nd);
var Reprise = new TheArene(TheArene.TYP.REPRISE);
var StartTheFight = new TheArene(TheArene.TYP.STARTFIGHT);
var Applause = new TheArene(TheArene.TYP.APPLAUSE);

var Lumieres = new Ambiance(Ambiance.EFFECT.LUMIERES);
var Sons = new Ambiance(Ambiance.EFFECT.SONS);
var Fumee = new Ambiance(Ambiance.EFFECT.FUMÉE);
var Fermeture = new Ambiance(Ambiance.EFFECT.FERMETURE);
var Regards = new Ambiance(Ambiance.EFFECT.EYECONTACT);

var _Travis = new Fight(Fight.NAME.TRAVIS, Fight.GENDER.MALE, 250, "Light Spirit", 60, 90);
var _Kaina = new Fight(Fight.NAME.KAINA, Fight.GENDER.FEMALE, 140, "Telescopic Katana", 30, 50);
var _Ryan = new Fight(Fight.NAME.RYAN, Fight.GENDER.MALE, 50, "Shrill Voice", 15, 50);

    //Fighter description
//console.log(Travis.describe());
//console.log(Kaina.describe());
//console.log(Ryan.describe());

    //Environnement description
//console.log(Arene.describe());
//console.log(Fondation.describe());
//console.log(Garde.describe());

    //Annonce Arène
//console.log(WelcomeAll.annonce());
//console.log(Welcome1st.annonce());
//console.log(Welcome2nd.annonce());
//console.log(Reprise.annonce());

    //Effet Arène
//console.log(Lumieres.effect());
//console.log(Sons.effect());
//console.log(Fumee.effect());
//console.log(Fermeture.effect());

    //Fighting
//console.log(_Travis.drawWeapon());
//console.log(_Kaina.drawWeapon());
//console.log(_Ryan.drawWeapon());
//console.log(_Travis.keepWeapon());
//console.log(_Kaina.keepWeapon());
//console.log(_Ryan.keepWeapon());
//console.log(_Travis.defense());
//console.log(_Kaina.defense());
//console.log(_Ryan.defense());
//console.log(_Travis.shot(who));
//console.log(_Kaina.shot(who));
//console.log(_Ryan.shot(who))
//console.log(_Travis.criticalShot(who));
//console.log(_Kaina.criticalShot(who));
//console.log(_Ryan.criticalShot(who));

console.log(WelcomeAll.annonce());

console.log(Arene.describe());
console.log(Fondation.describe());
console.log(Garde.describe());

console.log(Welcome1st.annonce());

console.log(Lumieres.effect());
console.log(Travis.describe());
console.log(_Travis.entree());

console.log(Welcome2nd.annonce());

console.log(Sons.effect());
console.log(Kaina.describe());
console.log(_Kaina.entree());
console.log(Reprise.annonce());

console.log(Fumee.effect());
console.log(Fermeture.effect());
console.log(Regards.eyeContact());

console.log(StartTheFight.annonce());

console.log(_Travis.drawWeapon());
console.log(_Kaina.drawWeapon());
console.log(_Travis.shot(_Kaina));
console.log(_Kaina.criticalShot(_Travis));
console.log(_Travis.defense());
console.log(_Kaina.shot(_Travis));
console.log(_Travis.criticalShot(_Kaina));

console.log(Applause.annonce());