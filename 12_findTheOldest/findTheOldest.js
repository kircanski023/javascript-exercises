const findTheOldest = function(arr) {
    return arr
     .map((obj) => {
       if(obj.yearOfDeath === undefined){
         return {
         name: obj.name,
         yearOfBirth: obj.yearOfBirth,
         yearsOld: new Date().getFullYear() - obj.yearOfBirth,
       }
       }
       else{
         return {
         name: obj.name,
         yearOfBirth: obj.yearOfBirth,
         yearOfDeath: obj.yearOfDeath,
         yearsOld: obj.yearOfDeath - obj.yearOfBirth,
       }
       }
     })
     .sort((a, b) => a.yearsOld - b.yearsOld)
     .pop();
 
   }
// Do not edit below this line
module.exports = findTheOldest;
