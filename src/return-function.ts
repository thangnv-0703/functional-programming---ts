import assert from 'assert';

const largerThan = (n: number) => (m: number) => m > n;

const large = [5, 1, 2, 4, 0].filter(largerThan(4));
console.log(large);
assert.deepStrictEqual(large, [5]);
assert.deepStrictEqual([5, 1, 2, 4, 0].filter(largerThan(1)), [5, 2, 4]);

const divisibleBy = (n: number) => (m: number) => m % n === 0;

const odds = [5, 1, 2, 4, 15].filter(divisibleBy(5));
console.log(odds);
assert.deepStrictEqual(odds, [5, 15]);
assert.deepStrictEqual([5, 1, 2, 4, 15].filter(divisibleBy(2)), [2, 4]);
