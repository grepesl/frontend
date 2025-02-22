import Klase1 from "./klase";
let kintamasis;
kintamasis = 546;
kintamasis = "hihi haha";
const asmuo0 = {
    vardas: "Petras",
    pavarde: "petraitis",
    amzius: 25
};
const asmuo2 = {
    vardas: "Petras",
    pavarde: "petraitis",
    amzius: 25
};
const masyvas = [4, 5, 'a', 'b'];
const gizosKoordinates = [29.977, 31.132];
const manoMarskiniai = 'medium';
var DegaluTipas;
(function (DegaluTipas) {
    DegaluTipas["BENZINAS"] = "benzina";
    DegaluTipas["DYZELINAS"] = "dyzelinas";
    DegaluTipas["DUJOS"] = "dujos";
    DegaluTipas["ELEKTRA"] = "elektra";
})(DegaluTipas || (DegaluTipas = {}));
const masina = {
    marke: 'Honda',
    modelis: 'Civic',
    metai: 2008,
    degalai: DegaluTipas.BENZINAS
};
const klasesReikalas = new Klase1(654, 'zodis', true);
console.log(klasesReikalas);
console.log(klasesReikalas.getPar2());
console.log(klasesReikalas.setPar2('nauja reiksme'));
