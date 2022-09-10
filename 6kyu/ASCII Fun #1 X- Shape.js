// You will get an odd integer n (>= 3) and your task is to draw an X. Each line is separated with \n.

// Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o
// Examples


//                                      ■□□□■
//             ■□■                      □■□■□
//   x(3) =>   □■□             x(5) =>  □□■□□
//             ■□■                      □■□■□
//                                      ■□□□■


//My solution
function x(n){
    let rows = ''
    for(i=0;i<n;i++){
      for(j=0;j<n;j++){
        if(i === j || i === n - j - 1){
          rows += '■'
        }else{
          rows += '□'
        }
      }
      rows += i !== n - 1? '\n':'';
    }
    return rows
  }
  
  console.log(x(3))