const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.open-popup');
const closePopup = document.querySelector('.close-popup');

openPopup.addEventListener("click", function (e) {
    e.preventDefault;
    popup.classList.add('show');
});

closePopup.addEventListener("click", function (e) {
    e.preventDefault;
    popup.classList.remove('show');
});
