//4. document.querySelector() ->  menghasilkan element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // dengan menggunakan query selector tidak akan mengubah semuannya walaupun
// // const p = document.querySelector('p');
// // p.innerHTML = 'Ini diubah melalui javascript';


// // 5. document.querySelectorAll() -> menghasil nodelist
// const p = document.querySelectorAll('p');
// for(let i=0; i < p.length; i++){
//     p[i].style.backgroundColor = "pink";
// }

//6. Cara mengubah root node 
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';

