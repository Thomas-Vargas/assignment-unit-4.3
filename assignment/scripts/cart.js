console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const MAXITEMS = 5;
let basket = [];

function addItem( item ) {
    if (isFull() === false) {
        basket.push( item );
        return true;
    }
    return false;
}
//Test
console.log('Test - adding item, should output true:', addItem('Cookies'));
console.log(`Basket includes ${basket}`);
//Adding items
addItem('Apples');
addItem('Bananas');
addItem('Eggs');
addItem('Bread');
//Test
console.log('Test - adding item to full basket, should output false:', addItem('Rice'));

function listItems() {
    for (item of basket) {
        console.log(item);
    }
}
//Test
console.log('Items in basket:');
listItems(basket);

function isFull(){
    if (basket.length < MAXITEMS) {
        return false;
    }
    return true;
}
//Test
console.log('Test - is basket full, should output true:', isFull());

function removeItem( item ){
   let index = basket.indexOf( item );
   if ( index === -1) {
    return null;
   }
   basket.splice(index, 1)
   return true;
}
//Test
console.log('Test - Removing item, should return true:', removeItem('Eggs'));
console.log('Test - Eggs should now be missing from basket:');
listItems( basket );
console.log('Removing non-existent item, should return null:', removeItem('Rice'));


function empty() {
    basket = [];
}
empty();
//Test
console.log('Test -  emptying basket, output should be []:', basket);
