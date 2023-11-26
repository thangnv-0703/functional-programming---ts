import assert from 'assert';

const replan = (plan: String[], newCity: String, beforeCity: String) => {
  const beforeIndex = plan.indexOf(beforeCity);
  const citiesBefore = plan.slice(0, beforeIndex);
  const citiesAfter = plan.slice(beforeIndex);
  return citiesBefore.concat(newCity, citiesAfter);
};

const planA = ['Paris', 'Berlin', 'Kraków'];
console.log('Plan A: ' + planA);

const planB = replan(planA, 'Vienna', 'Kraków');
console.log('Plan B: ' + planB);
assert.deepStrictEqual(planB, ['Paris', 'Berlin', 'Vienna', 'Kraków']);

assert.deepStrictEqual(planA, ['Paris', 'Berlin', 'Kraków']);
console.log('Plan A: ' + planA);
