//Random movie quotes generator from the American Film Institute

//random quote generator function
const randomQuoteGenerator = () => {

//data storage
const dataSets = {
    quoteStart: ['Jack Sparrow', 'James Bond', 'An orange', 'Yout aunt', 'Two cans of beer', 'Sauron', 'True love', 'A slasher movie', 'Danny DeVito', 'Galadriel'],
    middleQuote: [' appreciates the very special genius of', ' is a raindow in the eyes of', ' is the equivalent of the dreams of', ' is always better than a beach full of', ' massacred', ' love is like the gold of', ' acceess could be done with just a little bit of', ' hate is everyones dream of', ' that rolls doesnt adds with', ' mistake is the chance to improve'],
    end: [' a winner', ' Santa', ' my mother', ' a zombie', ' eternal love', ' a dirty shirt', ' Microsoft Explorer', ' wisdom', ' Nian Cat', ' a supermarket']
}

//random number generator
const randomNumber = (num) => Math.floor(Math.random() * num);

//Random quote storage
const randomQuote = []

//iterate over the object
for (let prop in dataSets) {
    let quotePart = randomNumber(dataSets[prop].length)
    switch (prop) {
        case 'quoteStart':
            randomQuote.push(dataSets[prop][quotePart])
            break;
        case 'middleQuote':
            randomQuote.push(dataSets[prop][quotePart])
            break;
        case 'end':
            randomQuote.push(dataSets[prop][quotePart])
            break;
        
    }
}

//The generated quote
return randomQuote.join('')

}

console.log(randomQuoteGenerator());