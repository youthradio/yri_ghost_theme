$(document).ready(function() {

$(".main[role=post] img").each(function() {

    if($(this).attr("caption"))
        $(this).wrap('<figure class="image"></figure>')
            .after('<figcaption>'+$(this).attr("caption")+'</figcaption>');
    });
});