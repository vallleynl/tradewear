var findArrow = document.querySelectorAll('.jobInfoHeader');



for (var a = 0; a < findArrow.length; a++) {
    findArrow[a].addEventListener('click', function() {
        this.parentElement.classList.toggle('jobInfoCardClosed');

    },
     false);
}
