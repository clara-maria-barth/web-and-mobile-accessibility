/**
 * Get the value correspondin to the query parameter
 * @param {string} name - The name of the url query parameter
 * @return {string} The value of the query paramter
 */
function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    if (results == null) {
        return null;
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var title = getUrlParameter('title');
    document.getElementById('title-placeholder').innerHTML
        = title == null ? 'Not found': title;
    document.getElementById('text-placeholder').innerHTML
        = title == null ? '' : 'This page is currently under construction.';
}, false);

