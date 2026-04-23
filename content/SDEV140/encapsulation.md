---
title: Encapsulation
course: SDEV140
---

~.toc

- [Encapsulation](#encapsulation)
  - [Access Modifiers](#access-modifiers)
  - [Pythonic Guidelines - Controlling Access](#pythonic-guidelines---controlling-access)
  - [Summary](#summary)
- [Examples](#examples)
  - [Example 1: Maintaining State](#example-1-maintaining-state)
  - [Example 2: Public API with Private Helpers](#example-2-public-api-with-private-helpers)
  - [Exercise: Vet Clinic Application, v3](#exercise-vet-clinic-application-v3)

/~

# Encapsulation

Primary purposes of **encapsulation** are to:

- Bundle the data (properties) and methods (functions) that operate on the data into a single unit.
- Prevent direct access to the data from outside the class.

The idea is to separate the **friendly public interface** (the **API** that users of the class interact with) from the **internal implementation details** that users shouldn't have to think about.

_Example_ - a `BankAccount` class:

- Methods that users of the class _should_ see (public API):
  - `transfer_to_account()`
- Methods that users of the class _should not_ see (internal "banky" implementation details):
  - `negotiate_routing_channel()`
  - `await_confirmation_code()`
  - `log_transaction()`
  - `send_confirmation_email()`

We need a way to mark which members are part of the public API and which are internal. That's what access modifiers are for.

## Access Modifiers

- We can control access to properties and methods using **access modifiers**.
  - Also called **visibility modifiers**.
- Access modifiers are typically implemented as keywords that go before the property or method.

The three most common access modifiers are:

| Modifier  | Description                                          |
| --------- | ---------------------------------------------------- |
| public    | Accessible from anywhere.                            |
| protected | Accessible from within the class and any subclasses. |
| private   | Accessible only from within the class.               |

_C# Example_:

```csharp
class Person
{
    // Private property
    private string name;

    // Public method
    public void WriteName()
    {
        // Access the name property
        Console.WriteLine(this.name);
    }
}
```

## Pythonic Guidelines - Controlling Access

<figure>
 <img src="https://miro.medium.com/v2/1*ls5qApmZPtUIV3Z_wll7Fw.png" alt="" style="width: 25%;height: auto;">
</figure>

~.focusContent.lookout

**Convention over Configuration**

Python does not have access modifiers, which are a foundational concept in OOP. It instead uses naming conventions to indicate access.

Python's design philosophy trusts developers to make the right decisions. This is a tradeoff of the language: it allows for flexibility and quick development, but creates potential for code to be used in ways that were not intended.

The C# example is given above so that you know what to look for as you progress to other languages.

/~

Per [PEP 8 - Designing for Inheritance](https://peps.python.org/pep-0008/#designing-for-inheritance)...

| Convention        | Example | Meaning                                         |
| ----------------- | ------- | ----------------------------------------------- |
| Single underscore | `_name` | Internal use only. Do not use outside the class |
| No underscore     | `name`  | Public. Safe to use outside the class           |

_Python Example_:

```python
class Person:
    # Public property
    name = 'Bob'

    # Internal ("private") property
    _age = 30

    # Internal method
    def _increment_age(self):
        self._age += 1
```

## Summary

Public is what the "outside" world is meant to see.

Protected is what subclasses are meant to see.

Private is what only the class itself is meant to see.

# Examples

Now that we know how to mark members as public, protected, or private, let's see encapsulation in action. The examples build from simplest to most complex:

1. Hiding a **property** so it can't be changed directly.
2. Hiding **helper methods** behind a clean public method.

## Example 1: Maintaining State

- We can keep track of the state of an object using properties.
- This example shows the most basic use of encapsulation: hide a property so outside code can't modify it directly, and expose a safe public interface (`deposit`, `withdraw`, `get_balance`) instead.

```python
# Define the class:
class BankAccount:
    # CONSTRUCTOR
    def __init__(self, initial_balance = 0):
        # We don't want the user to directly access the balance property,
        # so we make it non-public by prefixing it with an underscore.
        self._balance = initial_balance


    # #########################################################
    # PUBLIC METHODS - Stuff that the caller can "see"
    # #########################################################
    def deposit(self, amount):
        # Only update balance after confirming the deposit is valid
        if self._validate_deposit(amount):
            self._balance += amount
            print(f"Deposited ${amount}. New balance: ${self._balance}")

    def withdraw(self, amount):
        # Only update balance after confirming the withdrawal is valid
        if self._validate_withdrawal(amount):
            self._balance -= amount
            print(f"Withdrew ${amount}. New balance: ${self._balance}")

    # We still want the user to be able to view the balance - just not change it.
    # We can accomplish this by creating a getter method that returns the value of the balance property.
    def get_balance(self):
        return self._balance


    # #########################################################
    # INTERNAL ("PRIVATE") HELPER METHODS - caller should pretend these don't exist
    # #########################################################
    def _validate_deposit(self, amount):
        if amount <= 0:
            print("Invalid deposit amount. Please deposit a positive amount.")
            return False
        return True

    def _validate_withdrawal(self, amount):
        if amount <= 0:
            print("Invalid withdrawal amount. Amount must be greater than 0.")
            return False
        elif amount > self._balance:
            print("Insufficient funds.")
            return False
        return True

# Use the class:
account = BankAccount(initial_balance=1000)
print(f"Initial balance: ${account.get_balance()}")
account.deposit(500)
account.withdraw(200)
account.withdraw(2000)  # Should fail due to insufficient funds
print(f"Final balance: ${account.get_balance()}")
```

## Example 2: Public API with Private Helpers

- Encapsulation also applies to methods, not just properties.
- A single public method often does its job by calling several internal helper methods. Callers only need to know about the public one; the helpers are implementation details that can change freely without breaking outside code.

## Exercise: Vet Clinic Application, v3

~.focusContent.exercise

**Adding Access Control to the Application**

Let's extend our vet clinic application to add access control to the application.

See the `v3-access-control` branch of the [example repository](https://github.com/mpjovanovich-IvyTechDemos/python_oop_vet_app/tree/v3-access-control)

/~
