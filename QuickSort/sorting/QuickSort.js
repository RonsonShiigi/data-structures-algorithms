function QuickSort(arr){
   let sortMe = arr.slice()
    if(sortMe.length < 2) {
        return sortMe}
    let pivot = arr[0];
    let left = [];
    let right = [];
    let final = [];
   
    for(var i=0;i<sortMe.length;i++){
        if(pivot > sortMe[i]){
            left.push(sortMe[i]);

        }else if(pivot < sortMe[i]){
            right.push(sortMe[i])
        }
    }

 return final.concat(QuickSort(left)).concat(pivot).concat(QuickSort(right)) ; 

  
    // how to concat going back up(sorta)
    // let halfway = left.concat(pivot);
    // let final = halfway.concat(right);
    // return final
    
}


module.exports = QuickSort;