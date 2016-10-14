$(document).ready(function () {
    $(".subscribeUser").ajaxForm({
        dataType: 'json',
        success: processJSON,
        beforeSubmit: showSpinner
    });
});

function showSpinner() {
    $(".spinner").show();
}

function processJSON(data) {
    if (data.success === true) {
        $(".form").hide();
    }
    $(".spinner").hide();
    $(".message").text(data.message);
    $(".message").show();
}