const Hello = document.querySelector('#hello');
const HelloActive = document.querySelector('#helloActive');

Hello.addEventListener('click', function() {
    HelloActive.classList.toggle('hello__active');
})
