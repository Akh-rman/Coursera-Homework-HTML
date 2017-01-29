
(function (window) {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.lenght; i++) {
        names = names.toLowerCase();
        var firstLetter = names.charAt(0);
  
        if ( firstLetter === "j") {
            byeSpeaker.speak();
        } else {
            helloSpeaker.speak();
        }
    }
})(window);


