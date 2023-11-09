function openPage(pagename){
    window.location.assign(pagename);
}

function fire(className){
    var element = document.querySelector(className);
    element.remove();
    document.body.style.backgroundColor = "red";
    // document.getElementById("photo1").src = "";

    button = document.querySelector('.newbutton');
    if(button.style.visibility === 'visible'){
        button.style.visibility = 'hidden';
    }
    else{
        button.style.visibility = 'visible';
    }
}