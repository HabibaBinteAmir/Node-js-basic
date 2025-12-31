 //get the smallest number 
  const price =[20000,300,499,500,6,700,800,99];
   function getmin(num) {
    let  minimum = num[0];
    for (const number of num) {
        if(number<minimum){
            minimum = number;
        }
    }
    return minimum;
   }
   let min = getmin(price);
   console.log(min);
   