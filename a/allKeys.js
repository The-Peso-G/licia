/* Retrieve all the names of object's own and inherited properties.
 *
 * |Name  |Type  |Desc                           |
 * |---------------------------------------------|
 * |obj   |object|The object to query            |
 * |return|array |The array of all property names|
 *
 * > Members of Object's prototype won't be retrieved.
 *
 * ```javascript
 * var obj = Object.create({zero: 0});
 * obj.one = 1;
 * allKeys(obj) // -> ['zero', 'one']
 * ```
 */

exports = function (obj)
{
    var ret = [], key;

    for (key in obj) ret.push(key);

    return ret;
};