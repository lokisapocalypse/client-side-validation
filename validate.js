$(function () {
    // assume for all submitted forms with the validate class
    $('form.validate-me').on('submit', function() {
        // anything that's required needs something in it
        $.each($(this).children('.validate'), function (index, value) {
        });
    });
});
