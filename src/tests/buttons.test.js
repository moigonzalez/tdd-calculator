require('@testing-library/jest-dom');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const path = require('path');
const html = path.join(__dirname, '../index.html');

describe('Calculator Buttons', () => {
  let dom;
  let document;

  beforeEach(async () => {
    dom = await JSDOM.fromFile(html);
    document = dom.window.document;
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