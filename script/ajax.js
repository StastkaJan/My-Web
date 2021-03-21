function loadDoc(x) {
    for (let i = 0; i < x.length; i++) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.querySelector(x[i]).innerHTML = this.responseText;
            }
        };
        xhttp.open('GET', '/templates/' + x[i] + '.html', true);
        xhttp.send();
    }
    document.querySelectorAll('script')[1].remove()
}
