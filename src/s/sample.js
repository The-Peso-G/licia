/* Sample random values from a collection.
 *
 * |Name  |Type        |Desc                  |
 * |------|------------|----------------------|
 * |obj   |array object|Collection to sample  |
 * |n     |number      |Number of values      |
 * |return|array       |Array of sample values|
 */

/* example
 * sample([2, 3, 1], 2); // -> [2, 3]
 * sample({a: 1, b: 2, c: 3}, 1); // -> [2]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function sample(obj: any, n: number): any[];
 */

_('isArrLike clone values random swap');

exports = function(obj, n) {
    const sample = isArrLike(obj) ? clone(obj) : values(obj);
    const len = sample.length;

    n = Math.max(Math.min(n, len), 0);

    const last = len - 1;

    for (let i = 0; i < n; i++) {
        const rand = random(i, last);
        swap(sample, i, rand);
    }

    return sample.slice(0, n);
};
