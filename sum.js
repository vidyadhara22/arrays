const Find_Sum = (array, N) => 
{
   let sum=0;
  let len=array.length;
  for(let i=0; i<len; i++){
    sum += array[i];
  }
  return sum;
};