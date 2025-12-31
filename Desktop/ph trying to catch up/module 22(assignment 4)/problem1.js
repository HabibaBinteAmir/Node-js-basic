
//problem 1

function totalFine( fare ) {
    let fine = fare + fare * (20/100) +30;
    
     if (typeof fare == 'number' && fare > 0 ) {
         return  fine;
    }
    else if (  fare != '0'  ) {
        return  "Invalid";
    }
    else{
        return "Invalid";
    }
}


// 200 + 200 × ( 20 / 100) + 30 = 270 Taka