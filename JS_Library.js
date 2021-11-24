var _ = {
    map: function(arr, callback) {
        var mapped = [];
        for(var i = 0;i<arr.length; i++){
            mapped.push(callback(arr[i]));
        }
        return mapped;
    },
    reduce: function(arr, callback, memo) {
        var total;
        if(memo){
            total = memo;
        }
        else{total = 0};
        for(var i=0;i<arr.length; i++){
            total = callback(total, arr[i]);
        }
        return total;
    },
    find: function(arr, callback) {
        for(var i = 0; i<arr.length; i++){
            if(callback(arr[i])){
                return arr[i];
            }
        }
        return "undefined";
    },
    filter: function(arr, callback) {
        var filtered = [];
        for(var i = 0; i<arr.length; i++){
            if(callback(arr[i])){
                filtered.push(arr[i]);
            }
        }
        return filtered;
    },
    reject: function(arr, callback) {
        var keepers = [];
        for(var i=0;i<arr.length; i++){
            if(!callback(arr[i])){
                keepers.push(arr[i]);
            }
        }
        return keepers;
    }
}
// you just created a library with 5 methods!



var timesThree = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(timesThree);
// => [3, 6, 9]

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);
// => 6

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even);
// => 2

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); 
// if things are working right, this will return [2,4,6].

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);
// => [1, 3, 5]