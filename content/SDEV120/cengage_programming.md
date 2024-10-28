---
title: Cengage Programming Assignments
---

~.schedule

- [Cengage Programming Assignments](#cengage-programming-assignments)
  - [Which Browser to Use](#which-browser-to-use)
  - [Enabling Popups](#enabling-popups)
  - [Orientation With the IDE](#orientation-with-the-ide)
    - [Using Files](#using-files)
    - [Running Code](#running-code)
      - [Output](#output)
      - [Understanding Errors](#understanding-errors)
      - [Debugging With Breakpoints](#debugging-with-breakpoints)
        - [Stepping Through Code](#stepping-through-code)
        - [Tracking Values](#tracking-values)
  - [Checking Your Work with Cengage](#checking-your-work-with-cengage)
    - [Accessing the Companion Tool](#accessing-the-companion-tool)
    - [Running Tests](#running-tests)
  - [Submitting Assignments](#submitting-assignments)

/~

# Cengage Programming Assignments

## Which Browser to Use

- Chrome is recommended for Cengage assignments.

- "Chromium-based" browsers like Edge should work as well.

- Cengage has poor support for Firefox and Safari.

## Enabling Popups

- After clicking the assignment link in Cengage you will see a popup window that looks like this:

~~fig{images/enable_cengage_popups.png}

- Click the button on the top right and enable popups for this site. It's best to close and reopen the browser after doing this.

## Orientation With the IDE

### Using Files

- The links will open VS Code's web-based editor. It can take quite awhile to load. Please give it up to two minutes before deciding that it's stuck.

- Each assignment will have a starter `[assignment].py` file. This is where you will write your code.

- You can always get back to the files (Explorer pane) by clicking the icon on the left side toolbar.

~~fig{images/vs_code_explorer.png}

### Running Code

- Find the icon on the left side toolbar with the bug and play button, then click "Run and Debug".

- Choose "Python" debugger.

~~fig{images/debugging_python.png}

- Choose "Python File".

~~fig{images/debug_python_active_file.png}

#### Output

- The output from our `input()` and `print()` functions will appear in the terminal at the bottom of the screen.

~~fig{images/terminal_output.png}

- If you don't see the terminal, you can open it from the file menu.

~~fig{images/terminal_menu.png}

#### Understanding Errors

VS Code offers two colors of squiggly lines to indicate errors. Both types should be fixed if you encounter them:

~~fig{images/vs_code_squiggly_errors.png}

**Red Squiggles:** Syntax errors. Often caused by typos and missing punctuation.

**Yellow Squiggles:** Warnings for things that may break your code. Often caused by typos and unused variables.

#### Debugging With Breakpoints

Breakpoints are very useful for new and experienced programmers alike. They allow you to pause your code at a specific line and inspect the values of variables.

##### Stepping Through Code

- You can set breakpoints in your code by clicking in the margin to the left of the line number.

- When you run your code, it will pause at the breakpoint.

~~fig{images/vs_code_debugger_stepping.png}

- You can then execute the code line by line using the controls at the top of the screen, or the F10 / F11 keys.

**Tip:**

Once we move into functions:

- "Step Over" means "don't go down into any functions called on this line - just go to the next one".

- "Step Into" means "go into the function called on this line". You will probably want this when you're starting.

##### Tracking Values

- Variable values will appear in the "Variables" pane on the left side of the screen.

- You can hover over a variable to see its value as a tooltip.

- While sitting on a breakpoint, you can also manually add expressions to the "Watch" pane to track their values. This is useful to view intermediate results.

~~fig{images/vs_code_debugger.png}

## Checking Your Work with Cengage

### Accessing the Companion Tool

Cengage provides a "Companion" tool that will check your code against a set of test cases. Click "Accept" when you're first prompted.

~~fig{images/cengage_companion.png}

If you close the window, you can get back to it from the left-side toolbar.

~~fig{images/cengage_companion_toolbar.png}

### Running Tests

_Test Format:_

Each test is checking for one specific requirement from the instructions. Click the icon to the left of the test case to run it.

~~fig{images/cengage_single_test.png}

When you pass or fail, you will get details - you can click the dropdown arrow to see more information.

~~fig{images/fail_message.png}

Looks like we failed. We're most interested in the:

- Task description, shown at the top.
- Reason, shown in red.
- Output, shown in blue.

In this case the test was setup to look for "I'm learning how to program in Python." Our output left out a period at the end.

## Submitting Assignments

When you're ready to submit:

- Check all of your work by clicking "Calculate Grade". This will re-run all tests. Sometimes changing one part of the program will cause an earlier test to fail.

- **_Save a backup copy of your work on your personal device._**

- Click "Submit".

- Make a sandwich or something. It'll be awhile...

- **_Do not close the window until the wheel stops spinning and turns back into a Submit button._**

- Cengage has a delay when syncing with IvyLearn, so you may not see the assignment as "completed" in the gradebook right away.

~~fig{images/cengage_submit.png}
