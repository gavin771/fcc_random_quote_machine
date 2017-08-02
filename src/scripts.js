$(document).ready(function () {

    $("#new-message").on("click", function () {

        $.ajax({
            url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
            cache: false
        }).done(function (data) {

            var html = "";
            var currentTime = moment().format("h:mm:ss A");

            $("#last-gnerated").html(currentTime);
            console.log(data[0].content);
        }).fail(function () {
            $("#message").html("A new quote couldn't be retrieved... :(");
        });
    });
});