
# metalsmith-swig-helpers

  A metalsmith plugin to add helpers to swig.
  
  At the moment it uses _.string to create the slug filter.
  
  
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

## Javascript Usage

  For the simplest use case, just pass your templating engine:

```js
var swigHelpers = require('metalsmith-swig-helpers');
var templates = require('metalsmith-templates');
metalsmith
.use(swig-helpers)
.use(templates('swig'));
```

## License

  MIT
