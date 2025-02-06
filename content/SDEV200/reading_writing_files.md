---
title: Reading and Writing Files
course: SDEV200
---

~.toc

- [Reading and Writing Files](#reading-and-writing-files)
  - [Reading Files](#reading-files)
  - [Writing Files](#writing-files)

/~

# Reading and Writing Files

## Reading Files

We can use the `java.nio` library, along with `java.io.BufferedReader`, to read files.

~.focusContent.example

**Custom File Reader**

Let's make a file reader that accepts a file path as a parameter and prints the contents to the console.

The program uppercases odd numbered lines and lowercases even numbered lines.

```java
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;
import java.io.BufferedReader;

class CustomFileReader {
    // This method reads the file and prints the contents to the console.
    // Odd numbered lines are printed in uppercase, even numbered lines are printed
    // in lowercase.
    public static void readAndPrintFile(String filePath) {
        Path path = Paths.get(filePath);

        // The "Files" utility class provides a factory method to create a
        // BufferedReader. The BufferedReader has functionality to read lines of text.
        try (BufferedReader reader = Files.newBufferedReader(path)) {
            String line;
            boolean toUpperCase = true;

            // This syntax pattern allows us to avoid the priming read
            while ((line = reader.readLine()) != null) {
                if (toUpperCase) {
                    System.out.println(line.toUpperCase());
                } else {
                    System.out.println(line.toLowerCase());
                }
                // Toggle the case for the next line
                toUpperCase = !toUpperCase;
            }

        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
    }
}

public class Test {
    public static void main(String[] args) {
        // Get the path to the source file from the first command line argument
        if (args.length == 0) {
            System.out.println("Usage: java Test <source file>");
            System.exit(1);
        }

        System.out.println("-----------------------------");
        CustomFileReader.readAndPrintFile(args[0]);
        System.out.println("-----------------------------");
    }
}
```

/~

## Writing Files

We can use the `java.nio` library, along with `java.io.BufferedWriter`, to write files.

~.focusContent.example

**Custom File Writer**

Let's make a file writer that writes user input to a file.

The program prepends each line with the number of characters in the line.

```java
import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Scanner;

class CustomFileWriter {

    public static void writeUserInput(Path filePath) {
        // Bothe the Scanner and BufferedWriter should use try-with-resources
        try (Scanner scanner = new Scanner(System.in);
                BufferedWriter writer = Files.newBufferedWriter(filePath)) {
            String line;

            System.out.println("Enter text (type 'quit' on a new line to finish):");

            while (!(line = scanner.nextLine()).equalsIgnoreCase("quit")) {
                // Write the number of characters in the line, along with the line.
                writer.write(String.format("%-3d : %s%n", line.length(), line));
            }
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        }
    }
}

public class Test {
    public static void main(String[] args) {
        // Get the path to the source file from the first command line argument
        if (args.length == 0) {
            System.out.println("Usage: java Test <source file>");
            System.exit(1);
        }

        System.out.println("-----------------------------");
        Path destinationPath = Paths.get(args[0]);
        CustomFileWriter.writeUserInput(destinationPath);
        System.out.println("-----------------------------");
    }
}
```

/~
