

//const arr = ['carecar', 'radar', 'madam', 'did', 'cannot'];
//console.log(arr.reverse());
let palind = function(x) {
   for (const i of x) {
   //console.log(fruit);
  // var reverse = (i.split(''));
   //console.log(reverse);
   //const strRev = i.split('')
   //console.log(String(i).split('').reverse().join(''));
      if(i === (String(i).split('').reverse().join(''))) {
         console.log(i);
      }
   }

}   



palind(['carecar', 'radar', 'madam', 'did', 'cannot']);
