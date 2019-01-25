var findJobs = document.querySelectorAll('.jobCard');

for (var a = 0; a < findJobs.length; a++) {
    findJobs[a].addEventListener('click', function() {
        document.querySelector('#jobPage1').classList.remove('hidden');
        document.querySelector('#jobBar').classList.add('hidden');
        document.querySelector('#myProfile').classList.add('hidden');
        document.querySelector('#home').classList.add('hidden');
        document.querySelector('#content').classList.add('noBorder');
    },
     false);
}

console.log("clickjob");
