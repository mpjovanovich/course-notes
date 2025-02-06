---
title: Paths, Files, and Directories
course: SDEV200
---

~.toc

- [Paths, Files, and Directories](#paths-files-and-directories)

/~

# Paths, Files, and Directories

The `Path` interface is a new API that was added in Java 7. It should be preferred over the old `File` class.

The library for handling paths is:

```java
import java.nio.file.Path
```

Some common use cases for `Path` are:

- Getting the current working directory
- Getting the directory portion of a path
- Getting the file name from a path
- Getting the file extension from a path

~.focusContent.note

Many of the methods in the `Path` interface are static methods.

**Static methods** are methods that are associated with the class itself, rather than a particular instance of the class.

We don't have to use the `new` keyword and create an object to call them.

/~

~.focusContent.example

**Backup File Program**

Let's first take a source file from the user as a parameter. We will then create a new file in the same directory with the same name but with a `.bak` extension.

```java
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.io.IOException;

// Let's first take a source file from the user as a parameter. We will then
// create a new file in the same directory with the same name but with a `.bak`
// extension.
class BackupUtility {
    public static void backupFile(String source) {
        try {
            // Convert the String to a Path object
            // Java needs a Path to work with files
            Path sourcePath = Paths.get(source);
            Path backupPath = getBackupPath(sourcePath);
            copyFile(sourcePath, backupPath);
            System.out.println("File backed up successfully.");
        } catch (IOException e) {
            System.err.println("Failed to backup file: " + e.getMessage());
        }
    }

    private static Path getBackupPath(Path sourcePath) throws IOException {
        System.out.println("Source file: " + sourcePath);

        // Get the directory portion of the path
        Path sourceDirectory = sourcePath.getParent();
        System.out.println("Source directory: " + sourceDirectory);

        // Get the file name
        String sourceFileName = sourcePath.getFileName().toString();
        System.out.println("Source file name: " + sourceFileName);

        // Create the backup file path
        // This will combine the directory and the file name with a `.bak` extension
        Path backupPath = sourceDirectory.resolve(sourceFileName + ".bak");
        System.out.println("Backup file: " + backupPath);

        return backupPath;
    }

    private static void copyFile(Path sourcePath, Path backupPath) throws IOException {
        // Copy the file from sourcePath to backupPath
        Files.copy(sourcePath, backupPath, REPLACE_EXISTING);
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
        BackupUtility.backupFile(args[0]);
        System.out.println("-----------------------------");
    }
}
```

/~
