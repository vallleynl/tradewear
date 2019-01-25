var otherProfileKnop = document.querySelectorAll('.otherProfile');
var clickTalent = document.querySelectorAll('.talentCard');

for (var a = 0; a < otherProfileKnop.length; a++) {
    otherProfileKnop[a].addEventListener('click', function() {
        console.log("clicked tommy");
        document.querySelector('#home').classList.add('hidden');
        document.querySelector('#jobBar').classList.add('hidden');
        document.querySelector('#myProfile').classList.add('hidden');
        document.querySelector('#otherProfile').classList.remove('hidden');
        document.querySelector('#content').classList.remove('noBorder');
        document.querySelector('#jobPage1').classList.add('hidden');

    },
     false);
}
for (var a = 0; a < clickTalent.length; a++) {
    clickTalent[a].addEventListener('click', function() {
        console.log("clicked tommy");
        document.querySelector('#home').classList.add('hidden');
        document.querySelector('#jobBar').classList.add('hidden');
        document.querySelector('#myProfile').classList.add('hidden');
        document.querySelector('#otherProfile').classList.remove('hidden');
        document.querySelector('#content').classList.remove('noBorder');
        document.querySelector('#jobPage1').classList.add('hidden');

    },
     false);
}

console.log("tommy");
