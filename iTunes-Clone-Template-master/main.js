$(document).ready(function () {

    $nav = $('.nav');
    $bars = $('.bars');

    /** click event on toggle menu */
    $bars.click(function () {
        $nav.toggleClass('collapse');
    })
});