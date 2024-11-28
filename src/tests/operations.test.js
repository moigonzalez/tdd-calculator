require('@testing-library/jest-dom');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const path = require('path');
const html = path.join(__dirname, '../index.html');

const { add, subtract, multiply, divide, appendValue, clearDisplay, deleteLast } = require('../js/index');

describe('Calculator Functionality', () => {
  let display;
  let document;

  beforeEach(async () => {
    dom = await JSDOM.fromFile(html);
    document = dom.window.document;
    display = document.getElementById('display');
  });

  test('should correctly perform addition', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('should correctly perform subtraction', () => {
    expect(subtract(7, 2)).toBe(5);
    expect(subtract(5, 5)).toBe(0);
    expect(subtract(0, 5)).toBe(-5);
  });

  test('should correctly perform multiplication', () => {
    expect(multiply(4, 5)).toBe(20);
    expect(multiply(-3, 3)).toBe(-9);
    expect(multiply(0, 10)).toBe(0);
  });

  test('should correctly perform division', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
    expect(divide(-10, 2)).toBe(-5);
  });

  test('should throw an error for division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

  test('should append values to the display', () => {
    appendValue(display, '1');
    appendValue(display, '+');
    appendValue(display, '2');
    expect(display.value).toBe('1+2');
  });

  test('should clear the display', () => {
    display.value = '123';
    clearDisplay(display);
    expect(display.value).toBe('');
  });

  test('should delete the last character from the display', () => {
    display.value = '123';
    deleteLast(display);
    expect(display.value).toBe('12');

    deleteLast(display);
    expect(display.value).toBe('1');

    deleteLast(display);
    expect(display.value).toBe(''); // Display is empty after deleting all characters
  });
});