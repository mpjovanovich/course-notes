---
title: Data Stores
course: DBMS110
---

~.toc

- [Data Stores](#data-stores)
  - [Text Files](#text-files)
  - [Delimited Files](#delimited-files)
  - [Spreadsheets](#spreadsheets)
  - [Databases](#databases)
    - [Database Management Systems (DBMS)](#database-management-systems-dbms)
    - [Interfacing with a DBMS](#interfacing-with-a-dbms)
      - [CLI (Command Line Interface)](#cli-command-line-interface)
      - [GUI (Graphical User Interface)](#gui-graphical-user-interface)

/~

# Data Stores

A **data store** is exactly what it sounds like - a way to store data.

We will cover data modeling in later modules, but it is useful to know the symbol for a **data store**:

<figure>
    <span>
        <img src="https://img.favpng.com/14/18/20/computer-icons-database-symbol-icon-design-png-favpng-H1GjigGFYagZD6HXpQA72JcJB.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

Data stores come in many forms.

## Text Files

- Typically only contain raw text with no style or formatting information.
- May be structured in a variety of ways and have any (or no) file extension.
- Often used for simple key/value mappings and configuration information.

One example is an `.ini` file. You might see these used for application settings, such as game save information:

```ini
[player]
char_name = MegaMage999
level = 42
class = Mage

[game_settings]
server = play.gamestudio.com
port = 25565
save_file = "world_save.dat"
```

Text files use **ASCII** (American Standard Code for Information Interchange) or **Unicode** character encoding. Each character is represented by a binary number. A lookup table is used to convert the binary number to the character.

~.focusContent.demo

**ASCII in Action**

In this walkthrough, your instructor will take a look at the actual binary underneath a text file, and we will see how it is converted to the characters we see on the screen.

- Go to: https://www.ascii-code.com/
- Save a local text file, `demo.txt`
- Use the command `xxd -b demo.txt` to view the binary
- Note how each byte (8 bits) maps to a character in the ASCII table

\*_Note: even though all computer information is stored in binary at the lowest level, we still call files that contain text "text files" to differentiate them from other binary files._

/~

## Delimited Files

Delimited files use a **delimiter** to separate the data - usually a single **character** (e.g. `,`, `;`, `|`, `\t`).

By far the most common delimiter is the comma (`,`), which is why these files are often called _comma-separated values_ (CSV) files. These use the `.csv` file extension.

```csv
char_name,level,class
MegaMage999,42,Mage
MiniMage,11,Mage
PunyWarrior,1,Warrior
```

~.focusContent.exercise

**Opening Text Files**

The **file extension** (part of the file name after the last dot) is a form of **metadata** that tells both the user and the operating system what type of file it is. Most operating systems keep a mapping of file extensions to the programs that can open them. This can be changed by the user, or the user can choose to open a file with a different program.

In this exercise we will:

- Open Notepad++
- Paste the data above into a new file
- Save the file as `characters.csv`
- Close Notepad++
- Open the file in Microsoft Excel

/~

To avoid clashes with data that have commas in them, it is often better to use an infrequently used character as a delimiter, such as the tilde (`~`) or pipe (`|`) character.

```csv
char_name~level~class
MegaMage999~42~Mage
MiniMage~11~Mage
PunyWarrior~1~Warrior
```

## Spreadsheets

<figure>
    <span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/768px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png?20190925171014" style="width: 40%;height: auto;">
    </span>
</figure>

Spreadsheets are a type of file designed to store data in **tabular** (table) form. These offer more capabilities than simple text files, such as:

- Formatting
- Sorting
- Filtering
- Calculations

The most common spreadsheet programs are Microsoft Excel and Google Sheets.

~.focusContent.exercise

**Spreadsheet Basics**

We saw earlier that Microsoft Excel can open CSV files. It cannot, however, perform the data operations listed above without first converting the data to a spreadsheet format.

- After opening the CSV file, you should see an option to convert the CSV file to a spreadsheet. Do this now.
- Sort the data by level
- Filter to only show the Mage class entries
- Save the file as `characters.xlsx`
- Try opening the file in Notepad++ - what do you see?

Spreadsheets are saved in **binary** format, which means they are not human-readable like CSV files.

/~

## Databases

A **database** is an organized collection of related data. There is no common "file format" for a database; it is an abstract concept. In practice, databases are implemented in a variety of ways.

When using the term "database" we are typically referring to one that is managed by a database management system (DBMS).

### Database Management Systems (DBMS)

Once a data store reaches a certain size, it becomes infeasible to manually manage it.

A **database management system (DBMS)** is software that allows you to create, modify, query, and administer a database. This software contains the core components of a database system, which are at minimum:

| Component               | Description                                                       |
| ----------------------- | ----------------------------------------------------------------- |
| **Database Engine**     | Responsible for the storage, retrieval, and manipulation of data. |
| **Query Processor**     | Processes queries to the database.                                |
| **Transaction Manager** | Manages transactions to the database.                             |

### Interfacing with a DBMS

Depending on a person's role they may interact with the DBMS using the CLI or a GUI.

#### CLI (Command Line Interface)

The **CLI (Command Line Interface)** is a text-based interface that allows you to interact with the DBMS using commands. This is done via a terminal window.

The advantage of the CLI is that it does not require graphical software to be installed. Many servers that run a DBMS do not have graphics hardware, so the CLI is the only way to interact with the DBMS.

Some examples of CLI commands are shown below.

```bash
# Connect to the database
mysql -u root -p

# List all databases
show databases;

# Use a database
use database_name;
```

#### GUI (Graphical User Interface)

<figure>
    <span>
        <img src="https://imgs.search.brave.com/Kyy9bn1eZ1gVC7JlXIN8xsaPCqeP16BUzkgegfqB51M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHV0b3JpYWxzdGVh/Y2hlci5jb20vX25l/eHQvaW1hZ2U_dXJs/PS9pbWFnZXMvc3Fs/c2VydmVyL1NTTVMu/d2VicCZ3PTM4NDAm/cT03NQ" style="width: 100%;height: auto;">
    </span>
</figure>

The **GUI (Graphical User Interface)** (pronounced "gooey") is a visual interface that allows you to interact with the DBMS using a mouse and keyboard, like a traditional desktop application.

Most users who need to frequently run queries will use a GUI.
