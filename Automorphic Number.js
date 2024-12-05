/**
 * number is called **Automorphic number** if and only if its square ends in the same digits as the number itself. For example, `25` is an automorphic number because its square (`625`) ends with `25`.

### **Task**

Given a positive number, determine if it is Automorphic or not. If it is, return `"Automorphic"`, otherwise return `"Not!!"`

### **Examples**

- `25` is an automorphic number, because 252=625 ends with `25`, so return `"Automorphic"`.
    
    252=625
    
- `13` is not an automorphic number, because 132=169 does not end with `13`, so return `"Not!!"`.
    
    132=169
    
- `76` is an automorphic number, because 762=5776 ends with `76`, so return `"Automorphic"`.
    
    762=5776
    
- `225` is not an automorphic number, because 2252=50625 does not end with `225`, so return `"Not!!"`.
    
    2252=50625
    
- `625` is an automorphic number, because 6252=390625 ends with `625`, so return `"Automorphic"`.
    
    6252=390625
    
- `1` is an automorphic number, because 12=1 ends with `1`, so return `"Automorphic"`.
    
    12=1
    
- `6` is an automorphic number, because 62=36 ends with `6`, so return `"Automorphic"`.
    
    62=36
 */

    function automorphic(n){
        let nSqr = Math.pow(n,2).toString().split('').reverse();
        let nStrLen = n.toString().length;
        let lastVal = nSqr.slice(0,nStrLen).join('');
        let nRev = n.toString().split('').reverse().join('');


        return lastVal == nRev?'Automorphic':'Not!!';
        
      } 
      
//Shorter approach from codewars
// const automorphic = n => String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!" ;
// -----------------------

      console.log(automorphic(1));