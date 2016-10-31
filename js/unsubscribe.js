$(document).ready(function () {
    var options = {
        url: 'https://api.ghjobssubscribe.com/unsubscribe',
        type: 'POST',
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