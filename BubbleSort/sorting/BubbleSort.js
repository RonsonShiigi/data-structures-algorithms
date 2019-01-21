function BubbleSort (array){
    let swap = false;
    while(!swap)
    for(var i=0;i<array.length;i++){
        if(array[i] > array[i+1]){
            let bigger = array[i];
            array[i] = array[i+1];
            array[i+1] = bigger;
            swap = false
        }else if(array [i] <= array[i+1]){
            swap = true;
        }
    }return array
    
}

module.exports = BubbleSort;