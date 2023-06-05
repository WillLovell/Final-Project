window.addEventListener('load', InitializePage, false);

function InitializePage() {
    LoadNavigation("/HTML/globalnavigation.html");
}

// Method that will load in the global navigation
function LoadNavigation(url) {
    var AJAX = new XMLHttpRequest();

    AJAX.onreadystatechange = function () {
        // This callback function gets called 4 times, with .readyState == 1 through 4
        //  When this function gets called, we need to check the .readyState and wait until
        //  it reaches state 4 which indicates the async process is completed
        //  Once we have a .readyState == 4, then we can check the .status to determine 
        //  how to process the response
        if (AJAX.readyState == 4) {

            // Find the element we are supposed to update
            var elementToUpdate = document.getElementById('common-nav');
            if (elementToUpdate && elementToUpdate.innerHTML !== undefined) {
                // Ok, the request completed, and we have the response in the .responseText
                // or the .responseHTML property of the variable we created as an XMLHttpRequest
                switch (AJAX.status) {
                    case 200:
                        var htmlFragment = ParseTextAsHTML(AJAX.responseText, 'body',true);
                        if (htmlFragment) {
                            elementToUpdate.innerHTML = htmlFragment;
                        } else {
                            elementToUpdate.innerHTML = AJAX.responseText;
                        }
                        ToggleClassState('common-nav', 'hidden', false);
                        break;

                    // Check the common status codes of 404 and 500 next
                    case 404:
                        elementToUpdate.innerHTML = `
<span id='errmessage' class='problem-description'>
${AJAX.status}: Server indicated file <em>${infoPageURL}</em> does not exist. 
Please check the URL or file path is correct
</span>`;
                        ToggleClassState('common-nav', 'hidden', false);
                        break;

                    case 500:
                        elementToUpdate.innerHTML = `
<span id='errmessage' class='problem-description'>
${AJAX.status}: Server indicated a server error occurred - try again later
</span>`;
                        ToggleClassState('common-nav', 'hidden', false);
                        break;

                    // Handle any other status codes
                    default:
                        elementToUpdate.innerHTML = `
<span id='errmessage' class='problem-description'>
${AJAX.status}: Server indicated status code ${AJAX.status} - Not sure how to handle it
</span>`;
                        ToggleClassState('common-nav', 'hidden', false);
                        break;
                }
            }
            else {
                debugger;
                console.log(`Could not find element '${'common-nav'}' to update it`);
            }
        }
        else {
            console.log(`Async callback to our logic but .readyState == ${AJAX.readyState} && .status == ${AJAX.status}`);
        }
    };

    AJAX.open("GET", url, true);
    AJAX.send();
}