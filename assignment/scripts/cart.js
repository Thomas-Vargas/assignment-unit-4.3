console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem( item ) {
    basket.push( item );
    return true;
}
//Test
console.log('Test - adding item, should output true:', addItem('cookies'));
console.log(`Basket includes ${basket}`)

function listItems( array ) {
    for (item of array) {
        console.log(item)
    }
}
//Test
addItem('bananas');
console.log('Items in basket:')
listItems(basket);

function empty() {
    basket = [];
}
empty()
//Test
console.log('Test - output should be []:', basket)
