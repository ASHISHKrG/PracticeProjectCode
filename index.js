
// JavaScript
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
console.log(fighters[5])
let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function(){
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

    let randomIndexOne = Math.floor( Math.random() * fighters.length )
    let randomIndexTwo = Math.floor( Math.random() * fighters.length )
   console.log(randomIndexOne +  " vs"+randomIndexTwo)
    stageEl.textContent=(fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo])
}); 
//------------
// element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
//-------------

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function putApples(){
    for(let i=0;i<fruit.length;i++){
        if(fruit[i]=== "🍎"){
            console.log(fruit[i])
        appleShelf.textContent +=(fruit[i])
        }
    else if(fruit[i]=== "🍊"){
        orangeShelf.textContent +=(fruit[i])
    }
    }
   
}
putApples()
//------------------------------------//---
let player = {
    name: "Ashish",
    money: 155,
    sayHello: function() {
        console.log("Heisann!"+player.name)
    }
}

//player.sayHello()
let  cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")




let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.money

function getRandomCard(){
    let randomNo= Math.floor(Math.random()*13) + 1
    if(randomNo >10){
        return 10
    }else if(randomNo ===1){
        return 11
    }
    else{
    return randomNo
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards =[firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
    return sum
}

function renderGame() {
    cardsEl.textContent ="Cards:"
    for(let i=0; i< cards.length; i++){
    cardsEl.textContent += cards[i] +"  "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    //isNewCardAdded=true  
    sum += card
    cards.push(card)
    renderGame()
    }
}
//-----------------------------------------------------------------
let person = {
    name:"Ashish",
    age: 32,
    country:"India",
    skills:["Java","JavaScript","HTML","CSS"],
    sayHello: function(){
        console.log("Hello!")
    },
    print: function(){
        console.log("Having skills: "+person.skills)
    }
       
}
let str=""
function logData(){
    person.sayHello()
     str= person.name+" is "+person.age+" years old and lives in " +person.country
      console.log(str+"/")
    }
    person.print()
    logData()
   console.log(str)
   //--------------
   let age = 75

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")    
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}
//---------------
let largeCountries = ["China","India","USA","Russia","Germany"]

console.log("Five Largest Countries in the World !")
for(let i=0; i<largeCountries.length; i++){
    console.log(" - "+largeCountries[i])
}
//-------------
let largeCountries1 = ["C","India","USA","Russia","G"]
largeCountries.pop() //Remove last element
largeCountries.push("Germany") //Add at Last
largeCountries.shift()  //Remove 1st element
largeCountries.unshift("China/")
console.log(largeCountries1)  // Add at First
//---------------
let dayOfMonth = 13
let weekday = "Friday"

if(weekday==="Friday" && dayOfMonth==13){
    console.log(" 😱 ")
}
//--------------

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand() {
    let randomIndex = Math.floor( Math.random() * 3) // 0-2.9999
    return randomIndex
}

console.log( getHand() )
//-------