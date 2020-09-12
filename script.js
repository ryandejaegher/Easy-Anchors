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


var getHeaders = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
