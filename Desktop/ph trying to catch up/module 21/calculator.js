
function add(num1 , num2) {
   return(num1 + num2);  
}
function sub(num1 , num2) {
   return(num1 - num2);  
}
function mul(num1 , num2) {
   return(num1 * num2);  
}
function div(num1 , num2) {
   return(num1 / num2);  
}

function calculator(a,b,operation) {
    if (operation === 'add') {
        let result =add(a ,b);
        return result;
    }
    else if (operation === 'sub') {
         let result =sub(a ,b);
        return result;
    }
    else if (operation === 'mul') {
         let result =mul(a ,b);
        return result;
    }
    else if (operation === 'div') {
        return div(a ,b);
    }
    else {
        return "only add , sub , mul , div opration are allowed"
    }
    
}
