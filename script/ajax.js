function loadDoc(x) {
    for (let i = 0; i < x.length; i++) {
        let item = document.getElementById(x[i]);
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                item = this.responseText;
            }
        };
        xhttp.open('GET', '/templates/' + x[i] + '.html', true);
        xhttp.send();
    }
}
