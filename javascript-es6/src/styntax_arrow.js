// syntax arrorw -- => -- function shorthand

// var members = ['riqi','dodi','qaiserlab'];
// members.forEach(function(member){
//     console.log(member)
// })

// console.log('==========================Menggunakan Arrow Function=========================');
// // bisa dipersingkat dengan menggunakan arrow function
// members.forEach(member => { 
//     console.log(member) 
// })

// console.log("================MENGGUNAKAN ARROW FUNCTION BANYAK STATEMENT ");
// // ketika banyak statement maka kita tinggal tambahkan dalam kuru lagi didalamnya
// members.forEach((member,index) => { 
//     console.log(member+' '+index) 
// })

// console.log("===============KETIKA MENGGUNAKAN ARROW FUNCTION UNTUK RETURN");
// let memberIndex = members.map((member,index) => 
//     member+ '--' +index)

// console.log(memberIndex);

// 
let sekolahKoding = {
    members : ['rizqi','dodi','qaiserlab'],
    getMembers(){
        this.members.map((name) => {
            console.log(this);
        })
    }
};

sekolahKoding.getMembers();

console.log('======================================');

let sekolahKoding2 = {
    members : ['rizqi','dodi','qaiserlab'],
    getMembers(){
        this.members.map(function(name){
            console.log(this);
        })
    }
};

sekolahKoding2.getMembers();