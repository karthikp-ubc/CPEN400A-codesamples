function wrapTest(node, className){
    if (node.nodeType === 3 && node.nodeValue.trim()){
        var span = document.createElement('span');
        span.className = className;
        node.replaceWith(span);
        span.appendChild(node);
        return 1;
    }
    else if (node.nodeType === 1 && node.className.indexOf(className) > -1){
        return 0;
    }
    else if (node.nodeType === 1) {
        return Array.from(node.childNodes).reduce(function (sum, child){
            sum += wrapTest(child, className);
            return sum;
        }, 0);
    }
    else return 0;  
}