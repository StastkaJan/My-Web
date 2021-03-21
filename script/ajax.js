function loadSection(x) {
    let y = this;
    console.log(y,x);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            y.innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', '/templates/' + x + '.html', true);
    xhttp.send();
}