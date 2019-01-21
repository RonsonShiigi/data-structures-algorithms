const MergeSort = require('../sorting/MergeSort.js');


if([1,2,3,4,5,6,7].join('') ==  MergeSort([3,2,5,6,7,4,1]).join('')){
    console.log('cheehee',  MergeSort([3,2,5,6,7,4,1]) );
   
}else{
    console.log('booooooo', MergeSort([3,2,5,6,7,4,1]))
}