
function gallery_container_scroll() {
    $("#opaque_screen").css({
        'left': - $("#gallery").offset().left,
    });
}