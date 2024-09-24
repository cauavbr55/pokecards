const click = document.querySelectorAll('.click');
const div_info = document.querySelectorAll('.info');
for(let i = 0; i < click.length; i++) {
    click[i].addEventListener('click', () => {
        if(div_info[i].classList.contains('onInfo')) {
            div_info[i].classList.remove('onInfo')
        } else {
            div_info[i].classList.add('onInfo')
        }
    })
}