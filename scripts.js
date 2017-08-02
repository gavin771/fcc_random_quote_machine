$(document).ready(function () {

    $("#new-message").on("click", function () {
        var currentTime = moment().format("h:mm:ss A");

        $("#last-gnerated").html(currentTime);

    });
});