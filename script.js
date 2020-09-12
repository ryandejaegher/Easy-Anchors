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
        headers.id = header.textContent
    });
}


var splitText = function(element) {
    var lettersOnly = element.textContent.match(/[a-zA-Z]+/g)
    var split = element.textContent.split(/[\s,']/gi);
    
    console.log(lettersOnly)
}

var header = document.querySelector('h4');

splitText(header)