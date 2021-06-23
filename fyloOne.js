var setUp = function() {
    //Node Attachments
    var hue = document.getElementById("front");
    var sat = document.getElementById("middle");
    var light = document.getElementById("back");
    var con = document.getElementById("container");

    function Bamer() {
        location.assign("Storage/documents.html");
    }

    function Tamer() {
        location.assign("Storage/folders.html");
    }

    function Famer() {
        location.assign("Storage/uploads.html");
    }

    //Click Events
    hue.onmousedown = function() {
        hue.style.width = "47px";
        hue.style.height = "47px";
    }
    hue.onmouseup = function() {
        hue.style.width = "50px";
        hue.style.height = "50px";
    }
    hue.onclick = function() {
        setTimeout(Bamer, 1000);
    }


    sat.onmousedown = function() {
        sat.style.width = "47px";
        sat.style.height = "47px";
    }
    sat.onmouseup = function() {
        sat.style.width = "50px";
        sat.style.height = "50px";
    }
    sat.onclick = function() {
        setTimeout(Tamer, 1000);
    }


    light.onmousedown = function() {
        light.style.width = "47px";
        light.style.height = "47px";
    }
    light.onmouseup = function() {
        light.style.width = "50px";
        light.style.height = "50px";
    }
    light.onclick = function() {
        setTimeout(Famer, 1000);
    }

    //Mobile to Desktop
    if (window.innerWidth > 800) {
        var swirl = document.createElement("img");
        con.append(swirl);

        swirl.setAttribute("src", "images/bg-desktop.png");
        swirl.setAttribute("style", "margin-top: 380px");
    }
    

   
}




window.onload = function() {
    setUp();
}