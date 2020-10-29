## Question

In the "JavaScript" tab, complete the implementation of `wrapText(node, className)` function, which traverses the DOM tree starting from the `node` given in the argument as the root node, and replaces every non-empty text node found with a newly created `<span>` element in the subtree rooted at the node. The new `<span>` element should be assigned a class name as given in the argument `className`, and it should place the text node that it just replaced as its own child. If you encounter a node that already has the given `className`, skip the node. The `wrapText` function should return the total number of such replacements made from its invocation. You may not add any global variables to the program or else no points will be awarded.

For example, given:

`<div id="one"> Hello World </div>`

when we call `wrapText(node, 'foo')` on the `<div id="one">` element, it should return 1 and we should end up with:

`<div id="one"> <span class="foo">Hello World</span></div>`

If we call `wrapText(node, 'foo')` again, it should not change anything and return 0.

\* You can click the "Render" button below to test your code


## Solution

```javascript
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
```