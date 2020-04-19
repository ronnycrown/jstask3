let numbers = [];
  function divisible(num){
    for (x = 1;  x <= num; x++){
      if(x % 2 === 0 && x % 3 === 0 && x % 5 === 0){
        numbers.push("yu-gi-oh");
      }else if(x % 2 === 0 && x % 3 === 0){
        numbers.push("yu-gi");
      }else if(x % 2 === 0 && x % 5 === 0){
        numbers.push("yu-oh");
      }else if(x % 3 === 0 && x % 5 === 0){
        numbers.push("gi-oh");
      }else if( x % 2 === 0){
        numbers.push("yu");
      }else if(x % 3 === 0){
        numbers.push("gi");
      }else if(x % 5 === 0){
        numbers.push("oh");
      }else{
        numbers.push(x);
      }
    }
    return numbers;
  }
    divisible(100);
    divisible(69);