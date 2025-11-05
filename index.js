const list = document.querySelectorAll('.accordion');

list.forEach(element => {
    element.firstElementChild.addEventListener('click', () => {
        expandedElement(element);
    })
});

function expandedElement(element) {
        console.log(element )
        element.lastElementChild.classList.toggle('expanded');
        element.lastElementChild.classList.toggle('collapsible');
        checkExpanded(element);
}

function checkExpanded(element) {
    if(element.lastElementChild.classList.contains('expanded')) {
        element.querySelector('img').setAttribute('src','assets/images/icon-minus.svg'); 
        element.setAttribute('aria-expanded', "true")
    } else {
        element.querySelector('img').setAttribute('src','assets/images/icon-plus.svg'); 
        element.setAttribute('aria-expanded', "false")
    }
}

document.addEventListener('keydown', (e) => {
        if(e.key === ' ' || e.key === 'Enter') {
            const element = document.activeElement.parentElement.parentElement;
            expandedElement(element);
        }
})