const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23',() => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js');
test("One euro should be 1.07 dollars", function(){
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

const { fromDollarToYen} = require('./app.js');
test("One dollar should be 146.26 yenes", function(){
const yenes = fromDollarToYen(5);
const expected = (5/1.070) * 156.5;
expect(yenes).toBe(expected);
});

const { fromYenToPound} = require('./app.js');
test("One yen should be 0.005 pounds", function(){
const pounds = fromYenToPound(500);
const expected = (500/156.5) * 0.87 ;
expect(pounds).toBe(expected);
});