---
title: Data Types
course: SDEV200
---

~.toc

- [JavaFX Layout and Controls](#javafx-layout-and-controls)
  - [Scene](#scene)
  - [Container Classes](#container-classes)
  - [Basic Controls](#basic-controls)
  - [Styling](#styling)
  - [Example](#example)

/~

# JavaFX Layout and Controls

JavaFX works by arranging controls in a scene, which is then displayed in a window.

These controls are arranged in a hierarchy of container classes.

## Scene

The scene is the root of the JavaFX application. It contains all the controls and the layout of the application.

```java
Scene scene = new Scene(root, 800, 600);
```

## Container Classes

JavaFX offers several container classes that allow you to arrange and manage UI components.

| Container Class | Description                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| `VBox`          | A container that arranges components in a vertical column.                                            |
| `HBox`          | A container that arranges components in a horizontal row.                                             |
| `StackPane`     | A basic container that allows you to place components on top of each other.                           |
| `BorderPane`    | A container that divides the available space into five regions: top, bottom, left, right, and center. |

## Basic Controls

Input controls are used to get input from the user.

| Input Control | Description                                  |
| ------------- | -------------------------------------------- |
| `Button`      | A button that can be clicked.                |
| `Label`       | A label that displays text.                  |
| `TextField`   | A single-line text input field.              |
| `CheckBox`    | A checkbox that can be checked or unchecked. |
| `ComboBox`    | A dropdown list of items.                    |
| `ImageView`   | A control that displays an image.            |

Input controls are typically prefixed to indicate their type.

## Styling

JavaFX provides a CSS-like styling system to customize the appearance of controls.

This can be set in an external CSS file or inline in the JavaFX code.

```java
// Inline styling
Button button = new Button("Click me");
button.setStyle("-fx-background-color: #42a5f5;");
```

## Example

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class Main extends Application {
    @Override
    public void start(Stage primaryStage) {
        // Create controls
        Label lblWelcome = new Label("Welcome to JavaFX!");
        lblWelcome.setStyle("-fx-font-weight: bold;");

        Button btnClickMe = new Button("Click Me");
        btnClickMe.setStyle("-fx-background-color: black; -fx-text-fill: white;");

        // Create VBox container
        VBox vbox = new VBox(10); // 10px spacing
        vbox.setStyle("-fx-padding: 20;"); // Padding around VBox

        // Add child controls to vbox
        vbox.getChildren().add(lblWelcome);
        vbox.getChildren().add(btnClickMe);

        // Add the VBox to a Scene. It will be the root node in the scene
        Scene scene = new Scene(vbox, 300, 200);

        // Set the controls needed to "start" the application
        primaryStage.setTitle("Simple App");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```
