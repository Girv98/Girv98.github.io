var canv;
var ctx;
var width;

var tools = document.getElementById("tools-canvas")

$(function () {
    canv = document.getElementById("t-shirt-maker");
    ctx = canv.getContext("2d");
    resizeFunct();
    tshirt();
    reload();
})

addEventListener("resize", resizeFunct)

function reload() {

    if (localStorage && localStorage.getItem("storedColour")) {
        colour = localStorage.getItem("storedColour");
        colorChange(colour);
    }

}


$(function () {
    $(".colours button").click(function () {
        colorChange(this.id)

    });
});


function resizeFunct() {
    if (window.innerWidth < 800) {
        canv.style.width = "100vw";
        canv.style.height = "100vw";
        width = "100vw";
        height = "100vw";
    } else {
        canv.style.width = 800;
        canv.style.height = 800;
        width = 800;
    }
}

function tshirt() {
    img = new Image();
    img.src = "assets/t-shirt.png"
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canv.width, canv.height);
    };
}

function colorChange(colour) {
    var imgd = ctx.getImageData(0, 0, canv.width, canv.height);
    var pix = imgd.data;

    console.log(colour)

    var storedColour;
    var oldColour;

    if (localStorage && localStorage.getItem("storedColour")) {
        storedColour = localStorage.getItem("storedColour");

        if (storedColour == "red") {
            oldColour = {
                r: 255,
                b: 0,
                g: 0
            }
        } else if (storedColour == "blue") {
            oldColour = {
                r: 0,
                b: 255,
                g: 0
            }
        } else if (storedColour == "green") {
            oldColour = {
                r: 0,
                b: 0,
                g: 255
            }
        } else if (storedColour == "grey") {
            oldColour = {
                r: 195,
                b: 195,
                g: 195
            }
        } else {
            oldColour = {
                r: 255,
                b: 255,
                g: 255
            }
        }
    }

    var newColour;
    if (colour == "red") {
        newColour = {
            r: 255,
            b: 0,
            g: 0
        }
    } else if (colour == "blue") {
        newColour = {
            r: 0,
            b: 255,
            g: 0
        }
    } else if (colour == "green") {
        newColour = {
            r: 0,
            b: 0,
            g: 255
        }
    } else if (colour == "grey") {
        newColour = {
            r: 195,
            b: 195,
            g: 195
        }
    } else {
        newColour = {
            r: 255,
            b: 255,
            g: 255
        }
    }

    localStorage.setItem("storedColour", colour);

    for (var i = 0; i < pix.length; i += 4) {
        var red = pix[i]
        var green = pix[i + 1]
        var blue = pix[i + 2]


        if (red == 195 && green == 195 && blue == 195) {
            pix[i] = newColour.r;
            pix[i + 1] = newColour.g;
            pix[i + 2] = newColour.b;
        } else if (red == oldColour.r && green == oldColour.g && blue == oldColour.b) {
            pix[i] = newColour.r;
            pix[i + 1] = newColour.g;
            pix[i + 2] = newColour.b;
        }
        ctx.putImageData(imgd, 0, 0);
    }
}
