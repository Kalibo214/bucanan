window.onload = function() {
    var mapContainer = document.getElementById('map-container');
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.640788819361!2d120.67434891513852!3d15.237146939373497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396efff8af8527b%3A0xa0d3535ca7723511!2sBucanan%20Farmland%20Resort!5e0!3m2!1sen!2sph!4v1649284554695!5m2!1sen!2sph');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('style', 'border:0;');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('aria-hidden', 'false');
    iframe.setAttribute('tabindex', '0');
    mapContainer.appendChild(iframe);
};