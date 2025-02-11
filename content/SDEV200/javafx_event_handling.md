---
title: JavaFX Event Handling
course: SDEV200
---

~.toc

- [JavaFX Event Handling](#javafx-event-handling)
  - [Event Handling](#event-handling)
  - [Lambda Expressions](#lambda-expressions)
  - [Accessing Control Properties](#accessing-control-properties)
  - [Example](#example)

/~

# JavaFX Event Handling

JavaFX event handling is the process of responding to user interactions, such as clicking a button or typing in a text field.

## Event Handling

An **event** is an action that occurs in the application, such as a button click or a key press.

An **event handler** is a method that is called when an event occurs.

Java controls have a predefined set of events that can be handled. For example, the `Button` control has an `ActionEvent` event.

Events can be **subscribed to** using the `setOn...` methods. You can see which events are offered by looking at the autocomplete suggestions for the control in your IDE. Just type the control name and press `.` to see the available events.

## Lambda Expressions

Lambda expressions are a way to write anonymous methods. They are often used in event handling.

In the below example, the code inside of the parentheses is the lambda expression. This is a function that:

- Takes an `ActionEvent` parameter, which we've named `e`
- Returns `void`
- Prints "Button clicked" to the console

```java
btnClickMe.setOnAction(e -> {
    System.out.println("Button clicked");
});
```

We can use any function that matches the signature that the method expects (takes ActionEvent, returns void).

## Accessing Control Properties

In may cases we need to access properties of the controls that are on the page.

```java
// Get the text from a TextField as a string
String name = txtName.getText();

// Get the text from a TextField as an integer
int age = Integer.parseInt(txtAge.getText());
```

## Example

When the button is clicked in this program it will toggle some styles and increment a counter.

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class Main extends Application {
    // Create a counter variable
    int counter = 0;
    boolean isStyle1 = true;
    final String style1 = "-fx-background-color: black; -fx-text-fill: white;";
    final String style2 = "-fx-background-color: white; -fx-text-fill: black;";

    @Override
    public void start(Stage primaryStage) {
        // Create controls
        Label lblWelcome = new Label("Current count: " + counter);
        lblWelcome.setStyle("-fx-font-weight: bold;");

        Button btnToggleStyles = new Button("Toggle Styles");
        btnToggleStyles.setStyle(style1);

        // Create VBox container
        VBox vbox = new VBox(10);
        vbox.setStyle("-fx-padding: 20;");

        // Add child controls to vbox
        vbox.getChildren().add(lblWelcome);
        vbox.getChildren().add(btnToggleStyles);

        // Create the event handler for the button
        btnToggleStyles.setOnAction(e -> {
            // Toggle the styles
            isStyle1 = !isStyle1;
            if (isStyle1) {
                btnToggleStyles.setStyle(style1);
            } else {
                btnToggleStyles.setStyle(style2);
            }

            // Increment the counter
            counter++;

            // Update the label
            lblWelcome.setText("Current count: " + counter);
        });

        // Add the VBox to a Scene. It will be the root node in the scene
        Scene scene = new Scene(vbox, 300, 200);

        // Set the controls needed to "start" the application
        primaryStage.setTitle("Toggle App");
        primaryStage.setScene(scene);
        primaryStage.show();
    }
}
```

~.focusContent.lookout

The order in which you subscribe to events matters. We should subscribe to events after we have added the controls to the container, but before we show the stage.

/~
