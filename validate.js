$(function () {
    // assume for all submitted forms with the validate class
    $('form.validate-me').on('submit', function() {
        var valid = true;

        // reset the form
        $('.form-group').removeClass('has-error');

        // anything that's required needs something in it
        $.each($(this).find('.validate-required'), function (index, value) {
            if ($(value).val() == '') {
                $(this).closest('.form-group').addClass('has-error');
                valid = false;
            }
        });

        return false;
    });
});
