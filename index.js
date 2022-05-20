
const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
      for (let i= 0; i < gifts.length; i++) {
          console.log(`Wrapped ${gifts[i]} and added a bowl!`)
          debugger;
      }
      return gifts;
  }

wrapGifts(gifts);




function writeCards(names, event) {
        let cards = []
        for (let i = 0; i < names.length; i++) {
            let name = names[i]
            let thankYouCard = `Thank you, ${name}, for the wonderful ${event} gift!`
            cards.push(thankYouCard)
        }
    return cards
}

function countDown(i) {
    while (i >= 0) {
        console.log(i--)
    }
}