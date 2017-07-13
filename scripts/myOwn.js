// let possibleCards = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A ];
// let faceCardsButNotAce = 10;
// let J = faceCardsButNotAce;
// let K = faceCardsButNotAce;
// let Q = faceCardsButNotAce;
// let A = aceAnswer;
//
//
//  function aceFunction() {
//   if(inHand > 20) {
//   Ace = 10;
// } else {
//     Ace = 1;
//   }
//   return aceAnswer;
//   let Ace = aceAnswer;
// };



let inHand = [];

function handValue (card1, card2, card3) {
  for (let i = 0; i < inHand.length; i++) {

  }
  let thing = card1 + card2 + card3;


inHand.push(thing);
console.log(inHand);

}

handValue(2, 2, 3)
