const imagens = document.querySelectorAll(".image-item");

function imageHover(event){
    event.currentTarget.classList.toggle('hover-image');
}

const opitions = document.querySelectorAll('.image-container div');
const infos = document.querySelectorAll('.result-container div');

function activeTab(index){
    infos.forEach((content) => {
        content.classList.remove("ativo");
    })
    infos[index].classList.add("ativo");
}

const links = document.querySelectorAll('.image-item a');
function linkHover(event){
    const windowHeight = document.body.offsetWidth;

    console.log(event.currentTarget);
    if (windowHeight < 1218) {
        links.forEach((content) => {
            content.setAttribute('href', '#result');
        })
    }else{
        links.forEach((content) => {
            content.removeAttribute('href');
        })
    }
}



links.forEach((link) => {
    link.addEventListener('mouseover', linkHover)
})

opitions.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        activeTab(index);
    })
})

imagens.forEach((img) => {
    img.addEventListener('mouseover', imageHover)
})
imagens.forEach((img) => {
    img.addEventListener('mouseout', imageHover)
})