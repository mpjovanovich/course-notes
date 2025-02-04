---
title: Singly Linked List
course: SDEV200
---

~.toc

- [Singly Linked List](#singly-linked-list)

/~

# Singly Linked List

```java
class SinglyLinkedStringList {
    // /////////////////////////////////////////
    // Nested Node class
    // /////////////////////////////////////////
    // We nest this class inside the SinglyLinkedStringList class
    // because no other class needs to access this class.
    class Node {
        // The actual value of the node
        String data;
        // Next node in the list
        Node next;

        // Constructor
        Node(String data) {
            this.data = data;
            this.next = null;
        }
    }

    // /////////////////////////////////////////
    // Class variables
    // /////////////////////////////////////////
    private Node head;

    // /////////////////////////////////////////
    // Constructor
    // /////////////////////////////////////////
    public SinglyLinkedStringList() {
        this.head = null;
    }

    // /////////////////////////////////////////
    // Public methods
    // /////////////////////////////////////////
    // Add to the end of the list
    public void add(String data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Get item at index
    public String get(int index) {
        return getNode(index).data;
    }

    // Remove item at index
    public void remove(int index) {
        if (index == 0) {
            Node toRemove = head;
            // Update head to point to the next (second) node
            head = head.next;
            // Mark the node to remove as null
            toRemove.next = null;
        } else {
            // Get the node prior to the one we want to remove
            Node previous = getNode(index - 1);
            // Get the node to remove
            Node toRemove = previous.next;
            // Update the next pointer of the previous node to point to the
            // node after the one we want to remove
            previous.next = toRemove.next;
            // Mark the node to remove as null
            toRemove.next = null;
        }
    }

    // /////////////////////////////////////////
    // Private methods
    // /////////////////////////////////////////
    // Get node at index
    private Node getNode(int index) {
        Node current = head;
        for (int i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
}

public class SinglyLinkedStringListTest {
    public static void main(String[] args) {
        SinglyLinkedStringList list = new SinglyLinkedStringList();
        list.add("apple");
        list.add("banana");
        list.add("cherry");

        System.out.println(list.get(0)); // apple
        System.out.println(list.get(2)); // cherry

        list.remove(1); // remove "banana"
        System.out.println(list.get(1)); // cherry
    }
}
```
