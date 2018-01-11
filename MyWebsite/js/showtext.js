$(function () {
    $(".mod").hover(function () {
            mouseOn(this.id);

        },
        function () {
            mouseOff(this.id);
        }
    );
});

function mouseOn(x) {
    var y = x + "-text"
    var tags = $(".addtext");

    for (var i = 0; tags.length; i++) {
        var tag = tags[i];
        var a = tag.id;

        if (a == y) {
            $(tag).addClass("visible")
        }
    }

};

function mouseOff(x) {
    var y = x + "-text"
    var tags = $(".addtext");

    for (var i = 0; tags.length; i++) {
        var tag = tags[i];
        var a = tag.id;

        if (a == y) {
            $(tag).removeClass("visible")
        }
    }
};
