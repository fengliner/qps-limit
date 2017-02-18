# qps-limit
qps-limit is a node.js package for providing an Express middleware that can be used to limit qps.

* [Installation](#installation)
* [Usage](#usage)
* [Configuration Options](#configuration-options)

## Installation (via [npm](https://npmjs.org/package/qps-limit))

```bash
$ npm install qps-limit
```

## Usage

```javascript
var express = require('express')
var qps = require('qps-limit');
var app = express()

app.use(qps({
  limit: 100  // number of qps limit
}));

app.get('/user/:id', function (req, res, next) {
  res.send({
    code: 0,
    data: {id: 1, name: 'fengliner'}
  });
})

app.listen(3000, function () {
  console.log('qps limit web server listening on port 3000')
})
```

## Configuration Options

* `limit`: Configures the number of qps limit. Default 1000.

The default configuration is the equivalent of:

```json
{
  "limit": 1000,
}
```

