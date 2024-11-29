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
    const button = document.getElementById(`btn-0`);

    expect(button).toBeInTheDocument();
  });
});