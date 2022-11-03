const pembungkus = document.querySelector('.konten');
const tombol = document.querySelector('.sewa');

tombol.addEventListener('click', function(){
    pembungkus.classList.toggle('aktif')
});