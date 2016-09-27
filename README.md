Small wrapper around morphdom to replace the *content* of a node

[Morphdom](https://github.com/patrick-steele-idem/morphdom) allows to efficiently update the state of a DOM element to the state of another DOM element. A common use case for this is to set the *content* of an element. Setting the content of an element with morphdom requires some extra wrapping though. This module contains all that wrapping.


## Usage

The `setHtmlContent` function has the same signature as the `morphdom` function, the only difference being that `setHtmlContent` expects only the content as second argument, without an encapsulating element.

### Examples:

String based:
```javascript
import setHtmlContent from '@tiddo/set-html-content';

const element = document.querySelector('<my-element>');

setHtmlContent(element, '<p>New content</p>');
//element.outerHTML === '<my-element><p>New content</p></my-element>'
```

DOM based:
```javascript
import setHtmlContent from '@tiddo/set-html-content';

const element = document.querySelector('<my-element>');

const content = document.createElement('p');
content.textContent = 'New content';

setHtmlContent(element, content);
//element.outerHTML === '<my-element><p>New content</p></my-element>'
```

