# Combined Prompt

Write a complete test suite for the following function. Follow these guidelines:

1. **Instructional:** Write tests for typical values, edge cases, and invalid inputs.
2. **Context:** The function processes inputs and returns a result. Test various scenarios.
3. **Expectation:** The tests should achieve 100% branch coverage.
4. **Output Format:** Use `describe` and `it` blocks. Test descriptions should start with `it 'should'`.
5. **Constraints:** Keep the tests simple and concise. Use only native Jest methods.
6. **Target Audience:** The tests will be reviewed by strict reviewers. Clearly comment the code.
7. **Examples:** Follow this example:
   describe('multiply', () => {
     it('should return the product of two positive numbers', () => {
       expect(multiply(2, 3)).toBe(6);
     });
   });
