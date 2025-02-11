---
title: JavaFX Installation
course: SDEV200
---

~.toc

- [JavaFX Installation](#javafx-installation)
  - [Download JavaFX SDK](#download-javafx-sdk)
  - [Extract the Libraries](#extract-the-libraries)
  - [Set up VS Code](#set-up-vs-code)
  - [Create a Test File](#create-a-test-file)
  - [Compile the Program](#compile-the-program)
  - [Run the Program](#run-the-program)
  - [Configure VS Code Debugging](#configure-vs-code-debugging)

/~

# JavaFX Installation

## Download JavaFX SDK

We will first download the libraries for JavaFX.

- Go to the download page at [https://openjfx.io/](https://openjfx.io/)
- Click the Download button
  - JavaFX version: 21.0.6 [LTS]
  - Operating System: Windows or MacOS (match your OS)
  - Architecture: x64
  - Type: SDK

## Extract the Libraries

What we downloaded is not an installer. It is a zip file containing the libraries.

_Windows_

- Create a new folder directly on the root of your C drive: `C:\javafx-sdk-21.0.6`
  - There are dashes, not underscores in the folder name
- Extract the contents of the zip file into the folder
  - You can drag and drop the zipped folders into the new folder
  - You do not have to include the source code from the zip file

## Set up VS Code

VS Code will not automatically recognize the JavaFX libraries. We will add a setting to prevent annoying red underlines in our code.

- Open VS Code
- Open settings with Ctrl + shift + p:
- Choose "Preferences: Open Settings (UI)"
- Search for `java.project.referencedLibraries`
- Choose, "Edit in settings.json"
- Add the following line to the end of the file:
  - `"java.project.referencedLibraries": ["C:/javafx-sdk-21.0.6/lib/*.jar"]`
- Save the file
- Restart VS Code

## Create a Test File

- Create an empty folder for your project
- Open the folder in VS Code
- Create a new file: `Main.java`
- Add the following code snippet:

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.stage.Stage;

public class Main extends Application {
    @Override
    public void start(Stage primaryStage) {
        Label label = new Label("Hello, JavaFX!");
        Scene scene = new Scene(label, 300, 200);
        primaryStage.setTitle("JavaFX Hello World");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

## Compile the Program

Our ".java" program is not a standalone program. It needs to be compiled into a ".class" file.

- Open the terminal in VS Code
- Run the following command:
  - `javac --module-path "C:\javafx-sdk-21.0.6\lib" --add-modules javafx.controls *.java -d out`
- This should have created a new folder: `out` with the compiled class

## Run the Program

We can run a JavaFX program by using the `java` command.

- Open the terminal in VS Code
- Run the following command:
  - `java --module-path "C:\javafx-sdk-21.0.6\lib" --add-modules javafx.controls -cp out Main`
- This should open a window with the text "Hello, JavaFX!"

## Configure VS Code Debugging

We can configure VS Code to debug JavaFX programs by creating a launch.json file.

- Create a new folder under the project root named `.vscode`
  - Note the dot at the beginning of the folder name.
- Create a file named `launch.json` under the `.vscode` folder.
- Add the following code to the file:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "java",
      "name": "Launch JavaFX App",
      "request": "launch",
      "mainClass": "Main",
      "vmArgs": "--module-path \"C:/javafx-sdk-21.0.6/lib\" --add-modules javafx.controls,javafx.fxml"
    }
  ]
}
```

Now you should be able to use the run and debug buttons in VS Code to run and debug your JavaFX program.

Try putting a breakpoint in the `start` method and running the program.

If it's not working try restarting VS Code.
