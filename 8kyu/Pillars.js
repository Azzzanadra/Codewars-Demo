// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

//   1.  number of pillars (≥ 1);
//   2.  distance between pillars (10 - 30 meters);
//   3.  width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


//My solution
function pillars(numPill, dist, width) {
    // your code here
    numPill >= 1;
    if(numPill === 1){
      width = 0;
    }
    return ((numPill*width)-(2*width)+(dist*100*(numPill-1)))
  }
  
  console.log(pillars(4,10,20))