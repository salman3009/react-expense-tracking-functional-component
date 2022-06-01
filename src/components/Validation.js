
//salman@gmail.com
export function emailValidation(input){
      return /^.+@.+\..+$/.test(input);
}

//passowrd validation
export function passwordValidation(input){
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,30}$/.test(input);
}