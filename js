function initGallery() {
    var gallery = document.getElementById("gallery");
    var images = gallery.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", i + 1);
        images[i].addEventListener("focus", function() {
            this.style.border = "2px solid #4CAF50";
        });

        images[i].addEventListener("blur", function() {
            this.style.border = "none";
        });
    }
}
