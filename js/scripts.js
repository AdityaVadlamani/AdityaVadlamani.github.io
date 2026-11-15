jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        // Keep the preloader up until the profile picture is ready, so the
        // page and the image appear together (with a timeout fallback).
        var hidden = false;
        function hidePreloader() {
            if (hidden) return;
            hidden = true;
            $('#preloader').delay(200).fadeOut('slow');
        }
        var img = document.getElementById('profileImage');
        if (!img || (img.complete && img.naturalWidth)) {
            hidePreloader();
        } else {
            $(img).one('load error', hidePreloader);
            setTimeout(hidePreloader, 3000);
        }
    }());



    // --------------------------------------------------------------------
    // Sticky Sidebar
    // --------------------------------------------------------------------

    $('.left-col-block, .right-col-block').theiaStickySidebar();

}); // JQuery end