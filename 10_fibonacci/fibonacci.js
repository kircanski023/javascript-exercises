const fibonacci = function(n) {
    if(n < 0){
       return "OOPS" 
    }
    else {
        let array = [0, 1];
        let result = 0;
        for(i = 0; i < n; i++){
            result = array[i] + array[i + 1]
            array.push(result);
        }
        return array[n];
    }

};

// Do not edit below this line
module.exports = fibonacci;
