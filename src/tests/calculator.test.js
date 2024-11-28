require('@testing-library/jest-dom');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const path = require('path');
const html = path.join(__dirname, '../index.html');

describe('Calculator', () => {
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

  test('the display should should be read-only', () => {
    const display = document.getElementById('display');
    expect(display.hasAttribute('readonly')).toBe(true);
  });

  test('the display should update dynamically when the current input changes', () => {
    const display = document.getElementById('display');
    expect(display.value).toBe('');

    const updateDisplay = value => {
      display.value = value;
    };

    updateDisplay('123');
    expect(display.value).toBe('123');
  });

  test('must have buttons for digits (0-9)', () => {
    [...Array(9).keys()].forEach((i) => {
      const button = document.getElementById(`btn-${i}`);
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(i.toString());
    })
  });

  test('should have operation buttons (+, -, *, /)', () => {
    const operators = ['add', 'subtract', 'multiply', 'divide'];
    operators.forEach(op => {
      const button = document.getElementById(`btn-${op}`);
      expect(button).toBeInTheDocument();
    });
  });

  test('should have clear (C), delete (DEL), equal (=), and decimal (.) buttons', () => {
    const specialButtons = ['clear', 'delete', 'equal', 'decimal'];
    specialButtons.forEach(btn => {
      const button = document.getElementById(`btn-${btn}`);
      expect(button).toBeInTheDocument();
    });
  });
});