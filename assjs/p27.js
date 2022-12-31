let n=4;
let current_num=0
let sum=0;
let previous_sum=0;

for(let i=1; i<=n; i++){

  if(current_num<=n){
    previous_sum=sum;
    sum=current_num+previous_sum;
    current_num=current_num+1;
  }
  else{
    console.log(sum);
  }
  n++;
}