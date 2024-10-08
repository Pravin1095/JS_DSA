# JS_DSA

Problem Solving Patterns :

Frequency counter
Multiple pointers
Sliding Window 
Divide and Conquer
Dynamic Programming
Greedy Algorithms 
BackTracking
Many more...

Frequency counters:

This pattern uses objects or sets to collect values/frequencies of values.
This can often avoid the need for nested loops or O(n^2) operations with arrays or strings

Multiple pointers:

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

Very efficient for solving problems with minimal space complexity as well

Sliding Window: 

This method involves creating a window which can either be an array or number from one position to another. Depending on certain conditions the window either opens or closes ( and a new window is created). Very useful for keeping track of subset of data in array/string etc

Divide and Conquer:

This pattern invloves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremoundously decrease time complexity

Static methods:

Static method defines a static method which is a utility function so that we can call it with Class and pass the objects as parameters so it performs a function. See example in point_class.js

this:

Inside all our instance methods and constructor the keyword 'this' refers to the object created from that class

Difference between array and linked list:

In array each element is represented by indices but in linked list we don't have an index instead each element is pointed to its next element like a bunch of cars that connects to next one and so on.

So to get to 5th element we can go there by one by one.  Linked lists consists of nodes and each nodes has a value and a pointer to another node or null. It contains a head , tail and a length property

Links:

https://cs.slides.com/colt_steele/singly-linked-lists#/6/0/3
https://visualgo.net/en/list