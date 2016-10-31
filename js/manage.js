$(document).ready(function () {
    var manageOptions = {
        url: 'https://api.ghjobssubscribe.com/manage',
        type: 'post',
        dataType: 'json',
        beforeSubmit: showSpinner,
        success: processManageJSON,
        error: showServerError
    };
    $('#manageForm').ajaxForm();
    $('#manageForm').submit(function () {
        $(this).ajaxSubmit(manageOptions);
        return false;
    });

    var updateOptions = {
        url: 'https://api.ghjobssubscribe.com/manage/update',
        type: 'post',
        dataType: 'json',
        beforeSubmit: showSpinner,
        success: processUpdateJSON,
        error: showServerError
    };
    $('#updateForm').ajaxForm();
    $('#updateForm').submit(function () {
        $(this).ajaxSubmit(updateOptions);
        return false;
    });
});
