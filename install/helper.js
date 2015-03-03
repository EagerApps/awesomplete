(function(){
  if (!Eager.matchPage(INSTALL_PATTERNS))
    return;

  var elements = INSTALL_OPTIONS.elements;
  for (var i=0; i < elements.length; i++){
    if (!elements[i].suggestions)
      continue;

    var origSugg = elements[i].suggestions.split(',');
    var suggestions = [];
    for (var j=0; j < origSugg.length; j++){
      suggestions.push(origSugg[j].trim());
    }

    var input = document.querySelector(elements[i].input);

    if (input && suggestions.length) {
      new Awesomplete(input, {
        list: suggestions,
        minChars: 1,
        autoFirst: elements[i].auto
      });
    }
  }

})()
