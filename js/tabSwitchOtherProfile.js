var findLeftTabOP = document.querySelectorAll('#leftTabOP');
var findRightTabOP = document.querySelectorAll('#rightTabOP');


for (var a = 0; a < findLeftTabOP.length; a++) {
    findLeftTabOP[a].addEventListener('click', function() {
        this.classList.add('tabSelected');
        document.querySelector('#rightTabOP').classList.remove('tabSelected');
        document.querySelector('#rightTabContentOP').classList.add('hidden');
        document.querySelector('#leftTabContentOP').classList.remove('hidden');


    },
     false);
}

for (var a = 0; a < findRightTabOP.length; a++) {
    findRightTabOP[a].addEventListener('click', function() {
        this.classList.add('tabSelected');
        document.querySelector('#leftTabOP').classList.remove('tabSelected');
        document.querySelector('#leftTabContentOP').classList.add('hidden');
        document.querySelector('#rightTabContentOP').classList.remove('hidden');


    },
     false);
}


console.log("tabProfile");
