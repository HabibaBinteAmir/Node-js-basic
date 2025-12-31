 const furniture = [
    { name : 'TV', price : 994000 ,  quantity : 3},
    { name : 'Frige', price : 45000 , quantity : 0},
    { name : 'bed', price : 5000 , quantity : 3},
    { name : 'clozed', price : 50000 , quantity : 1},
    { name : 'Drassing_Table', price : 50000 , quantity : 1,},
 ];


 function totalCost(items){
    let total =0;
    for (const item of items) {
        const cost = item.price*item.quantity;
        total =total +cost;
        
    };
    return total;
 };
 const cost = totalCost(furniture);
 console.log(cost);
 