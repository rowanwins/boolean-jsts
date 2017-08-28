# Boolean JSTS

Primarly used for TurfJS boolean testing.

## Install

```
$ npm install boolean-jsts --save-dev
```

## Quickstart

```javascript
const booleanJSTS = require('boolean-jsts');

const line1 = lineString([[-2, 2], [1, 1]]);
const line2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);

var result = booleanJSTS('crosses', line1, line2);
//= true/false
```

## DE-9IM

- [x] crosses
- [x] contains
- [x] within
- [x] equals
- [x] touches
- [x] disjoint
- [x] intersects
- [x] overlaps
- [x] covers
