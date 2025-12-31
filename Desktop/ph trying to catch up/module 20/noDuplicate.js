function unique(name) {
    const unique =[];
  for (const items of name) {
    if(unique.includes(items)===false )
        unique.push(items);
   
    
  }
   return unique;
    
}
const array = ["rahim", "karim" , "fahim" , "fuad" , "forhad" , "rahim" , "fahim" , "rahim"];
let names = unique(array);
console.log(names);
