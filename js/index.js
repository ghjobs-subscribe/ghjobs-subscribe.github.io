$(document).ready(function () {
    var options = {
        dataType: 'json',
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

function showServerError() {
    var message = "There seems to be an error with the server. Please come back later."
    $(".message").text(message);
    $(".message").show();
}

function processJSON(data) {
    if (data.success === true) {
        $(".message").hide();
        $(".form").hide();
    }
    $(".message").text(data.message);
    $(".message").show();
}