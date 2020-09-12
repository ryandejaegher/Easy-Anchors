var anchorModule = (function(){
    var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');


    var setHeaderId = function(headers) {
        headers.forEach(element => {
            element.id = createAnchorID(element);
            console.log(element.id)
        });
    }

    var createAnchorID = function(element) {
        var removeApostrophe = element.textContent.replace(/[^\w ]/g,"");
        var lowerCaseString = removeApostrophe.match(/[a-zA-Z]+/g).join('-').toLowerCase()
        return lowerCaseString
    }

    var init = function() {
        setHeaderId(headers)
    }

    var hi = function(message) {
        console.log
    }


    return {
        init:init
    }
})();


anchorModule.init()