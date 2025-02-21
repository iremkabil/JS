// gelen parametre adedine gore islem yapar
function getAverage(...a: number[]):string {
  let total = 0;
  let count =0;

  for(let i =0; i<a.length; i++) {
    total +=a[i];
    count++;
  }

  // if (typeof c !== 'undefined') {
  //   total +=c;
  //   count ++;
  // }
  const result = total /count;
  return 'result : ' +result; 
}
getAverage(10,20,30);
getAverage(10,20);