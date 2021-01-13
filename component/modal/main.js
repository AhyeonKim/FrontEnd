const openBtn = document.querySelector('.open_btn'),
modal = document.querySelector('.modal'),
closeBtn = document.querySelector('.close_btn'),
overlay = document.querySelector('.modal_overlay')

function openModal() {
    modal.classList.remove('hide')
    document.addEventListener('keydown',escapeModal)
    // modal.className='modal'
}
const closeModal = () =>{
    modal.classList.add('hide')
    document.removeEventListener('keydown',escapeModal)
}
// function closeModal() {
//     modal.classList.add('hide')
// }
const escapeModal = (e)=>{
    if(e.keyCode==27){
        closeModal()
    }
}
openBtn.addEventListener('click',openModal)
closeBtn.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)