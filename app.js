
 //alert('Welcome to Landscaper: The Game! Try to earn $1000 and buy all the tools in the shop. Good luck!')


//Starting variables. money, tools, & days
let money = 0
let tools = [{name: 'teeth', price: 0, value: 1}]
let days = 0

const moneyDiv = document.querySelector('#money')
const toolDiv = document.querySelector('#tool')

//Connect js variables to DOM
moneyDiv.innerText = `MONEY: $${money}`
toolDiv.innerText = `TOOL: ${tools[0].name}`

const feed = document.querySelector('#feed')

//function to feed the status bar

const daily = (text) => {
    let update  = document.createElement('p')
    update.innerText = text
    feed.appendChild(update)
    feed.scrollTo(0,feed.scrollHeight)
}


daily(`Day ${days}: Welcome to Landscaper: The Game! Try to earn $1000 and buy all the tools in the shop before the end of the month (Day 31). Good luck!`)

//Win condition
//*** If time, turn this into DOM
//if (money >=1000 && tools[0].name === 'college students') alert('Congratuations! You win!')


//Mow lawn with current tool & value, or go to store for upgrade

const mowLawn = document.querySelector('#mow')
mowLawn.innerText = `Mow Lawns ($${tools[0].value} per day)`

//so that congrats message only prints once
let congrats = false

mowLawn.addEventListener('click', mowLawn => {
    days++
    daily(`Day ${days}: You spent the day mowing lawns with your ${tools[0].name} and earned $${tools[0].value}`)
    money += tools[0].value
    moneyDiv.innerText = `MONEY: $${money}`
    if (congrats === false) winConditions()
})

//function to make sure user buys everything and does't just skip to students
//there might be a shorter way to write this, but it works   
const winConditions = () => {
    const check = (toolName) => {
        for (let tool of tools) {
        if (tool.name === toolName) {
        return true
    }}}
    //Win conditions
    if (money >=1000 && check('rusty scissors') === true && check('push mower') === true && check('electric mower') === true && check('college students') === true && days<=31) {
        daily('Congratuations! You win!')
        congrats = true
        return congrats
    } else if
        (money >=1000 && check('rusty scissors') === true && check('push mower') === true && check('electric mower') === true && check('college students') === true && days>31) {
        daily('Congratuations! It took a little longer, but you still did it!')
        congrats = true
        return congrats
    }
    // Secret ending
    if (money >=1000 && tools[0].name === 'teeth') {
        daily('You just really enjoy the taste of grass, don\'t you')
        congrats = true
        return congrats
    }
    
}


//List of what's available in the store
let inventory = [
    {name: 'rusty scissors', price: 5, value: 5},
    {name: 'push mower', price: 25, value: 50},
    {name: 'electric mower', price: 250, value: 100},
    {name: 'college students', price: 500, value: 250},
]

//Shopping function

const storeButtons = document.querySelectorAll('.store')

const shopping = (num) => {
    if (money >= (inventory[num].price)) {
        tools.unshift(inventory[num])
        toolDiv.innerText = `TOOL: ${tools[0].name}`
        money -= inventory[num].price
        moneyDiv.innerText = `MONEY: $${money}`
        mowLawn.innerText = `Mow Lawns ($${tools[0].value} per day)`
        storeButtons[num].classList.add('disabled')      
        storeButtons[num].disabled = true
        days++
        daily(`Day ${days}: You went to the store and bought the ${inventory[num].name} for $${inventory[num].price}`)
    }
    else alert(`You don't have enough money to buy that! Mow some more lawns and come back later!`)
}


//Assign to buttons
const scissors = document.querySelector('#scissors')
scissors.innerText = `${inventory[0].name} ($${inventory[0].price})`
scissors.addEventListener('click', run => {shopping(0)})

const pushMower = document.querySelector('#push_mower')
pushMower.innerText = `${inventory[1].name} ($${inventory[1].price})`
pushMower.addEventListener('click', run => {shopping(1)})

const electricMower = document.querySelector('#electric_mower')
electricMower.innerText = `${inventory[2].name} ($${inventory[2].price})`
electricMower.addEventListener('click', run => {shopping(2)})

const students = document.querySelector('#students')
students.innerText = `${inventory[3].name} ($${inventory[3].price})`
students.addEventListener('click', run => {shopping(3)})