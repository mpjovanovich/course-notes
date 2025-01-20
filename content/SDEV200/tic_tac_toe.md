---
title: Case Study - Tic Tac Toe
course: SDEV200
---

~.toc

- [Case Study - Tic Tac Toe](#case-study---tic-tac-toe)

/~

# Case Study - Tic Tac Toe

Here is a realistic example of OOP in action. It highlights the importance of encapsulation:

- The `Main` class knows nothing about the `TicTacToe` class except that it has a `play()` method. This provides a single entry point for the program - a common design pattern.

- Everything else in `TicTacToe` is private. These private methods and properties are used internally by the class, and cannot be modified from outside the class. Try accessing one of the private methods or properties from `Main` and see what happens.

- We can pass in options to initialize state to a class using its constructor.

- We can pass in dependencies to a class using **dependency injection**. This is a common design pattern in OOP. TicTacToe doesn't create its own `Scanner` object. Instead, it accepts one as a parameter to its constructor.

_Main.java_

```java
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    // Create a TicTacToe game with a 4x4 board
    TicTacToe ticTacToe = new TicTacToe(scanner, 4);

    // Start the game
    ticTacToe.play();

    // Close the scanner
    scanner.close();
  }
}
```

_TicTacToe.java_

```java
import java.util.Scanner;
import java.util.InputMismatchException;

public class TicTacToe {
  /***********************************
   * CLASS PROPERTIES
   ***********************************/
  private char[][] board;
  private final Scanner scanner;
  private final int boardSize;
  private char currentPlayer = 'X';

  /***********************************
   * CONSTRUCTOR
   ***********************************/
  public TicTacToe(Scanner scanner, int boardSize) {
    // We allow the user to pass in board size to make it customizable
    this.boardSize = boardSize;

    // We pass in the scanner to follow the dependency injection pattern -
    // It makes resources easier to manage and test
    this.scanner = scanner;

    // Initialize the board with empty spaces
    this.board = new char[boardSize][boardSize];
    for (int row = 0; row < boardSize; row++) {
      for (int col = 0; col < boardSize; col++) {
        board[row][col] = ' ';
      }
    }
  }

  /***********************************
   * PUBLIC METHODS
   ***********************************/
  public void play() {
    // Game loop
    // This is unfinished. In reality we'd check for a winning condition or full board.
    printBoard();
    System.out.println();

    while (true) {
      takeTurn();
    }
  }

  /***********************************
   * PRIVATE METHODS
   ***********************************/
  private int getValidIntInput() {
    int val = -1;
    while (true) {
      try {
        val = scanner.nextInt();
        scanner.nextLine();

        // Check if the input is within the valid range for the board size
        if (val < 1 || val > boardSize) {
          System.out.printf("Please enter an integer between 1 and %d: ", boardSize);
        } else {
          break;
        }
      } catch (InputMismatchException e) {
        // This exception is thrown when the input is not an integer
        scanner.nextLine();
        System.out.printf("Please enter an integer between 1 and %d: ", boardSize);
      }
    }
    return val;
  }

  private void printBoard() {
    // Print the top border of the board
    System.out.printf("|%s|%n", "-".repeat(boardSize * 4 + boardSize - 1));

    // Print the current state of the board
    for (int row = 0; row < boardSize; row++) {
      System.out.print("|");
      for (int col = 0; col < boardSize; col++) {
        System.out.printf("  %c |", board[row][col]);
      }
      System.out.printf("%n|%s|%n", "-".repeat(boardSize * 4 + boardSize - 1));
    }
  }

  private void takeTurn() {
    // Get the row and column from the user
    System.out.printf("Player %c, enter row: ", currentPlayer);
    int row = getValidIntInput();
    System.out.printf("Player %c, enter column: ", currentPlayer);
    int col = getValidIntInput();

    // Set the board position to the current player's symbol
    // Subtract 1 from the row and column to convert to 0-based index
    board[row - 1][col - 1] = currentPlayer;
    printBoard();

    // Print a spacer line
    System.out.println();

    // Switch to the next player
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
  }
}
```
