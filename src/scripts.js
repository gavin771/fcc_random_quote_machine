$(document).ready(function () {

    $("#new-message").on("click", function () {

        loadQuote()
    });

    function loadQuote() {
        $.ajax({
            url: "https://api.forismatic.com/api/1.0/?",
            dataType: "jsonp",
            data: "method=getQuote&format=jsonp&lang=en&jsonp=?"
        }).done(function (data) {

            var html = "";
            var currentTime = moment().format("h:mm:ss A");

            $("#last-gnerated").html(currentTime);
            $("#message").html(data.quoteText);
            $("#author").html("- " + data.quoteAuthor);
        }).fail(function () {
            $("#message").html("A new quote couldn't be retrieved... :(");
        });
    }

    loadQuote();
});