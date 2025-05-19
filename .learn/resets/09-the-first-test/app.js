const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));

module.exports = {sum};

const oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

module.exports = {fromEuroToDollar};

const fromDollarToYen = (dolar) => {
    const euros = dolar / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}
module.exports = {fromDollarToYen};

const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}
module.exports = {fromDollarToYen};