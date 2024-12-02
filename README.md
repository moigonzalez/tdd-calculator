# Calculator Acceptance Criteria

TO DO

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

# Extra Rules

 - It's not allowed to see the UI until the end of the implementation
 - Wait for everyone else before moving to the next step