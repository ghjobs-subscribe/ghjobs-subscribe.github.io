$(document).ready(function () {
    var lasthash = window.location.hash;

    var options = {
        type: 'POST',
        dataType: 'json',
        beforeSubmit: showSpinner,
        success: processJSON,
        error: showServerError
    };
    $('#subscribeForm').ajaxForm();
    $('#subscribeForm').submit(function () {
        $(this).ajaxSubmit(options);
        return false;
    });
    $('#manageForm').ajaxForm();
    $('#manageForm').submit(function () {
        $(this).ajaxSubmit(options);
        return false;
    });
    $('#unsubscribeForm').ajaxForm();
    $('#unsubscribeForm').submit(function () {
        $(this).ajaxSubmit(options);
        return false;
    });

    $("a.nav-link").click(function () {
        $(".message").hide();
        $(".active").removeClass("active");
        $(this).addClass("active");
        localStorage.setItem("clickedLinkID", $(this).attr("id"));
    });

    $(window).on('hashchange', function () {
        var hash = window.location.hash;
        if (lasthash == "") {
            lasthash = "#subscribeForm";
        }
        $('form' + lasthash).hide();
        $('form' + hash).show();
        lasthash = hash;

        if (localStorage.getItem("clickedLinkID")) {
            $('#' + localStorage.getItem("clickedLinkID")).addClass("active");
        }
    });
});

function showSpinner() {
    $(".message").hide();
    $(".spinner").show();
}

function showServerError(error) {
    var message = "There seems to be an error with the server. Please come back later."
    $(".message").text(message);
    $(".message").show();
}

function processJSON(data) {
    if (data.success === true) {
        $(".form").hide();
    }
    setTimeout(function () {
        $(".spinner").hide();
        $(".message").text(data.message);
        $(".message").show();
    }, 1000);
}
