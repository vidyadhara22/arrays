const findEvenOdd = (N, Arr) => 
{
    let a=[];
    let odd=0;
    let even=0;
    for (let i of Arr){
      if (i%2===0){
       odd=odd+i;
      }
      else{
      even=even+i;
      }
    }
    a[0]=odd;
    a[1]=even;
    return a;
};