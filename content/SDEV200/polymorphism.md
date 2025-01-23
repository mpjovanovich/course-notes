---
title: Polymorphism
course: SDEV200
---

~.toc

- [Polymorphism](#polymorphism)
  - [Polymorphism Example](#polymorphism-example)

/~

# Polymorphism

In the previous notes, we saw how we can use inheritance or interfaces to define a contract for a method that must be implemented by a subclass or implementing class.

**Polymorphism** allows us to treat different types of objects in a similar way if they share a common parent class or interface.

## Polymorphism Example

Take note of the following:

- Any class that implements the `Canine` interface must implement the `getAverageWeight` and `getContinents` methods.
- The `printCanineInfo` method will accept any class that implements the `Canine` interface.
- The `printCanineInfo` method works because it "knows" that any `Canine` will have the two methods on it.

~.focusContent.example

```java
interface Canine {
    double getAverageWeight();
    String[] getContinents();
}

class GrayWolf implements Canine {
    public double getAverageWeight() {
        return 80;
    }

    public String[] getContinents() {
        return new String[] { "North America" };
    }
}

class RedFox implements Canine {
    public double getAverageWeight() {
        return 20;
    }

    public String[] getContinents() {
        return new String[] { "North America", "Europe", "Asia" };
    }
}

public class Test {
    // This method will work for any class that implements the Canine interface
    public static void printCanineInfo(Canine canine) {
        System.out.println("Average weight: " + canine.getAverageWeight());
        System.out.println("Continents: ");
        for (String continent : canine.getContinents()) {
            System.out.println(continent);
        }
    }

    public static void main(String[] args) {
        GrayWolf grayWolf = new GrayWolf();
        RedFox redFox = new RedFox();
        printCanineInfo(grayWolf);
        printCanineInfo(redFox);
    }
}
```

/~
