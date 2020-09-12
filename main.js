var easyAnchor = (function(){
    var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');


    var setHeaderId = function(headers) {
        headers.forEach(element => {
            element.id = createAnchorID(element);
        });
    }

    var createAnchorID = function(element) {
        var removeApostrophe = element.textContent.replace(/[^\w ]/g," ");
        var lowerCaseString = removeApostrophe.match(/[a-zA-Z]+/g).join('-').toLowerCase();
        var firstWord = lowerCaseString.split('-',2).join('-')
        return firstWord
    }

    var init = function() {
        setHeaderId(headers)
    }

    var hi = function(message) {
        console.log('Hi ' + message)
    }


    return {
        init:init,
    }
})();

window.addEventListener('load', function(){
    easyAnchor.init();
})

