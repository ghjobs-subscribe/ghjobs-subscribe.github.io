$(document).ready(function () {
    $(".message").hide();
    $(".spinner").hide();
    $(".subscribeUser").ajaxForm({
        dataType: 'json',
        success: processJSON,
        beforeSubmit: function () {
            $(".spinner").show();
        }
    });
});

function processJSON(data) {
    if (data.success === true) {
        $(".form").hide();
    }
    $(".spinner").hide();
    $(".message").text(data.message);
    $(".message").show();
}