function loadDoc(x) {
    for (let i = 0; i < x.length; i++) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById(x[i]).innerHTML =
                    this.responseText;
            }
        };
        xhttp.open('GET', '/templates/' + x[i] + '.html', true);
        xhttp.send();
    }
}
