var homeKnop = document.querySelectorAll('#homeKnop');
var shopKnop = document.querySelectorAll('#shopKnop');
var addKnop = document.querySelectorAll('#addKnop');
var infoKnop = document.querySelectorAll('#infoKnop');
var profileKnop = document.querySelectorAll('#profileKnop');
var navIndicator = document.querySelectorAll('.indicator');



for (var a = 0; a < homeKnop.length; a++) {
    homeKnop[a].addEventListener('click', function() {
        document.querySelector('#home').classList.remove('hidden');
        document.querySelector('#jobBar').classList.remove('hidden');
        document.querySelector('#myProfile').classList.add('hidden');
        document.querySelector('#otherProfile').classList.add('hidden');
        document.querySelector('#jobPage1').classList.add('hidden');
        document.querySelector('#content').classList.remove('noBorder');
        document.querySelector('#content').classList.remove('hidden');
        document.querySelector('#info').classList.add('hidden');


        document.querySelector('.indicator').classList.add('atHome');
        document.querySelector('.indicator').classList.remove('atShop');
        document.querySelector('.indicator').classList.remove('atAdd');
        document.querySelector('.indicator').classList.remove('atInfo');
        document.querySelector('.indicator').classList.remove('atProfile');
    },
     false);
}

for (var a = 0; a < shopKnop.length; a++) {
    shopKnop[a].addEventListener('click', function() {

        document.querySelector('.indicator').classList.remove('atHome');
        document.querySelector('.indicator').classList.add('atShop');
        document.querySelector('.indicator').classList.remove('atAdd');
        document.querySelector('.indicator').classList.remove('atInfo');
        document.querySelector('.indicator').classList.remove('atProfile');
    },
     false);
}
for (var a = 0; a < addKnop.length; a++) {
    addKnop[a].addEventListener('click', function() {

        document.querySelector('.indicator').classList.remove('atHome');
        document.querySelector('.indicator').classList.remove('atShop');
        document.querySelector('.indicator').classList.add('atAdd');
        document.querySelector('.indicator').classList.remove('atInfo');
        document.querySelector('.indicator').classList.remove('atProfile');
    },
     false);
}
for (var a = 0; a < infoKnop.length; a++) {
    infoKnop[a].addEventListener('click', function() {
        document.querySelector('#home').classList.add('hidden');
        document.querySelector('#jobBar').classList.add('hidden');
        document.querySelector('#jobPage1').classList.add('hidden');
        document.querySelector('#myProfile').classList.add('hidden');
        document.querySelector('#otherProfile').classList.add('hidden');
        document.querySelector('#content').classList.add('hidden');
        document.querySelector('#content').classList.add('noBorder');
        document.querySelector('#info').classList.remove('hidden');


        document.querySelector('.indicator').classList.remove('atHome');
        document.querySelector('.indicator').classList.remove('atShop');
        document.querySelector('.indicator').classList.remove('atAdd');
        document.querySelector('.indicator').classList.add('atInfo');
        document.querySelector('.indicator').classList.remove('atProfile');
    },
     false);
}

for (var a = 0; a < profileKnop.length; a++) {
    profileKnop[a].addEventListener('click', function() {
        document.querySelector('#home').classList.add('hidden');
        document.querySelector('#jobBar').classList.add('hidden');
        document.querySelector('#jobPage1').classList.add('hidden');
        document.querySelector('#myProfile').classList.remove('hidden');
        document.querySelector('#otherProfile').classList.add('hidden');
        document.querySelector('#content').classList.remove('noBorder');
        document.querySelector('#content').classList.remove('hidden');
        document.querySelector('#info').classList.add('hidden');


        document.querySelector('.indicator').classList.remove('atHome');
        document.querySelector('.indicator').classList.remove('atShop');
        document.querySelector('.indicator').classList.remove('atAdd');
        document.querySelector('.indicator').classList.remove('atInfo');
        document.querySelector('.indicator').classList.add('atProfile');


    },
     false);
}


console.log("nav");
