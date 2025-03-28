---
title: Software Testing Hierarchy
course: SDEV265
---

~.toc

- [Software Testing Hierarchy](#software-testing-hierarchy)
  - [Unit Testing](#unit-testing)
    - [What does a unit test look like?](#what-does-a-unit-test-look-like)
    - [Faking and Mocking](#faking-and-mocking)
  - [Integration Testing](#integration-testing)
  - [End-to-End (E2E) testing](#end-to-end-e2e-testing)
  - [Summary](#summary)

/~

# Software Testing Hierarchy

<figure>
    <span>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*dmf_61WDjpNFKL3G2NLQwQ.png" style="width: 100%;height: auto;">
    </span>
</figure>

## Unit Testing

**Unit testing** is the process of testing individual units of code in isolation. Typically:

- Classes
- Methods / functions

Key points:

- Developers write the tests.
- Tests indicate whether a unit of code is working as expected for a specific case.

Advantages:

- Early detection of defects.
- Can refactor without fear of breaking existing functionality.
- Increased code quality.

Disadvantages:

- \*Requires more time to write tests up front.
- May involve training for team members.

### What does a unit test look like?

Unit tests follow the pattern of **Arrange-Act-Assert** (AAA).

- **Arrange** - Set up the test data in a controlled state.
- **Act** - Call the function or method under test.
- **Assert** - Verify the expected outcome.

The goal is to make the test self-documenting and deterministic. We always want the test to be in the same state before and after the test.

~.focusContent.example

Let's write a simple tax calculator application.

You may have to install pytest to run the tests.

```bash
pip install pytest
```

We will:

- Walk through the current tests.
- Figure out which other tests we should write, focusing on requirements and edge cases.
- Write the tests.
- Refactor the code.

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
import pytest
from tax_utility import calculate_total_price

def test_calculate_total_price_with_tax():
    # Arrange
    base_price = 100.00
    tax_rate = 0.1
    expected_total = 110.00

    # Act
    actual_total = calculate_total_price(base_price, tax_rate)

    # Assert
    # Note: pytest.approx is used to handle floating point precision issues
    assert actual_total == pytest.approx(expected_total)

def test_calculate_total_price_with_zero_tax():
    # Arrange
    base_price = 50.00
    tax_rate = 0.0
    expected_total = 50.00

    # Act
    actual_total = calculate_total_price(base_price, tax_rate)

    # Assert
    assert expected_total == actual_total

def test_negative_price_raises_error():
    # Arrange
    base_price = -100.00
    tax_rate = 0.1

    # Act & Assert
    with pytest.raises(ValueError):
        calculate_total_price(base_price, tax_rate)
```

/~

### Faking and Mocking

In order to control the state of the system we can provide fake inputs and outputs at various points within the system. This is often referred to as **faking** or **mocking**.

We might use this to:

- Return a fake dataset from a database.
- Return a fake response from an external API.
- Return a fake file from a file system.
- Return a fake time from the system.

~.focusContent.lookout

Without faking inputs, the system sometimes cannot be in a controlled state.

In this example we have some code that interfaces with a weather service. The results coming from the weather service are not under our control, so for our tests we will need to fake them.

_weather.py_

```python
from typing import Optional

class WeatherService:
    def get_temperature(self, city: str) -> Optional[float]:
        # In reality, this would make an API call to a weather service
        # Could be slow, fail, or cost money
        pass

def should_wear_sunscreen(temperature: float) -> bool:
    return temperature > 75

def plan_beach_day(city: str, weather_service: WeatherService) -> bool:
    temp = weather_service.get_temperature(city)
    if temp is None:
        return False
    return should_wear_sunscreen(temp)
```

_test_weather.py_

```python
from unittest.mock import Mock

def test_plan_beach_day():
    # ###################################
    # Arrange
    # ###################################

    # Create a mock (fake object)
    mock_weather = Mock()
    # Configure the mock to return the value 80 when get_temperature is called
    mock_weather.get_temperature.return_value = 80

    # ###################################
    # Act
    # ###################################

    # "mock_weather" is not a real WeatherService - it's just a fake object
    # that we've created to behave like a WeatherService.
    result = plan_beach_day("Miami", mock_weather)

    # ###################################
    # Assert
    # ###################################

    # The result of the test should be True because our fake WeatherService
    # returned a temperature of 80.
    assert result == True

    # Our fake WeatherService should have been called with the argument "Miami"
    # exactly once, so we check that here.
    mock_weather.get_temperature.assert_called_once_with("Miami")
```

Fakes and mocks can also increase the speed of the tests by avoiding the overhead of setting up and tearing down the real system. In this case, we don't need to make a call over the network. This saves time when running hundreds of tests.

/~

## Integration Testing

- Tests how components or modules (larger units) work together to perform some functionality.
- Verifies interfaces between components function correctly
- Identify defects that arise when the system is "put together" (e.g. several classes working together)

## End-to-End (E2E) testing

- Tests the application flow from start to finish
- Simulates real user scenarios, "user stories"
- Tests all layers of the application
- Examples:
  - User registration flow
  - Purchase workflow
  - Data processing pipeline
- Can be automated or manual

## Summary

Revisiting the testing pyramid from above:

**Unit tests**: Fast to write, fast to run, low cost

**Integration tests**: Slower to write, slower to run, higher cost

**E2E tests**: Slowest to write, slowest to run, highest cost

All are important to ensure a robust application.

~.focusContent.example

For an example e-commerce system:

- Unit test: Testing the price calculation function
- Integration test: Testing if the order service can save to the database AND notify the inventory service
- End-to-end test: Testing the entire purchase flow from user login to order confirmation

/~
