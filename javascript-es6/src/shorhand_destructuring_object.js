//  Shorthand
// penulisan singkat

// name = "Sheptian Bagja Utama"
// umur = 12
// getData = () => {
//     return `member ${name} umurnya ${umur}`
// }

// let member = {
//     name, umur , getData
// }

// console.log(member.getData())

// Destructuring objek 
let member = {
    name : 'Saputro',
    umur:12
}

let{umur:age, name} = member
console.log(age)

// menggunakan array
let umur = [1,2,3]
let[a,b,c] = umur
console.log(a+b+c)

