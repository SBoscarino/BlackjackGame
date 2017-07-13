/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// Go from general to specific with loops!!

function handValue (hand) {
  let inHand = 0;

  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === "K" || hand[i] ===  "Q" || hand[i] === "J") {
      inHand += 10;
    } else if (hand[i] != "A" ){
      inHand += hand[i];
    } else {
      aceFunction();

      function aceFunction() {
        if(inHand <= 7) {
          inHand += 11;
        } else if (inHand <= 8) {
          inHand += 1;
        } else if (inHand <= 10) {
          inHand += 11;
          } else {
          inHand += 1;
          }
        }
      }
    }
    console.log('in hand at the end', inHand);
    return inHand;
}
