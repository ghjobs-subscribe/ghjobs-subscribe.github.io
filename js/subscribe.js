$(document).ready(function () {
    var options = {
        url: 'https://api.ghjobssubscribe.com/subscribe',
        type: 'POST',
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