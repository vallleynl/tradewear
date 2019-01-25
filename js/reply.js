var openReplyKnop = document.querySelectorAll('#openReply');
var sendReplyKnop = document.querySelectorAll('#sendReply');


for (var a = 0; a < openReplyKnop.length; a++) {
    openReplyKnop[a].addEventListener('click', function() {
        document.querySelector('#reply').classList.remove('hidden');
        console.log('REPLIED');
    },
     false);
}

for (var a = 0; a < sendReplyKnop.length; a++) {
    sendReplyKnop[a].addEventListener('click', function() {
        document.querySelector('#reply').classList.add('hidden');
        console.log('REPLIED');
    },
     false);
}


console.log('replyknop');
