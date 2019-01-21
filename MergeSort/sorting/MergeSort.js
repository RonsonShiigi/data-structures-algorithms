function MergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    //slices array in half
    let halfLength = Math.floor(arr.length/2)
    let left = arr.slice(0,halfLength)
    let right = arr.slice(halfLength,arr.length)
    
    return merge(MergeSort(left),MergeSort(right))
}
function merge(left,right){
    let final = [];
    //checks to see if array length is greater than 0, once it is zero this while loop stops
    while(left.length && right.length){
        //pushes the smaller value into final and destroys the old array
        if(left[0] <= right[0]){
            final.push(left.shift());
        }else{
            final.push(right.shift())
        }
    // this next while loop will active on the array side that was not pushed into final in the last step
    } while(left.length){
        final.push(left.shift())
    }while(right.length){
        final.push(right.shift())
    }return final
}


module.exports = MergeSort;