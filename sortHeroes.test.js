import sortByHealth from './sortHeroes';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'какой-то чел', health: 80 },
];

test('heroes are sorting by health desc', () => {
  expect(sortByHealth(heroes)).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'какой-то чел', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
