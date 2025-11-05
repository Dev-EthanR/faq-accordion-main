const list = document.querySelectorAll('.accordion');

list.forEach(element => {
    element.firstElementChild.addEventListener('click', () => {
        element.lastElementChild.classList.toggle('expanded');
                element.lastElementChild.classList.toggle('collapsible');
        checkExpanded(element);
    })
});

function checkExpanded(element) {
    if(element.lastElementChild.classList.contains('expanded')) {
        element.querySelector('img').setAttribute('src','assets/images/icon-minus.svg'); 
    } else {
        element.querySelector('img').setAttribute('src','assets/images/icon-plus.svg'); 
    }
}