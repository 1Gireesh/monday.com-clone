export function makeid(length) {
    var result           = '';
    var characters       = 'ABCD ae EFGHIJ aeiou KLMNOPQRST iou efghijklmnopqrst uvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
