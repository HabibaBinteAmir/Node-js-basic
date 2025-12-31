 
 const furniture = [
    { name : 'TV', price : 994000},
    { name : 'Frige', price : 45000},
    { name : 'bed', price : 5000},
    { name : 'clozed', price : 50000},
    { name : 'Drassing_Table', price : 50000},
 ];
  

 function getTotal(items){
    let total =0;
    for (const item of items) {
        total =total + item.price;
    }
    return total;
 }
 const total = getTotal(furniture);
 console.log(total);
 