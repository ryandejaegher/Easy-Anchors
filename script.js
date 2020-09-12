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

