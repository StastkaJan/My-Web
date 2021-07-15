window.addEventListener('DOMContentLoaded', () => {
    checkSections();
});

function checkSections() {
    check('header', ['basicHeader', 'reverseHeader']);
    check('footer', ['basicFooter', 'reverseFooter']);
}

function check(sectionName, options) {
    if (document.querySelector('body>' + sectionName).classList[0] != undefined) {
        let section = document.querySelector(sectionName).classList[0];
        let url;

        for (let e of options) {
            if (e === section) {
                if (window.innerWidth <= 480) {
                    url = ['/components/' + sectionName + '/' + e + 'Mobile.json', e];
                }
                else {
                    url = ['/components/' + sectionName + '/' + e + '.json', e];
                }
                break;
            }
        }

        fetch(url[0])
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json().then(function (data) {
                        printToDoc(data, url[1]);
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }
}

function printToDoc(value, address) {
    document.getElementsByClassName(address)[0].innerHTML = value.code;
}