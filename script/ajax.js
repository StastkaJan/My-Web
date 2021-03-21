function ajax(x) {
    let y = this;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            y.innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', '/templates/' + x + '.html', true);
    xhttp.send();
}