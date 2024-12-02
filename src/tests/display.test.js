require('@testing-library/jest-dom');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const path = require('path');
const html = path.join(__dirname, '../index.html');

const { appendValue, clearDisplay } = require('../js/index');

describe('Calculator Display', () => {
  let display;
  let document;

  beforeEach(async () => {
    dom = await JSDOM.fromFile(html);
    document = dom.window.document;
    display = document.getElementById('display');
  });

  test('must have a display to show the current input or result', () => {
    expect(display).toBeInTheDocument();
  });

  test('should clear the display', () => {
    display.value = '123';
    clearDisplay(display);
    expect(display.value).toBe('');
  });

  test('should append values to the display', () => {
    appendValue('1', display);
    appendValue('+', display);
    appendValue('2', display);
    expect(display.value).toBe('1+2');
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

  test('should should be read-only', () => {
    expect(display.hasAttribute('readonly')).toBe(true);
  });

  test('should update dynamically when the current input changes', () => {
    expect(display.value).toBe('');

    appendValue('123', display);

    expect(display.value).toBe('123');
  });
});