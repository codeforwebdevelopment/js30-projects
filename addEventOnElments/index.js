var getElementsByClass = function (searchClass, node, tag) {
    var classElements = [];
    if (!node) {
      node = document;
    }
    if (!tag) {
      tag = '*';
    }
    var els = node.getElementsByTagName(tag);
    var elsLen = els.length;
    var pattern = new RegExp('(^|\\s)' + searchClass + '(\\s|$)');
    for (i = 0, j = 0; i < elsLen; i++) {
      if (pattern.test(els[i].className)) {
        classElements[j] = els[i];
        j++;
      }
    }
    return classElements;
  };

  // element, eventType, function
  var addEventOnElments = function (el, evt, fn) {
    if (el.addEventListener) {
      el.addEventListener(evt, fn, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + evt, fn);
    }
  };

  // element, className
  var hasClass = function (ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  };

  var addClass = function (ele, cls) {
    if (!hasClass(ele, cls)) {
      ele.className += ' ' + cls;
    }
  };

  var removeClass = function (ele, cls) {
    if (hasClass(ele, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      ele.className = ele.className.replace(reg, ' ');
    }
  };

  var htmlElem = getElementsByClass('test');
  console.log(htmlElem, 'htmlElem');

  for (var i = 0; i < htmlElem.length; i++) {
    var updateElem = htmlElem[i];
    addClass(updateElem, 'test-on');
    var header = updateElem.getElementsByTagName('h2')[0];
    addEventOnElments(header, 'click', toggleClasses);
  }

  function toggleClasses() {
    var updateElem = this.parentNode;
    if (hasClass(updateElem, 'test-on')) {
      removeClass(updateElem, 'test-on');
      addClass(updateElem, 'test-off');
    } else {
      removeClass(updateElem, 'test-off');
      addClass(updateElem, 'test-on');
    }
  }