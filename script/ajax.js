function ajax(x) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(x).innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', '/templates/' + x + '.html', true);
    xhttp.send();
}