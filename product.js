const Find_Prod = (array, N) => 
{
 let product=1;
 for(let i=0;i< N;i++){
  product=product*array[i];
 }
 return product;
};