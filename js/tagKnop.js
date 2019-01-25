var findTag = document.querySelectorAll('.tag');

for (var a = 0; a < findTag.length; a++) {
    findTag[a].addEventListener('click', function() {
        this.classList.toggle('opacityTag');
    }, false);
    console.log("hoeveeltags");
}

console.log("tag");
