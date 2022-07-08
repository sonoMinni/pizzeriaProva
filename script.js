 /*const Pizze = [];
let margherita = {
     nomePizza : 'Margherita',
     ingredienti : 'Pomodoro, Fior di latte',
     prezzo: '5€',
     immagine : '.../grafiche/pizza.png'
 }
 Pizze.push(margherita)
let Regina = {
    nomePizza : 'Regina',
    ingredienti : 'Pomodoro San Marzano tagliato a filetti,Crema di basilico, Fior di latte, Basilico',
    prezzo: '7€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(Regina)
let Italia = {
    nomePizza : 'Italia',
    ingredienti : 'Pomodoro San Marzano tagliato a filetti, Fior di latte, Basilico',
    prezzo: '7€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(Italia)
let marinara  = {
    nomePizza : 'Marinara ',
    ingredienti : 'Salsa di pomodoro, aglio e origano',
    prezzo: '7€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(marinara)
let romana  = {
    nomePizza : 'Romana ',
    ingredienti : 'pomodoro, mozzarella, acciughe, capperi',
    prezzo: '6€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(romana)
let piccante  = {
    nomePizza : 'La piccante ',
    ingredienti : "pomodoro, mozzarella, salame piccante, 'nduja",
    prezzo: '7€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(piccante)
let bufala  = {
    nomePizza : 'Bufala ',
    ingredienti : 'pomodoro, mozzarella di bufala e basilico',
    prezzo: '6,50€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(bufala)
let capricciosa  = {
    nomePizza : 'Capricciosa ',
    ingredienti : 'pomodoro, mozzarella, carciofi, funghi, prosciutto cotto, würstel e olive',
    prezzo: '7€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(capricciosa)
let quattroFormaggi  = {
    nomePizza : '4 Formaggi ',
    ingredienti : 'pomodoro, mozzarella, formaggi vari',
    prezzo: '7€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(quattroFormaggi)
let crudaiola  = {
    nomePizza : 'Crudaiola ',
    ingredienti : 'pomodoro, mozzarella, rucola, pomodorini, scaglie di Ricotta Marzotica',
    prezzo: '7€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(crudaiola)
let norciaFrancese  = {
    nomePizza : 'Norcia e Formaggio Francese ',
    ingredienti : 'pomodoro, mozzarella, salsiccia di norcia fresca, Formaggio francese',
    prezzo: '7€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(norciaFrancese)
let stracciaCrudo  = {
    nomePizza : 'Stracciatella e Crudo ',
    ingredienti : 'pomodoro, mozzarella, stracciatella e crudo',
    prezzo: '7€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(stracciaCrudo)
let vegetin  = {
    nomePizza : 'Vegetin ',
    ingredienti : 'verdure al gratin by federico e fior di latte',
    prezzo: '7€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(vegetin)
let buffalo  = {
    nomePizza : 'Buffalo ',
    ingredienti : 'Bufala, crema di pomodorini secchi, olive e basilico',
    prezzo: '8€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(buffalo)
let siciliana  = {
    nomePizza : 'Siciliana ',
    ingredienti : 'pomodoro, mozzarella, pomodorini, melanzane, ricotta marzotica, acciughe, capperi',
    prezzo: '7,50€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(siciliana)
let quadrata  = {
    nomePizza : 'Quadrata (è quadrata davvero!)',
    ingredienti : 'pecorino romano, ragù di braciole e cornicione ripieno di brasciole',
    prezzo: '8€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(quadrata)
let griciagialla  = {
    nomePizza : 'Gricia Gialla ',
    ingredienti : 'crema di datterini gialli, guanciale, mousse cacio e pepe, bufala a fette, peperone crusco croccante, filo di olio piccante',
    prezzo: '9€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(griciagialla)
let frank  = {
    nomePizza : 'Frank ',
    ingredienti : 'fior di latte, pesto di pistacchio, melanzane gratinate, salmone, stracciatella, lime grattugiato',
    prezzo: '9€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(frank)
let pistacchiosa  = {
    nomePizza : 'Pistacchiosa ',
    ingredienti : 'mozzarella, mortadella, crema di pistacchio, lime, granella di pistacchio',
    prezzo: '8€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(pistacchiosa)
let cipollotta  = {
    nomePizza : 'Cipollotta ',
    ingredienti : 'mozzarella, crema di cipolla, norcia, cipolla rossa, glassa di aceto balsamico e pepe',
    prezzo: '8,50€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(cipollotta)
let terraEmare  = {
    nomePizza : 'Terra e Mare ',
    ingredienti : 'Fior di latte, salmone affumicato, granella di pistacchio, pepe rosa e zest di limone',
    prezzo: '9€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(terraEmare)
let crocchettona  = {
    nomePizza : 'Crocchettona ',
    ingredienti : "fior di latte, fonduta di formaggi al tartufo, crocche' di patate e mortadella al pistacchio",
    prezzo: '9€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(crocchettona)
let naroba  = {
    nomePizza : "'Naroba",
    ingredienti : 'fior di latte, crema di cardoncelli, friarielli, crema di pomodori secchi, stracciatella affumicata, guanciale croccante',
    prezzo: '9€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(naroba)
let mattPistacchiosa  = {
    nomePizza : 'Pistacchiosa ',
    ingredienti : 'mozzarella, mortadella, granella di pistacchio e lime',
    prezzo: '9€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(mattPistacchiosa)
let mattNordica  = {
    nomePizza : 'Nordica ',
    ingredienti : 'salmone affumicato, stracciatella, pepe rosa, zest di limone',
    prezzo: '9€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(mattNordica)
let mattMargherita  = {
    nomePizza : 'Margherita ',
    ingredienti : 'Salsa di pomodoro, fior di latte',
    prezzo: '7€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(mattMargherita)
let mattVegetin  = {
    nomePizza : 'Vegetin ',
    ingredienti : 'verdure grigliate by federico e fior di latte',
    prezzo: '9€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(mattVegetin)
let caprese  = {
    nomePizza : 'Caprese ',
    ingredienti : 'Fior di latte, pomodoro e basilico',
    prezzo: '9€',
    immagine : '.../grafiche/pizza.png'
}
Pizze.push(caprese)
console.log(Pizze)*/
let currentLink = window.location.pathname
console.log(currentLink)

