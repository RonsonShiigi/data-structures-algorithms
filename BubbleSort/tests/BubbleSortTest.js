const BubbleSort = require('../sorting/BubbleSort.js')

if([1,2,3,4].join('') ==  BubbleSort([2,4,1,3]).join('')){
    console.log('cheeheee')
    console.log(BubbleSort([2,4,1,3]))

}else{
    console.log('FAIL', BubbleSort([2,4,1,3]))
}
