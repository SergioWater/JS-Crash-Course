// // let cash = 50
// // let price = 40

// // if (cash > price){
// //     console.log(`you paid an extra ${cash - price} dollar`)
// // }
// // else if (cash === price){
// //     console.log(`clean`)
// // }
// // else{
// //     console.log(`not enough pay $${price - cash}`)
// // }

// // let hot = ""

// // hot ? console.log("Hot outside") : console.log("Cold outside")

// // let subscribed = false
// // let loggIn = true

// // let str = subscribed || loggIn ? 'Show video' : 'Dont show video'

// // console.log(str)

// // let isOpen = false

// // let strs = cash >= price && !isOpen ? `Thanks heres $${cash - price}` : 'Not enough'

// // console.log(strs)


// // // DRY Don't Repeat yourself 

// // // While Loops

// // // let count =  1
// // // while(count <= 3)
// // // {
// // //     console.log(count)
// // //     count = count + 1
// // // }

// // // for Loop
// // // for( let i = 0; i < 3; i++) {
// // //     console.log(i)
// // // }

// // // for(let i = 1; i <= 20; i++)
// // // {
// // //     if (i % 3 === 0 && i % 5 === 0){
// // //         console.log(`${i} --> Fontend Simplified`)
// // //     }
// // //     else if(i % 3 === 0){
// // //         console.log(`${i} --> Fontend`)
// // //     }
// // //     else if (i % 5 === 0){
// // //         console.log(`${i} --> Simplified`)
// // //     }
// // //     else{
// // //         console.log(`${i} --> ${i}`)
// // //     }
// // // }

// // // let front = "Fontend Simplified"
// // // for(let i = 0; i < front.length; i++){
// // //     console.log(front[i])
// // // }

// // function convert(C){
// //     return C * 1.8 + 32
// // }
// // console.log(convert(0))
// // console.log(convert(10))
// // console.log(convert(30))

// // let arr = [20, 30 ,100, 1002]


// // let newArr = arr.filter(element => element < 50)
// //     console.log(newArr)

// // let grades = ['A+', 'A', 'FAIL']
// // // let newArr = grades.filter(element => element !== 'FAIL')
// // // console.log(newArr)
// // let good = []
// // for(let i = 0; i < grades.length; i++){
// //     if(grades[i] !== 'FAIL')
// //     good.push(grades[i])
// // }
// // console.log(good)


// // let arr = [1,4,9,16]

// // let newArr = arr.map(element => {
// //     console.log(element)
// //     return 12
// // })
// // console.log(newArr)

// // let dollars = [1, 5, 10, 3]

// // // let cents = dollars.map((element) => {
// // //     return element * 100
// // // })
// // let cents = []
// // for(let i = 0; i < dollars.length; i++){
// //     cents.push(dollars[i] * 100)
// // }
// // console.log(cents)

// let user = [
// {
//     username: "David",
//     email: "123@gmail.com",
//     subStatus: "VIP",
//     password: "123",
//     discordID: "discord#001",
//     lessionsCompleted:[0,1]
// },
// {
//     username: "mitrie",
//     email: "mitrie@gmail.com",
//     subStatus: "VIP",
//     password: "123123",
//     discordID: "discord#001",
//     lessionsCompleted:[0,1]
// },
// {
//     username: "XEN",
//     email: "XEN@gmail.com",
//     subStatus: "VIP",
//     password: "123123",
//     discordID: "discord#001",
//     lessionsCompleted:[0,1]
// }
// ]
// function login(email, password){
//     for(let i = 0; i < user.length; i++)
//     if(user[i].email === email){
//         if(user[i].password === password){
//             console.log('login')
//         }
//         else{
//             console.log("wrong password")
//         }
//         return;
//     }
// }
// login("123@gmail.com", "1223");

// function register(username, email, password,subStatus,ID,LessonsCompleted){
//     console.log(email,password)
//     let user1 = {
//         email: email,
//         name: username,
//         password:  password,
//         subStatus: subStatus,
//         ID:ID

//     }
//     console.log(user1)
    
// }
// register('lad','asd@email.com','123123','vip','12#001','0,1' )

// document.querySelector('#title').innerHTML = 'Frontend'

// // document.querySelector("#title").style.color = 'Purple'

// function changeTitletoRed(){
//     document.querySelector("#title").style.color = 'Red'
// }

function toggleDarkMode(){
    document.querySelector('body').classList.toggle("dark-theme")
}