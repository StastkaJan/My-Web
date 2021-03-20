window.addEventListener('DOMContentLoaded', () => {
    loadDoc();
});

function loadDoc() {
    let items = ['header', 'footer'];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
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
