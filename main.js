for (var i=1; i<=101; i++)(function(i){
    var output = ""
  
    if (i % 5 == 0)
     output += "Chicken"
  
    if (i % 7 == 0)
     output += "Monkey"

     if (i % 35 == 0)
     output += "ChickenMonkey"
  
    console.log(output || i)
  })(i)