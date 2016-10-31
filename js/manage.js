$(document).ready(function () {
    var options = {
        url: 'https://api.ghjobssubscribe.com/manage',
        type: 'POST',
        dataType: 'json',
        beforeSubmit: showSpinner,
        success: processManageJSON,
        error: showServerError
    };
    $('#manageForm').ajaxForm();
    $('#manageForm').submit(function () {
        $(this).ajaxSubmit(options);
        return false;
    });
});
