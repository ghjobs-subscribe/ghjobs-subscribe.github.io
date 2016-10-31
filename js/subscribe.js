$(document).ready(function () {
    var options = {
        dataType: 'json',
        beforeSubmit: showSpinner,
        success: processCommonJSON,
        error: showServerError
    };
    $('#subscribeForm').ajaxForm();
    $('#subscribeForm').submit(function () {
        $(this).ajaxSubmit(options);
        return false;
    });
});