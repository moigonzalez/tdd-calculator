# Calculator Acceptance Criteria

The following acceptance criteria define the functionality and behavior of the calculator application:

---

## 1. Display
- [ ] The calculator must have a display to show the current input or result.
- [ ] The display should be read-only and update dynamically based on user input.
- [ ] The display should support numeric and decimal inputs.

---

## 2. Buttons
- [ ] The calculator must have buttons for digits `0-9`.
- [ ] The calculator must have buttons for the following operations:
  - [ ] Addition (`+`)
  - [ ] Subtraction (`-`)
  - [ ] Multiplication (`*`)
  - [ ] Division (`/`)
- [ ] The calculator must have a button to clear the display (`C`).
- [ ] The calculator must have a button to delete the last character (`DEL`).
- [ ] The calculator must have a button to calculate the result (`=`).
- [ ] The calculator must support decimal input (`.`).

---

## 3. Operations
- [ ] The calculator must correctly perform addition:
  - Example: `2 + 3 = 5`
- [ ] The calculator must correctly perform subtraction:
  - Example: `7 - 2 = 5`
- [ ] The calculator must correctly perform multiplication:
  - Example: `4 * 5 = 20`
- [ ] The calculator must correctly perform division:
  - Example: `10 / 2 = 5`
- [ ] Division by zero must display an error message (e.g., "Cannot divide by zero").

---

## 4. Expression Parsing
- [ ] The calculator must handle multi-step expressions:
  - Example: `2 + 3 * 4 = 14` (following order of operations).
- [ ] The calculator must follow the order of operations:
  - Parentheses first (if implemented).
  - Multiplication and division before addition and subtraction.

---

## 5. User Input
- [ ] The calculator must allow appending numbers and operators in sequence.
- [ ] The calculator must handle invalid inputs gracefully (e.g., no consecutive operators like `++`).
- [ ] After calculating a result, entering a new number must reset the display.

---

## 6. Error Handling
- [ ] The calculator must show an appropriate error message for invalid expressions (e.g., "Invalid expression").
- [ ] The calculator must clear the display when `C` is pressed.

# The Three Rules of TDD

1. **Write a failing test first**:
   - Before writing any production code, write a test that defines a specific functionality or behavior.
   - The test should fail because the functionality it tests has not been implemented yet.

2. **Write only enough code to make the test pass**:
   - Implement just enough production code to satisfy the requirements of the test.
   - Do not over-engineer or add unnecessary features at this stage.

3. **Refactor while keeping tests green**:
   - Refactor the code to improve its structure, readability, and efficiency while ensuring all tests still pass.
   - Tests serve as a safety net to prevent regressions during refactoring.

---

# Additional Rules and Principles

1. **Focus on one feature at a time**:
   - Tests should target small, isolated units of functionality.
   - Avoid testing multiple unrelated features in a single test.

2. **Tests should be deterministic**:
   - Ensure tests produce the same results every time they are run, regardless of external factors.

3. **Tests should drive the design**:
   - TDD encourages writing modular, loosely coupled code since testability often implies good design.