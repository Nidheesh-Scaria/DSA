function printSeriesOfNum(start,end){
    if(start>end) return []
    const numbers=printSeriesOfNum(start,end-1)
    console.log(end)

}

printSeriesOfNum(1,7)