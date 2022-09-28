var search = document.getElementById('search');
var search_side = document.querySelector('.search-side');
search.onclick = function() {

    console.log('salam')
    search_side.classList.add('active')
}

document.querySelector('#delete').onclick = function () {
    search_side.classList.remove('active')

}

var lannn = document.querySelector('.dil');

var ox = document.querySelector('.ox')

document.querySelector('#langs').onclick = function() {
    lannn.classList.toggle('active')
    ox.classList.toggle('rot')
}

var slider_icon = document.querySelector('.slider-icon');

var slider_menu = document.querySelector('.slider-menu')

slider_icon.addEventListener('click',function(){
    slider_menu.classList.add('move')
})


var x_duymesi = document.querySelector('.x-duymesi');

x_duymesi.addEventListener('click',function(){
    slider_menu.classList.remove('move');
})