
# metalsmith-swig-helpers

  A metalsmith plugin to add helpers to swig.

  At the moment all it does is provide a {{varName|slug}} filter using _.string

  Suggestions are welcome, implementing https://www.npmjs.com/package/swig-extras is next.  

## Installation

    $ npm install --save git://github.com/madeofpeople/metalsmith-swig-helpers

## CLI Usage

  Install the node modules and then add the `metalsmith-swig-helpers` key to your `metalsmith.json` plugins before your metalsmith-templates call.
```json
{
  "plugins": {
    "metalsmith-swig-helpers: {},
    "metalsmith-templates": "swig"
  }
}
```

## Javascript Usage

  For the simplest use case, just pass your templating engine:

```js
var swigHelpers = require('metalsmith-swig-helpers');
var templates = require('metalsmith-templates');
metalsmith
.use(swig-helpers)
.use(templates('swig'));
```

### Filters

Add your own filters dynamically with either a function, or a require() string.

```js
var swigHelpers = require('metalsmith-swig-helpers');
var templates = require('metalsmith-templates');
metalsmith
.use(swig-helpers({
  filters: {
    // Append a ! at the end of the given content.
    // {{ title|exclamation }}
    "exclamation": function(content) {
      return content + "!"
    },

    // Encryption filter
    // {{ title|xorcrypt }}
    "xorcrypt": "xor-crypt" // Does a require() on "xor-crypt"
  }
}))
.use(templates('swig'));
```


## License

  MIT
