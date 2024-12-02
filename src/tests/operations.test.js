require('@testing-library/jest-dom');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const path = require('path');
const html = path.join(__dirname, '../index.html');

const { add, subtract, multiply, divide } = require('../js/index');

describe('Calculator Functionality', () => {
  let display;
  let document;

  beforeEach(async () => {
    dom = await JSDOM.fromFile(html);
    document = dom.window.document;
    display = document.getElementById('display');
  });

  test('should correctly perform addition', () => {

  });
});