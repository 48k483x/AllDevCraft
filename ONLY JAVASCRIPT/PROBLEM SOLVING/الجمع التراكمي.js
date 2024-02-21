function cumulative_addition(elements_array) {
    
        let myArr = elements_array.reduce(function(prev , curr){
           return prev + curr
      })
      let arr = [myArr , elements_array.length]
      return arr
}
