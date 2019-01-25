var findLeftTab = document.querySelectorAll('#leftTab');
var findRightTab = document.querySelectorAll('#rightTab');


for (var a = 0; a < findLeftTab.length; a++) {
    findLeftTab[a].addEventListener('click', function() {
        this.classList.add('tabSelected');
        document.querySelector('#rightTab').classList.remove('tabSelected');
        document.querySelector('#rightTabContent').classList.add('hidden');
        document.querySelector('#leftTabContent').classList.remove('hidden');


    },
     false);
}

for (var a = 0; a < findRightTab.length; a++) {
    findRightTab[a].addEventListener('click', function() {
        this.classList.add('tabSelected');
        document.querySelector('#leftTab').classList.remove('tabSelected');
        document.querySelector('#leftTabContent').classList.add('hidden');
        document.querySelector('#rightTabContent').classList.remove('hidden');


    },
     false);
}


console.log("tabProfile");
