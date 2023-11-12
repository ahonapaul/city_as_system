function openPage(pagename){
    window.location.assign(pagename);
}

function fire(className){
    var element = document.querySelector(className);
    element.remove();
    document.body.style.backgroundColor = "red";
    // document.getElementById("photo1").src = "";
    document.querySelector('.info').style.margin = '+5vw';

    button = document.querySelector('.newbutton');
    portraits = document.querySelector('.portraits');
    if(button.style.visibility === 'visible'){
        button.style.visibility = 'hidden';
        portraits.style.visibility = 'hidden';
    }
    else{
        button.style.visibility = 'visible';
        portraits.style.visibility = 'visible';
    }
}

function rebuild(className){
    var photo = document.querySelector(className);
    photo.style.visibility = 'visible';
}

var text1 = document.getElementById('timed');
var text2 = document.getElementById('timed2');
var text3 = document.getElementById('timed3')

setTimeout(() => {
    text1.innerHTML = 'click on me';
}, 2000);

setTimeout(() => {
    text2.innerHTML = 'click. again.';
}, 5000);

setTimeout(() => {
    text3.innerHTML = 'once more.'
}, 8000);

setTimeout(() => {
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
}, 12000);