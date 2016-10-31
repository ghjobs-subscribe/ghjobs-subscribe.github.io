function showSpinner() {
    $(".message").hide();
    $(".spinner").show();
}

function showServerError(error) {
    var message = "There seems to be an error with the server. Please come back later."
    $(".message").text(message);
    $(".message").show();
}

function processCommonJSON(data) {
    if (data.success === true) {
        $(".form").hide();
    }
    setTimeout(function () {
        $(".spinner").hide();
        $(".message").text(data.message);
        $(".message").show();
    }, 1000);
}

function processManageJSON(data) {
    if (data.success === true) {
        $(".form").hide();
        $(".userInfo").text(data.userEmail + " (inactive)")
        $('.userEmail').val(data.userEmail)
        $(".userFirstName").val(data.userFirstName)
        $(".userLastName").val(data.userLastName)
        $(".subTag").val(data.subTag)
        $(".subLocation").val(data.subLocation)
        $(".updateButton").text("Reactivate");
        if (data.userActive == "true") {
            $(".userInfo").text(data.userEmail + " (active)")
            $(".updateButton").text("Update");
        }
        $(".form2").show();
    }
    setTimeout(function () {
        $(".spinner").hide();
        $(".message").text(data.message);
        $(".message").show();
    }, 1000);
}

function processUpdateJSON(data) {
    if (data.success === true) {
        $(".form").hide();
        $(".form2").hide();
    }
    setTimeout(function () {
        $(".spinner").hide();
        $(".message").text(data.message);
        $(".message").show();
    }, 1000);
}