/* 1 - Non-Constructible Change */

console.log('1 - Non-Constructible Change:');

const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100];
console.log('coins:', coins);
// we assume that the minimum value of our currency possible is 1.
let minimum = 1;

// the next fn returns in an array all posible sum combinations of coins (arr) given an amount of elements to combine (num).
const combinations = (arr, num) => {
   const res = [];
   let temp, i, j, max = 1 << arr.length;
   for(i = 0; i < max; i++){
      temp = [];
      for(j = 0; j < arr.length; j++){
         if (i & 1 << j){
            temp.push(arr[j]);
         }
      }
      if(temp.length === num){
         res.push(temp.reduce(function (a, b) { return a + b; }));
      }
   }
   return res;
}

// the amount of numbers to combine (num from above fn)
let i = 1; 

// Find the minimum value we cannot give:
while(i <= coins.length) {
  const currentCombination = combinations(coins, i);
	if (currentCombination.includes(minimum)) {
    minimum++;
    i = 1;
    continue;
  }
  i++;
}

console.log('Minimum amount of money we cannot give is', minimum);


/* 2 - Sorted Squared Array */

console.log('2 - Sorted Squared Array:');
const array = [-10, -5, 0, 5, 10];
console.log('init array', [-10, -5, 0, 5, 10]);

// first we square each element:

const squaredArray = array.map((e)=> e*e);

// then we sorte it:

const sortedArray = squaredArray.sort((a,b)=>a-b);

console.log('sorted and squared', sortedArray);
