import canIterate from '../canIterate.js';

test('Map is iterable', () => {
    expect(canIterate(new Map())).toBe(true)
});

test('Set is iterable', () => {
    expect(canIterate(new Set())).toBe(true)
});

test('null is not iterable', () => {
    expect(canIterate(null)).toBe(false)
});

test('number is not iterable', () => {
    expect(canIterate(10)).toBe(false)
});

test('string is iterable', () => {
    expect(canIterate("Netology")).toBe(true)
});
