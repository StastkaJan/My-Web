window.addEventListener('DOMContentLoaded', () => {
    checkSections();
});

function checkSections() {
    checkHeader(['basicHeader', 'reversedHeader']);
}

function checkHeader(options) {
    if (document.querySelector('header').classList[0] != undefined) {
        let header = document.querySelector('header').classList[0];

        options.forEach(e => function () {
            if (e === header) {
                httpRequest('GET', header)
            }
        })
    }
}

function httpRequest(method, address) {
    let request = new XMLHttpRequest();

    request.open(method, '/components/' + address + '.json');

    request.onload = function () {
        let json = JSON.parse(request.response);
        printToDoc(json, address);
    }

    request.send();
}

function printToDoc(value, address) {
    document.getElementsByClassName(address)[0].innerHTML = value.code;
}