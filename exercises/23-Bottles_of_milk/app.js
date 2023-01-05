// Your code here:
function bottles() {
    for (let index = 99; index > 2; index--) {
        console.log(parseInt(index) + ' bottles of milk on the wall, ' + parseInt(index) + ' bottles of milk. Take one down and pass it around, ' + parseInt(index - 1) +' bottles of milk on the wall.')
    }
    console.log('2 bottles of milk on the wall, 2 bottles of milk. Take one down and pass it around, 1 bottle of milk on the wall.')
    console.log('1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.')
    console.log('No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.')
}

console.log(bottles())