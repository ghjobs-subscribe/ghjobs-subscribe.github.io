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
