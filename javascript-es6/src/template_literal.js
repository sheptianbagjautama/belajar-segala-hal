// Template Literal 
let username = 'sheptian'
let umur = 22

// let text = `Member ${username} umurnya ${40}`
// let div = `
//     <div>${username}</div>
//     <p>${umur}</p>
// `
// console.log(div)

test = (strings, username) => {
    let string1 = strings[0]
    let string2 = strings[1]

    console.log(string1)
    console.log(umur)
}

let output = test`nama saya adalah ${username} umurnya ${umur}`