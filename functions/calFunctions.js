export   function add(args) {
  if(args.length==1){
    throw new Error("Invalid,less than 2 arguments for add!!");
  }
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum += Number(args[i]);
    }
    return sum;
  }
  export  function multiply(args) {
    if(args.length==1){
      throw new Error("Invalid,less than 2 arguments for multiply!!");
    }
    let product = 1;
    for (let i = 0; i < args.length; i++) {
      product = product * Number(args[i]);
    }
    return product;
  }
  export  function divide(args) {
    let sub = 0;
    if (args.length > 2 ||args.length==1 ) {
      throw new Error("Invalid,more than 2 arguments for divide!!");
    }
    return Number(args[0]) / Number(args[1]);
  }
  export  function subtract(args) {
    let sub = 0;
    console.log(args);
    if (args.length > 2||args.length==1) {
      throw new Error("Invalid,more than 2 arguments for subtraction!!");
    }
    console.log(Number(args[0], Number(args[1])));
    return Number(args[0]) - Number(args[1]);
  }