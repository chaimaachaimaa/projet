function upDate(previewPic) {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.backgroundPosition = "center";
    document.getElementById("text").innerHTML = previewPic.alt;
}

function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('default-image.jpg')";
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.backgroundPosition = "center";
    document.getElementById("text").innerHTML = "Hover over an image below to display here";
}
