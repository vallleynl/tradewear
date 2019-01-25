var findOpac = document.querySelectorAll('.jobKnop');

for (var a = 0; a < findOpac.length; a++) {
    findOpac[a].addEventListener('click', function() {
        this.classList.toggle('opacityTag');
    }, false);
}

console.log("hi");
