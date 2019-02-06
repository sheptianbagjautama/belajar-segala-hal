// Dom Selection

//1. document.getElementById() -> mengembalikan elemen
// arti dari skrip ini adalah seperti ini 
// "tolong carikan element id yang ada dalm document"
const judul = document.getElementById('judul'); 
judul.style.color = 'red';
judul.style.backgroundColor = "skyblue";
judul.innerHTML = "Sheptian Bagja Utama";
 
// 2. document.getElementsByTagName() -> mengembalikan HTMLCollection seperti array(p1,p2,p3,p)
const p = document.getElementsByTagName('p');
// p[0].style.backgroundColor = "lightblue";
// p[1].style.backgroundColor = "lightblue";
// p[2].style.backgroundColor = "lightblue";
// p[3].style.backgroundColor = "lightblue";

for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

//3. docuemnt.getElementsByClassName() -> mengembalikan HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari javascript';


