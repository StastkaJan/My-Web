window.addEventListener('DOMContentLoaded', () => {
    checkSections();
});

function checkSections() {
    check('header', ['basicHeader', 'reverseHeader']);
    check('footer', ['basicFooter', 'reverseFooter']);
}

function check(check, options) {
    if (document.querySelector(check).classList[0] != undefined) {
        let section = document.querySelector(check).classList[0];

        for (let e of options) {
            if (e === section) {
                httpRequest('GET', section);
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