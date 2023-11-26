import assert from 'assert';

const increment = (x: number) => x + 1;

assert.deepStrictEqual(increment(2), 3);

const getFirstCharacter = (s: string) => (s.length > 0 ? s[0] : '');

assert.deepStrictEqual(getFirstCharacter(''), '');
assert.deepStrictEqual(getFirstCharacter('hello'), 'h');

const wordScore = (word: string) => word.length;
assert.deepStrictEqual(wordScore(''), 0);
assert.deepStrictEqual(wordScore('nice'), 4);

const getTipPercentage = (names: String[]) =>
  names.length > 5 ? 20 : names.length > 0 ? 10 : 0;

assert.deepStrictEqual(getTipPercentage([]), 0);
assert.deepStrictEqual(
  getTipPercentage(['Alice', 'Bob', 'Charlie', 'Danny', 'Emily', 'Wojtek']),
  20,
);
assert.deepStrictEqual(getTipPercentage(['"Alice"']), 10);

const abbreviate = (name: String): String => {
  const initial = name.substring(0, 1);
  const separator = name.indexOf(' ');
  const lastName = name.substring(separator + 1);
  return initial + '. ' + lastName;
};

assert.deepStrictEqual(abbreviate('Alonzo Church'), 'A. Church');
assert.deepStrictEqual(abbreviate('A. Church'), 'A. Church');
assert.deepStrictEqual(abbreviate('A Church'), 'A. Church');
