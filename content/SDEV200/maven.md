---
title: Building Java Projects with Maven
course: SDEV200
---

~.toc

- [Building Java Projects with Maven](#building-java-projects-with-maven)
  - [Maven](#maven)
  - [Maven Project Structure](#maven-project-structure)
    - [Source Code](#source-code)
    - [pom.xml](#pomxml)

/~

# Building Java Projects with Maven

## Maven

When developing software, we want to be able to:

1. Use other people's packages in our projects
1. Package our own code for distribution

Maven is a **build tool** for Java projects. Build tools can be used to:

- Compile code
- Package code for distribution
- Run tests
- Generate documentation
- Deploy to a server

## Maven Project Structure

Maven projects have a specific directory structure.

_Main.java:_

```java
// Must appear at the top of the file
package com.example;

// ... rest of the file ...
```

_Directory structure:_

```
src/
  main/
    java/         # Java source files go here, grouped by package
      com/
        example/
            Main.java
            OtherClass.java
pom.xml           # Maven's project configuration file
```

### Source Code

Maven follows a "convention over configuration" principle with a standardized project structure.

The main source code lives under the `src/main/java` directory.

Each package is represented by a directory under `src/main/java`.

~.focusContent.note

Package names follow formats like `org.apache.commons` or `java.util`.

This kind of organization is called a **namespace**. A namespace provides a hierarchical way to organize code and preventing naming collisions with other packages that may have the same class names.

For this class we will always use `com.example.app` as our package name.

~/

### pom.xml

The `pom.xml` file is Maven's project configuration file. It contains information about the project, including:

Below is an example of a `pom.xml` file with a single dependency.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--
project and modelVersion define what is allowed to be in thie pom.xml file, and
how it is allowed to be structured
-->
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <!--
    This section uniquely identifies the "jar" file (package) that is created
    when the project is compiled.
     -->
    <groupId>com.example</groupId>
    <artifactId>app</artifactId>
    <version>1.0.0</version>

    <!-- Makes sure that the project is targeting Java 21 -->
    <properties>
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
    </properties>

    <!--
    Dependencies are packages that contain code that is not in our current project.
    This can be code from an outside source (third-party libraries), or code from
    another project that we've written that we want to keep separate.
    -->
    <dependencies>
        <dependency>
            <groupId>org.fusesource.jansi</groupId>
            <artifactId>jansi</artifactId>
            <version>2.4.1</version>
        </dependency>
    </dependencies>

    <!--
    This defines what the output of our build should be.
    In this case we want a single package (jar file) as output.
    -->
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-shade-plugin</artifactId>
                <version>3.5.1</version>
                <executions>
                    <execution>
                        <phase>package</phase>
                        <goals>
                            <goal>shade</goal>
                        </goals>
                        <configuration>
                            <transformers>
                                <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                                    <mainClass>com.example.Main</mainClass>
                                </transformer>
                            </transformers>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```
