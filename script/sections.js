window.addEventListener('DOMContentLoaded', () => {
    checkSections();
});

function checkSections() {
    checkHeader(['basicHeader', 'reverseHeader']);
}

function checkHeader(options) {
    if (document.querySelector('header').classList[0] != undefined) {
        let header = document.querySelector('header').classList[0];

        for (let e of options) {
            if (e === header) {
                httpRequest('GET', header);
                break;
            }
        }
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