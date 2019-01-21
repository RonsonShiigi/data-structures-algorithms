const QuickSort = require('../sorting/QuickSort.js')

if([1,2,3,4,5,6,7].join('') == QuickSort([3,2,5,6,7,4,1]).join('')){
    console.log('cheehee')
    
}else{
    console.log('BOOOOO', QuickSort([3,2,5,6,7,4,1]))
}