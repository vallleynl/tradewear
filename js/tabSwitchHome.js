var findJobTab = document.querySelectorAll('#jobTab');
var findTalentTab = document.querySelectorAll('#talentTab');


for (var a = 0; a < findJobTab.length; a++) {
    findJobTab[a].addEventListener('click', function() {
        this.classList.add('tabSelected');
        document.querySelector('#talentTab').classList.remove('tabSelected');
        document.querySelector('#talentTabContent').classList.add('hidden');
        document.querySelector('#jobTabContent').classList.remove('hidden');


    },
     false);
}

for (var a = 0; a < findTalentTab.length; a++) {
    findTalentTab[a].addEventListener('click', function() {
        this.classList.add('tabSelected');
        document.querySelector('#jobTab').classList.remove('tabSelected');
        document.querySelector('#jobTabContent').classList.add('hidden');
        document.querySelector('#talentTabContent').classList.remove('hidden');

    },
    false);
}

console.log("tabHome");
