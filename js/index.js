$(document).ready(function () {
    $("div.message").hide();
    $("#subscribeUser").ajaxForm({
        dataType: 'json',
        success: processJSON
    });
});

function processJSON(data) {
    
    $(".message").text(data.message);
    $(".message").show();
}