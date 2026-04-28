const shoppingList = ["milk","bread","eggs","rice","apple"];

function getShoppingList(check, item) {

   if(check.includes(item)) {
    return 'Item already in list';
   }else {
    check.push(item);
   }

   return check;
}

console.log(getShoppingList(shoppingList, "shampoo"));