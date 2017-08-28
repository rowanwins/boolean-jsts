const jsts = require('jsts')

/**
 * Boolean JSTS helper script
 * https://en.wikipedia.org/wiki/DE-9IM
 *
 * @private
 * @param {string} operation ("crosses", "contains")
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature
 * @returns {<Boolean>} true/false
 * @example
 * const operation = 'crosses';
 * const feature1 = lineString([[-2, 2], [1, 1]]);
 * const feature2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * var result = jstsBooleanTester(operation, feature1, feature2)
 * => console.log(result);
 */
module.exports = function (operation, feature1, feature2) {
    var reader = new jsts.io.GeoJSONReader();

    // Convert Feature to Geometry
    if (feature1.geometry) feature1 = feature1.geometry;
    if (feature2.geometry) feature2 = feature2.geometry;

    var geom1 = reader.read(feature1);
    var geom2 = reader.read(feature2);
   
    switch (operation) {
        case 'crosses':
            return geom1.crosses(geom2);
            break;
        case 'contains':
            return geom1.contains(geom2);
            break;
        case 'covers':
            return geom1.covers(geom2);
            break;
        case 'disjoint':
            return geom1.disjoint(geom2);
            break;        
        case 'equals':
            return geom1.equals(geom2);
            break;
        case 'intersects':
            return geom1.intersects(geom2);
            break;
        case 'overlaps':
            return geom1.overlaps(geom2);
            break;
        case 'touches':
            return geom1.touches(geom2);
            break;
        case 'within':
            return geom1.within(geom2);
    }

};
