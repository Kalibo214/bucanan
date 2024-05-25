function changeImage(element) {
    var mainImage = document.getElementById('mainImage');
    var newImage = document.createElement('img');
    newImage.src = element.src;
    newImage.alt = element.alt;
    newImage.classList.add('img-fluid');
    mainImage.innerHTML = '';
    mainImage.appendChild(newImage);
}
