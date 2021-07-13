window.addEventListener('DOMContentLoaded', () => {

    checkSections();

});

function checkSections() {

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

        httpRequest('GET', header);

    }
}

function httpRequest(method, address) {

    let request = new XMLHttpRequest();

    request.open(method, '/script/' + address + '.json');

    request.onload = function () {

        let json = JSON.parse(request.response);
        printToDoc(json, address);
        
    }

    request.send();

}

function printToDoc(value, address) {

    document.getElementsByClassName(address)[0].innerHTML = value.code;
    
}