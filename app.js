let cash = 50
let price = 40

if (cash > price){
    console.log(`you paid an extra ${cash - price} dollar`)
}
else if (cash === price){
    console.log(`clean`)
}
else{
    console.log(`not enough pay $${price - cash}`)
}

let hot = ""

hot ? console.log("Hot outside") : console.log("Cold outside")

let subscribed = false
let loggIn = true

let str = subscribed || loggIn ? 'Show video' : 'Dont show video'

console.log(str)

let isOpen = false

let strs = cash >= price && !isOpen ? `Thanks heres $${cash - price}` : 'Not enough'

console.log(strs)
