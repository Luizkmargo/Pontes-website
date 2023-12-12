// var typingEffect = new typed(".tecnologia",{
//     String : ["JOGOS", "DEVELOPE", "TUDOMAIS"],
//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 80,
//     backDelay: 1500
// })

const btnMobile = document.getElementById('menuMobile');



function tomenu(event){
    if(event.type=='touchstart') event.preventDefault();
    const menus = document.getElementById('nav');
    menus.classList.toggle('active');
 }

btnMobile.addEventListener('click', tomenu); 
btnMobile.addEventListener('touchstart', tomenu);  


document.getElementById('btn_shared').addEventListener('click', function() {
    if (navigator.share) {
    navigator.share({
        title: 'PONTES - TECNOLOGIA',
        text: 'Visite o site da nossa Startup.',
        url: 'https://www.pontes.rf.gd'
    })
    .then(() => console.log('Conteúdo compartilhado com sucesso.'))
    .catch((error) => console.error('Erro ao compartilhar:', error));
    } else {
    alert('A funcionalidade de compartilhamento não está disponível neste navegador.');
    }
});

var typed = new Typed('#envio', {
    strings: ['Enviar', 'Contato' , ],
    typeSpeed: 100,
    loop: true,
    cursorChar: '..'
});