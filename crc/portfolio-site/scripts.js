"use strict";

$(document).ready(() => {
    $.post('https://5g0ost55y9.execute-api.us-east-1.amazonaws.com/Prod/visit')
    .done(visitor_counter => {
        $('#loader').hide();
        $('#visits').text(visitor_counter);
    })
    .fail(e => {
        console.log('Error');
        console.log(e);
    });
});