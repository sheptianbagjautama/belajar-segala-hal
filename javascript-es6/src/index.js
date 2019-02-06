// class Test {

// }

// console.log(Test);

//var itu adalah function scope
// let dan const itu block scope 

// var nama = "Sheptian Bagja Utama";
// var nama = "Tian";
// console.log(nama);

// function getName()
// {
//     if(false){
//         var nama = "tian";
//         console.log(nama);
//     }else {
//         console.log(nama);
//     }
// }

// getName();
// console.log("======================================");

// function getName2()
// {
//     if(false){
//         let nama = "tian";
//         console.log(nama);
//     }else {
//         console.log(nama);
//     }
// }

// akan menghasilkan error karena let nama hanya ada dalam scopt si if
//kalau ingin tidak error maka harus di dibuat variabelnya di function agar dapat diakses oleh blok kode else
// getName2();

//const tidak bisa reassign.
const person = {
    id:1,
    name:"Sheptian Bagja Utama"
}

// akan error tidak bisa reassigmen(ubah data) kembali
// person = {
//     id:2,
//     name:"Sheptian Bagja Utama"
// }

// cara mengubah data di const adalah dengan menggunakan script berikut
person.id = "101149001";
person.age = 22;
person.name = "Tian";

console.log(person);



