const openSelect = document.querySelector('.openSelect');
const select = document.querySelector('.select');



openSelect.addEventListener('click', () =>{

    if(select.classList.contains('visible')){

        select.classList.remove('visible');
}else{
    select.classList.add('visible');
}

})

