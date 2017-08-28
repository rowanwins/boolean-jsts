const test = require('tape');
const {lineString, polygon} = require('@turf/helpers');
const jstsTester = require('./');

test('boolean-jsts', t => {
    const feature1 = lineString([[-2, 2], [1, 1]]);
    const feature2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
    const feature3 = polygon([[[-1, 2], [3, 2], [3, 3], [-1, 3], [-1, 2]]]);

    t.false(jstsTester('contains', feature1, feature2));

    t.end();
});
