
function f() {
    var sec=parseInt(document.getElementById("text4").value)
    var minutes=parseInt(document.getElementById("text5").value)
    minutes*=60;
    console.log(sec+minutes);
    setTimeout(1000*sec+minutes*1000);
    notifyMe(document.getElementById("text").value,document.getElementById("text2").value,document.getElementById("text3").value)

}
document.addEventListener('DOMContentLoaded', function() {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    if (Notification.permission !== 'granted')
        Notification.requestPermission();
});


function notifyMe(title,body,time) {
    if (Notification.permission !== 'granted')
        Notification.requestPermission();
    else {
        for (let i = 0; i < parseInt(time); i++) {
            var notification = new Notification(title, {
                icon: 'https://www.crackapps.online/yonit.gif',
                body: body,
            });
            notification.onclick = function() {
                window.open('http://stackoverflow.com/a/13328397/1269037');
            };
        }
    }
}