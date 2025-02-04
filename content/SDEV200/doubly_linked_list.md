---
title: Doubly Linked List
course: SDEV200
---

~.toc

- [Doubly Linked List](#doubly-linked-list)

/~

# Doubly Linked List

```java
class DoublyLinkedList<T> {
    // /////////////////////////////////////////
    // Nested Node class
    // /////////////////////////////////////////
    // We nest this class inside the DoublyLinkedList class
    // because no other class needs to access this class.
    class Node {
        // The actual value of the node
        T data;
        // Next node in the list
        Node next;
        Node previous;

        // Constructor
        Node(T data) {
            this.data = data;
            this.next = null;
            this.previous = null;
        }
    }

    // /////////////////////////////////////////
    // Class variables
    // /////////////////////////////////////////
    private Node head;
    private Node tail;

    // /////////////////////////////////////////
    // Constructor
    // /////////////////////////////////////////
    public DoublyLinkedList() {
        this.head = null;
        this.tail = null;
    }

    // /////////////////////////////////////////
    // Public methods
    // /////////////////////////////////////////
    // Add to the end of the list
    public void add(T data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            // Set the next node of the tail node to the new node
            newNode.previous = tail;
            tail.next = newNode;
            // Update the tail to be the new node
            tail = newNode;
        }
    }

    // Get item at index
    public T get(int index) {
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
            // Get the three nodes that need to be modified
            Node toRemove = getNode(index);
            Node previous = toRemove.previous;
            Node next = toRemove.next;

            // Update the next pointer of the previous node to point to the
            // node after the one we want to remove
            previous.next = toRemove.next;

            // Update the previous pointer of the next node to point to the
            // node before the one we want to remove
            next.previous = previous;

            // Mark the node to remove as null
            toRemove.next = null;
        }
    }

    public void printList() {
        Node current = head;
        while (current != null) {
            System.out.println(current.data);
            current = current.next;
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

public class DoublyLinkedListTest {
    public static void main(String[] args) {
        DoublyLinkedList<Integer> list = new DoublyLinkedList<Integer>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.remove(1);
        list.printList();
    }
}
```
