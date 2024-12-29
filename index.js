//........................1.................................................

//....................................................2..................................................................
function Check_Leap(N) {
  
    if ((N % 4 === 0 && N % 100 !== 0) || (N % 400 === 0)) {
        return "Leap Year";
    } else {
        return "Non Leap Year";
    }
}


console.log(Check_Leap(1900)); 
console.log(Check_Leap(2012)); 

//...............................................3........................................................


function Perfect_Check(N) {
   
    if (N === 1) 
        return "YES";
    let sum = 0;
  for (let i = 1; i <= Math.floor(N / 2); i++) {
        if (N % i === 0) {
            sum += i;
        }
    }
return sum === N ? "YES" : "NO";
}
console.log(Perfect_Check(1));      
console.log(Perfect_Check(6));       
console.log(Perfect_Check(28));      
console.log(Perfect_Check(96345)); 

//................................................4.......................................................
function Reverse_Number(N) {
  const reversed = parseInt(N.toString().split("").reverse().join(""), 10);
return reversed;
}
console.log(Reverse_Number(1900)); 
console.log(Reverse_Number(2012)); 


//.................................................5.................................................

function Substring_Check(S1, S2) {
   
    if (S2.includes(S1)) {
        return "YES";
    } else {
        return "NO";
    }
}
console.log(Substring_Check("Hii this is Prepbuddy", "Prepbuddy")); 
console.log(Substring_Check("Hii this is Prepbuddy", "Prepbytes")); 






