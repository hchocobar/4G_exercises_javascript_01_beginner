function sing() {
    let song = "";
    for (let index = 0; index < 11; index++) {
        if (index == 4) {
            song += 'whisper words of wisdom, '
        } else if (index == 10) {
            song += 'there will be an answer, let it be'
        } else {
            song += 'let it be, '
        }
    }
    return song;
}


//Your code above ^^^
console.log(sing());