const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'lightblue';
    document.body.classList.toggle('biru-muda');
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type','button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click',function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function(){
    // value digunakan untuk mengambil nilai di element contoh disini mengambil nilai min dan juga max
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('input', function(){
    // value digunakan untuk mengambil nilai di element contoh disini mengambil nilai min dan juga max
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function(){
    // value digunakan untuk mengambil nilai di element contoh disini mengambil nilai min dan juga max
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

document.body.addEventListener('mousemove', function(){
    //posisi mouse
    // untuk mencari posisi mouse di sumbu x
    // console.log(event.clientX);
    // untuk mencari posisi mouse di sumbu y
    // console.log(event.clienty);
    // mencari ukuran browser width
    // console.log(window.innerWidth)
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100)';
})