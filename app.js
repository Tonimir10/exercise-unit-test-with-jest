const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));



const oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}


const fromDollarToYen = (dolar) => {
    const euros = dolar / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}


const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};