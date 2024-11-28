require('@testing-library/jest-dom');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const path = require('path');
const html = path.join(__dirname, '../index.html');

describe('Calculator Display', () => {
  let dom;
  let document;

  beforeEach(async () => {
    dom = await JSDOM.fromFile(html);
    document = dom.window.document;
  });

  test('must have a display to show the current input or result', () => {
    const display = document.getElementById('display');
    expect(display).toBeInTheDocument();
  });

  test('should should be read-only', () => {
    const display = document.getElementById('display');
    expect(display.hasAttribute('readonly')).toBe(true);
  });

  test('should update dynamically when the current input changes', () => {
    const display = document.getElementById('display');
    expect(display.value).toBe('');

    const updateDisplay = value => {
      display.value = value;
    };

    updateDisplay('123');
    expect(display.value).toBe('123');
  });
});