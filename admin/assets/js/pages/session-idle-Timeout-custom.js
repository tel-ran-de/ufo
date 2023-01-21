'use strict';
$(document).ready(function() {
    // [ session-idle-timeout ] start
    $.sessionTimeout({
        heading: 'h5',
        title: 'Dear admin',
        message: 'Your session is about to expire. Do you want to stay connected?',
        warnAfter: 5000,
        redirAfter: 15000,
        keepAliveUrl: 'index.html',
        redirUrl: 'index.html',
        logoutUrl: 'auth.html'
    });
});
