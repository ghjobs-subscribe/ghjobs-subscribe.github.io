$(document).ready(function () {
    var options = {
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
    $('#updateForm').ajaxForm();
    $('#updateForm').submit(function () {
        $(this).ajaxSubmit(options);
        return false;
    });
});
