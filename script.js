var module = (function(name){
    var name = name;
    var sayName = function() {
        console.log('HI ' + name)
    }

    return  {
        name,
        sayName
    }
})('ryan');


var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

var setHeaderId = function(headers) {
    headers.forEach(element => {
        element.id = createAnchorID(element);
        console.log(element.id)
    });
}


var createAnchorID = function(element) {
    var removeApostrophe = element.textContent.replace(/[^\w ]/,"");
    var replaceWhiteSpace = removeApostrophe.replace(/\s/g,'-')
    console.log(replaceWhiteSpace)
    var lowerCaseString = replaceWhiteSpace.match(/[a-zA-Z] /)
    return lowerCaseString
}

var header = document.querySelector('h4');

setHeaderId(headers)