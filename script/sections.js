window.addEventListener('DOMContentLoaded', () => {
    checkSectioons();
});

function checkSectioons() {
    checkHeader();
}

function checkHeader() {
    let header;

    if (document.querySelector('header').classList[0] != undefined) {
        switch (document.querySelector('header').classList[0]) {
            case 'mobileHeader':
                header = 'mobileHeader';
                break;
            case 'header':
                header = 'header';
                break;

            default:
                break;
        }
    }

    if (header != undefined) {
        document.getElementsByClassName(header)[0].innerHTML =
            JSON.parse(httpRequest('GET', '/script/' + header + '.json')).code;
    }
}

function httpRequest(method, address) {
    let request = new XMLHttpRequest();
    request.open(method, address);

    request.onload = function () {
        return request.response;
    }

    console.log(request.onload);
    request.onload = console.log(request.onload);

    request.send();
}