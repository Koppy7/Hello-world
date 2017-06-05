function Person (_prenom, _nom, _age) {
    var _this = this;
    var _created = new Date();

    function _changeComplete(newPrenom, newNom) {
        _this.prenom = newPrenom;
        _this.nom = newNom;

        _this.completeName = _this.prenom + " " + _this.nom;
    }

    this.showPrenom = function () {
        return _prenom;
    }

    this.changeAge = function (newAge) {
        _this.age = newAge;
    }

    _changeComplete(_prenom, _nom);
    this.age = _age;
}

var Xa = new Person ("Xavier", "Boubert", "31");
var Nico = new Person ("Nico", "Granier", "20");