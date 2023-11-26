import assert from 'assert';

const score = (word: String) => {
  return word.replace(new RegExp('a', 'g'), '').length;
};

const sortScoreStr = (a: String, b: String) => score(a) - score(b);

assert.deepStrictEqual(['rust', 'java'].sort(sortScoreStr), ['java', 'rust']);

const words = ['ada', 'haskell', 'scala', 'java', 'rust'];
const wordRanking = words.sort(sortScoreStr).reverse();
assert.deepStrictEqual(wordRanking, [
  'haskell',
  'rust',
  'scala',
  'java',
  'ada',
]);

const rankedWords = (wordScore: (word: String) => Number, words: String[]) => {
  const negativeScore = (word: String) => -wordScore(word);
  return Array.from(words).sort((a, b) => negativeScore(a) - negativeScore(b));
};

assert.deepStrictEqual(rankedWords(score, ['rust', 'java']), ['rust', 'java']);

const bonus = (word: String) => (word.includes('c') ? 5 : 0);

const penalty = (word: String) => (word.includes('s') ? 7 : 0);

const highScoringWords =
  (wordScore: (word: String) => Number) =>
  (higherThan: Number) =>
  (words: String[]) => {
    return words.filter((word) => wordScore(word) > higherThan);
  };

const words2 = ['football', 'f1', 'hockey', 'basketball'];
const wordsWithScoreHigherThan = highScoringWords(
  (word: String) => score(word) + bonus(word) - penalty(word),
);
const result = wordsWithScoreHigherThan(1)(words);
assert.deepStrictEqual(result, ['java']);
