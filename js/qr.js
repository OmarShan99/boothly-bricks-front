var qrcode = new QRCode("qrcode");

function makeCode () {      
    var t = document.getElementById("text");
    
    if (!t.value) {
        t.focus();
        return;
    }
    
    qrcode.makeCode(t.value);
}

makeCode();

$("#text").on("blur", function () {
        makeCode();
    }).on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });