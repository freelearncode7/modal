var btn = document.querySelector('#btn');
var modal_container = document.querySelector('.container-modal');
var closes = document.querySelector('#icon-close');
var modal = document.querySelector('.modal-items');

btn.addEventListener('click', function() {
    modal_container.style.display = ' flex';
})
closes.addEventListener('click', function() {
    modal_container.style.display = 'none';
})