// Default Parameter

// Sebelum menggunakan es6
createTag = (title,tag) => {
    // ketika default parameter kosong pada javascript lama bisa menggunakan dua logic seperti dibawah ini
    // tag = tag || 'css'
    if(typeof tag === 'undefined'){
        tag = 'css'
    }
    
    console.log('Forum ' + title + ' punya tag ' + tag)
}

createTag('tampilan rusak');


console.log('=================================================')
// setelah menggunakan es6

generateTitle = () => {
    return 'ini judul standar'
}

createTag = (title = generateTitle(), tag = 'css') => {
    console.log('Forum '+ title + 'punya tag' +tag)
}

createTag()
