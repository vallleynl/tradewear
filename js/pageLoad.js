$(function() {
    $("#nav").load("nav.html");
    $("#jobBar").load("jobBar.html");
    $("#home").load("home.html");
    $("#myProfile").load("myProfile.html");
    $("#otherProfile").load("otherProfile.html");
    $("#jobPage1").load("jobPage1.html");
    $("#reply").load("reply.html");
    $("#info").load("info.html");


});
console.log("pageLoader");

var logoKnop = document.querySelectorAll('.logo');

for (var a = 0; a < logoKnop.length; a++) {
    logoKnop[a].addEventListener('click', function() {
        document.querySelector('#home').classList.remove('hidden');
        document.querySelector('#jobBar').classList.remove('hidden');
        document.querySelector('#myProfile').classList.add('hidden');
        document.querySelector('#info').classList.add('hidden');
        document.querySelector('#otherProfile').classList.add('hidden');
        document.querySelector('#jobPage1').classList.add('hidden');
        document.querySelector('#content').classList.remove('noBorder');
        document.querySelector('#content').classList.remove('hidden');

        document.querySelector('.indicator').classList.add('atHome');
        document.querySelector('.indicator').classList.remove('atShop');
        document.querySelector('.indicator').classList.remove('atAdd');
        document.querySelector('.indicator').classList.remove('atInfo');
        document.querySelector('.indicator').classList.remove('atProfile');


    },
     false);
}
