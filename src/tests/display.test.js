require('@testing-library/jest-dom');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const path = require('path');
const html = path.join(__dirname, '../index.html');

const { appendValue } = require('../js/index');

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

  test('should update dynamically when the current input changes', () => {
    appendValue('123', display);
    expect(display.value).toBe('123');
  });
});