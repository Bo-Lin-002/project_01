var box = document.querySelector('.box')
var btn = document.querySelector('.btn')

var flag = true

btn.onclick = function () {
    if (flag) {
        box.style.backgroundColor = 'red'
        flag = false
    } else {
        box.style.backgroundColor = 'yellow'
        flag = true
    }
}