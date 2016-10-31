$(document).ready(function () {
    var options = {
        dataType: 'json',
        beforeSubmit: showSpinner,
        success: processCommonJSON,
        error: showServerError
    };
    $('#unsubscribeForm').ajaxForm();
    $('#unsubscribeForm').submit(function () {
        $(this).ajaxSubmit(options);
        return false;
    });
});