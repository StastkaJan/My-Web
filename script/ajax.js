function loadDoc(x) {
    for (let i = 0; i < x.length; i++) {
        let item = x[i];
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById(item).innerHTML =
                    this.responseText;
            }
        };
        xhttp.open('GET', '/templates/' + item + '.html', true);
        xhttp.send();
    }
}
