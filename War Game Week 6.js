//Create Variables for Suits and Values 
//      These will be combined into one array with the compileDeck function
//      Note: I wrote this in a way that it is implied 11 = Jack, 12 = Queen, 13 = King, 14 = Ace
const SUITS = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

var player1 = [];     //creating player1 and player2 arrays where we will push our shuffled deck into which will also need to be split 
var player2 = [];     

var player1Score = 0;    //Here we're setting the score to 0 
var player2Score = 0;    //These will be changed as we iterate through player1 and player2 arrays - once one score = 52, that player wins 


//Create a class for Card
//      includes suits and values constructor which we'll need to use in the compileDeck function to define what a card contains
class Card {
    constructor (suit, value) {
        this.suit = suit;
        this.value = value;
    }
}


//Create a function to compile SUITS and VALUES into one array.  
//  Later this will be called upton to retrieve the deck so that we can pass it onto our shuffleDeck function 
//      uses Card class to define what a card is by passing in suits and values from the global variables 
function compileDeck () {                       
    return SUITS.flatMap(suit => {              //flatMap condenses the suits and values array into a single array; if we didn't use it, we would get 4 arrays rather than just 1 like we want 
        return VALUES.map(value => {            //using map here is helping to combine SUITS and VALUES so that each suit will have each instance of a value 
            return new Card(suit, value);       //returning the new card calls on our Card class to create each instance of a new Class to have a suit and a value from the array we just combined 
        })                                      
    })
}


//Source for this sorting algorithm: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
function shuffleDeck(array) {        //we want the deck array that we pass into this function to have a randomized outcome 
    let currentIndex = array.length, randomIndex;     
    while (currentIndex != 0) {                                     //this is saying while we still need to shuffle elements, do the following {}
        randomIndex = Math.floor(Math.random() * currentIndex);     //picks remaining element from the array we pass in 
        currentIndex--;                                         //decrement so we go through our entire array
        [array[currentIndex], array[randomIndex]] = [       
            array[randomIndex], array[currentIndex]];       //swaps the current and random indexes through using Math.random as currentIndex is iterated through which has the 
    }                                                       //array.length notation that says to go through the length of the array we pass through
    return array;
}

function playWar(player1, player2){
    if (player1 > player2){
        console.log("Player 1 wins!")
    } else {
        console.log("Player 2 wins!")
    }
}

//CODE INITIALIZATION 
let deck = compileDeck();       //STEP 1: Retrieving our cards (I think of it as taking an unsorted deck out of a new deck of cards since compileDeck() only compiled our SUITS and VALUES array into one array).
console.log(deck); //checking to see if everything is compiled successfully into one array that we can then pass onto our shuffleDeck function - test successful (an array of our cards now appears in an organized manner)

shuffleDeck(deck);  //STEP 2: Now we are shuffling the deck to give it a random assortment. 
console.log(deck); //checking to see if the array we compiled will now have a random assortment - test successful (our array now appears in a randomized order every time we refresh)

//STEP 3: Now we're splitting the cards right down the middle and giving it to our two players we defined as empty arrays (player1 and player2).
//Source for slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
player1 = deck.slice(0, 26);  //slice returns parts of the array from start to end (not including the end) which we pass in the parameters
console.log(player1);        //checking to see if player1 recieved their cards - success
player2 = deck.slice(26);  //we started the slice where we left off 
console.log(player2);     //checking to see if player2 recieved their cards - success

playWar(player1, player2);