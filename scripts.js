$(document).ready(function () {

    $("#new-message").on("click", function () {
        $.getJSON("/json/call", function (json) {

            var html = "";
            var currentTime = moment().format("h:mm:ss A");

            $("#last-gnerated").html(currentTime);
            console.log(json);

        }).fail(function () {
            $("#message").html("A new quote couldn't be retrieved... :(");
        });
    });
});