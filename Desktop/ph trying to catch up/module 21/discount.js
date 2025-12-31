 // discounst  less than 100 -0% 
 // discount 100-200 -10%
function getDiscount(quantity){
    if(quantity <=100){
        let total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        let total =quantity*90;
        return total;
    }
    else if (quantity >=201){
         let total =quantity*70;
        return total;
    }
}
const cost = getDiscount(200);
console.log(cost);
