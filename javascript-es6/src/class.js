// OO Class
// class Members {
//     constructor(name,umur){
//         this.name = name
//         this.umur = umur
//     }
// }

// let member = new Members('Hilman',40)
// console.log(member)

// class Members {
//     constructor(name,umur){
//         this.name = name
//         this.umur = umur
//     }

//     getData(name){
//         return `namanya ${this.name} umurnya ${this.umur}`
//     }
// }

// let member = new Members('Hilman',40)
// console.log(member.getData())

// Static Method
class Members {
    constructor(name,umur){
        this.name = name
        this.umur = umur
    }

    getData(name){
        return `namanya ${this.name} umurnya ${this.umur}`
    }

    static getPoint() {
        return 'Poinnya 40'
    }
}

let member = new Members('Hilman',40)
console.log(Members.getPoint())