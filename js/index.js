function subscribeUser() {
    var options = {
        url: "http://138.68.52.65:8080/subscribe",
        type: "post",
        dataType: 'json',
        clearForm: true,
        beforeSubmit: showSpinner,
        success: processJSON,
        error: showError
    };

    $('.form').submit(function(){
        $(this).ajaxSubmit(options);
        return false;
    });
}

function showSpinner() {
    $(".spinner").show();
}

function showError() {
    var message = "There seems to be an error with the server. Please come back later."
    $(".spinner").hide();
    $(".message").text(message);
    $(".message").show();
}

function processJSON(data) {
    if (data.success === true) {
        $(".message").hide();
        $(".form").hide();
    }
    setTimeout(function () {
        $(".spinner").hide();
        $(".message").text(data.message);
        $(".message").show();
    }, 1000);
}