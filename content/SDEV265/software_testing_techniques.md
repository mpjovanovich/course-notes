---
title: Software Testing Techniques
course: SDEV265
---

~.toc

- [Software Testing Techniques](#software-testing-techniques)
  - [Fundamentals and Approaches](#fundamentals-and-approaches)
    - [Manual vs automated testing](#manual-vs-automated-testing)
    - [Black-box vs white-box testing](#black-box-vs-white-box-testing)
    - [Test-Driven-Development (TDD)](#test-driven-development-tdd)
    - [Behavior-Driven-Development (BDD)](#behavior-driven-development-bdd)
  - [Levels of Testing](#levels-of-testing)
    - [Unit testing](#unit-testing)
    - [Integration testing](#integration-testing)
    - [System testing](#system-testing)
    - [End-to-end testing](#end-to-end-testing)
    - [Acceptance testing](#acceptance-testing)
  - [Testing Strategies](#testing-strategies)

/~

# Software Testing Techniques

## Fundamentals and Approaches

### Manual vs automated testing

### Black-box vs white-box testing

### Test-Driven-Development (TDD)

### Behavior-Driven-Development (BDD)

## Levels of Testing

### Unit testing

**Unit testing** is the process of testing individual units of code in isolation. Typically:

- Classes
- Methods / functions

Key points:

- Developers write the tests.
- Tests typically written before code, or as code is being written.
- Tests are written in a separate file or module.
- Tests indicate whether a unit of code is working as expected.

Advantages:

- Early detection of defects.
- Prevents hidden defects that result from other parts of the system being changed.
- Allows for refactoring code with confidence.
- Increased quality of code under test.

Disadvantages:

- \*Requires more time to write tests up front.
- May involve training for team members.

~.focusContent.example

**What does a unit test look like?**

Unit tests follow the pattern of **Arrange-Act-Assert** (AAA).

- **Arrange** - Set up the test data in a controlled state.
- **Act** - Call the function or method under test.
- **Assert** - Verify the expected outcome.

**Method Under Test:** _tax_utility.py_

```python
def calculate_total_price(base_price: float, tax_rate: float) -> float:
    """
    Calculate the total price including tax.

    Args:
        base_price: The price before tax
        tax_rate: The tax rate as a decimal (e.g., 0.1 for 10%)

    Returns:
        The total price including tax
    """
    if base_price < 0 or tax_rate < 0:
        raise ValueError("Base price and tax rate must be non-negative")

    return base_price * (1 + tax_rate)
```

**Unit tests:** _test_tax_utility.py_

```python
import unittest
from tax_utility import calculate_total_price

class TestPriceCalculator(unittest.TestCase):
    def test_calculate_total_price(self):
        # Arrange
        base_price = 100.00
        tax_rate = 0.1
        expected_total = 110.00

        # Act
        actual_total = calculate_total_price(base_price, tax_rate)

        # Assert
        self.assertEqual(expected_total, actual_total)

    def test_calculate_total_price_with_zero_tax(self):
        # Arrange
        base_price = 50.00
        tax_rate = 0.0
        expected_total = 50.00

        # Act
        actual_total = calculate_total_price(base_price, tax_rate)

        # Assert
        self.assertEqual(expected_total, actual_total)

    def test_negative_price_raises_error(self):
        # Arrange
        base_price = -100.00
        tax_rate = 0.1

        # Act & Assert
        with self.assertRaises(ValueError):
            calculate_total_price(base_price, tax_rate)

if __name__ == '__main__':
    unittest.main()
```

/~

### Integration testing

### System testing

### End-to-end testing

### Acceptance testing

## Testing Strategies

The testing pyramid...

When to use each testing type...

....

https://miro.medium.com/v2/resize:fit:720/format:webp/1*l68vW2CAd8zG-VUPIrF4cw.png
