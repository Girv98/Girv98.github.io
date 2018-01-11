window.onload = function () {
    console.log("Page has loaded");
    fadeIn();
    underLineInit();
    underLineLeft();
    underLine();
    scrollFade();
};
window.addEventListener("resize", underLineLeft);
window.addEventListener("resize", underLine);
window.addEventListener("scroll", scrollFade);

function underLineInit() {
    $(document).ready(function () {
        $("#menu").append('<li id="under-line"></li>');

    });
}

function underLineLeft() {
    $(document).ready(function () {
        var $underLine = $("#under-line");
        $underLine
            .css("left", $(".active a").position().left)
    });
}

function underLine() {
    $(document).ready(function () {
        var $underLine = $("#under-line");
        $underLine
            .width($(".active").width())
            .css("top", $(".active a").outerHeight() - 5)
            .data("origLeft", $(".active").position().left)
            .data("origWidth", $(".active").width());

        $("#menu li").find("a").hover(function () {
            var leftPos = $(this).position().left;
            var newWidth = $(this).parent().width();

            $underLine.stop().animate({
                left: leftPos,
                width: newWidth
            }, {
                duration: 400
            });
        }, function () {
            $underLine.stop().animate({
                left: $underLine.data("origLeft"),
                width: $underLine.data("origWidth")
            });
        });

    });
}

function fadeIn() {
    $(document).ready(function () {
        $(".heading").css("opacity", 0).delay(500).animate({
            opacity: 1
        }, 2000);
        $(".subheading").css("opacity", 0).delay(2000).animate({
            opacity: 1
        }, 2000);
    });
}

function scrollFade() {
    $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop()
        var pageBottom = pageTop + $(window).height()
        var tags = $("section")

        for (var i = 0; tags.length; i++) {
            var tag = tags[i];

            if ($(tag).position().top < pageBottom) {
                $(tag).addClass("visible")
            } else {
                $(tag).removeClass("visible")
            }
        }
    })
}
