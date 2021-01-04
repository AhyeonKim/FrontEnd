function open_letter() {
    document.getElementsByClassName("letter-close")[0].style.display = 'none'
    document.getElementsByClassName("letter-open")[0].style.display = 'block'
}

function go_git() {
    alert('앗, 어떻게 찾았지!');
    window.location.href='https://github.com/AhyeonKim';
}