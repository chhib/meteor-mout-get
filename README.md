# meteor-mout-get

This is a convenience package that exposes the `get() function in [mout.js](http://moutjs.com).

## Installation

```
meteor add chhib:mout-get
```

## get(obj, propName)

From (http://moutjs.com/docs/latest/object.html#get): Returns nested property value. Will return `undefined` if property doesn't exist. 

~~~js
var lorem = {
  ipsum : {
    dolor : {
      sit : 'amet'
    }
  }
};
 
get(lorem, 'ipsum.dolor.sit'); // "amet"
get(lorem, 'foo.bar');         // undefined
~~~