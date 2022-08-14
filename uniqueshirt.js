function Unique_Shirts (arr,N) {

    let count=0;
    for (let i of arr){
       if (arr.indexOf(i)===arr.lastIndexOf(i)){
         count++;
       }
       }
       return count;
     }