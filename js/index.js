$(document).ready(function () {
    var options = {
        url: 'https://api.ghjobssubscribe.com/subscribe',
        type: 'POST',
        dataType: 'json',
        beforeSubmit: showSpinner,
        success: processJSON,
        error: showServerError
    };
    $('#subscribeUser').ajaxForm();
    $('#subscribeUser').submit(function () {
        $(this).ajaxSubmit(options);
        return false;
    });
});

function showSpinner() {
    $(".spinner").show();
}

function showServerError(error) {
    $(".spinner").hide();
    $(".message").hide();
    var message = "There seems to be an error with the server. Please come back later."
    $(".message").text(message);
    $(".message").show();
}

function processJSON(data) {
    $(".message").hide();
    if (data.success === true) {
        $(".form").hide();
    }
    setTimeout(function () {
        $(".spinner").hide();
        $(".message").text(data.message);
        $(".message").show();
    }, 1000);
}
