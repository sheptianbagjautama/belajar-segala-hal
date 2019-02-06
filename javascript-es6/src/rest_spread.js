// Rest dan Spread
// mengambil data hanya dengan menggunakan ...{namaobjeknya yang ingin diget}
// ...member => format nya ...namaobjeknya

signIn = (...member) => {
    console.log(member)
}

username = 'hilman'
password = '123'
umur = 30

signIn(username,password,umur)

console.log('====================================================')

biodata = (firstname, lastname, address, religion, age, sex) => {
    console.log(`
        Firstname   : ${firstname}
        Lastname    : ${lastname}
        Address     : ${address}
        Religion    : ${religion}
        Age         : ${age}
        Sex         : ${sex}
    `)
}

let data = [
    'Sheptian',
    'Bagja Utama',
    'Jalan Pasir Impun No.12389',
    'Islam',
    'Pria'
]
biodata(...data)