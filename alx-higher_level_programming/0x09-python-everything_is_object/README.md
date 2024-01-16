# 0x09. Python - Everything is object

## Resources
- [9.10. Objects and values]()
- [9.11. Aliasing]()
- [Immutable vs mutable types]()
- [Mutation (Only this chapter)]()
- [9.12. Cloning lists]()
- [Python tuples: immutable but potentially changing]()

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- Why Python programming is awesome
- What is an object
- What is the difference between a class and an object or instance
- What is the difference between immutable object and mutable object
- What is a reference
- What is an assignment
- What is an alias
- How to know if two variables are identical
- How to know if two variables are linked to the same object
- How to display the variable identifier (which is the memory address in the CPython implementation)
- What is mutable and immutable
- What are the built-in mutable types
- What are the built-in immutable types
- How does Python pass variables to functions

## Mandatory Tasks

- [0-answer.txt](./0-answer.txt): Write the name of the function in the file, without ().

- [1-answer.txt](./1-answer.txt): Write the name of the function in the file, without ().

- [2-answer.txt](./2-answer.txt): In the following code, do a and b point to the same object? Answer with Yes or No.
  
  ```bash
  >>> a = 89
  >>> b = 100
  ```

- [3-answer.txt](./3-answer.txt): In the following code, do a and b point to the same object? Answer with Yes or No.
  
  ```bash
  >>> a = 89
  >>> b = 89
  ```

- [4-answer.txt](./4-answer.txt): In the following code, do a and b point to the same object? Answer with Yes or No.
  
  ```bash
  >>> a = 89
  >>> b = a
  ```

- [5-answer.txt](./5-answer.txt): In the following code, do a and b point to the same object? Answer with Yes or No.
  
  ```bash
  >>> a = 89
  >>> b = a + 1
  ```

- [6-answer.txt](./6-answer.txt): What do these 3 lines print?

  ```bash
  >>> s1 = "Best School"
  >>> s2 = s1
  >>> print(s1 == s2)
  ```

- [7-answer.txt](./7-answer.txt): What do these 3 lines print?

  ```bash
  >>> s1 = "Best"
  >>> s2 = s1
  >>> print(s1 is s2)
  ```

- [8-answer.txt](./8-answer.txt): What do these 3 lines print?

  ```bash
  >>> s1 = "Best School"
  >>> s2 = "Best School"
  >>> print(s1 == s2)
  ```

- [9-answer.txt](./9-answer.txt): What do these 3 lines print?

  ```bash
  >>> s1 = "Best School"
  >>> s2 = "Best School"
  >>> print(s1 is s2)
  ```

- [10-answer.txt](./10-answer.txt): What do these 3 lines print?

  ```bash
  >>> l1 = [1, 2, 3]
  >>> l2 = [1, 2, 3] 
  >>> print(l1 == l2)
  ```

- [11-answer.txt](./11-answer.txt): What do these 3 lines print?

  ```bash
  >>> l1 = [1, 2, 3]
  >>> l2 = [1, 2, 3] 
  >>> print(l1 is l2)
  ```

- [12-answer.txt](./12-answer.txt): What do these 3 lines print?

  ```bash
  >>> l1 = [1, 2, 3]
  >>> l2 = l1
  >>> print(l1 == l2)
  ```

- [13-answer.txt](./13-answer.txt): What do these 3 lines print?

  ```bash
  >>> l1 = [1, 2, 3]
  >>> l2 = l1
  >>> print(l1 is l2)
  ```

- [14-answer.txt](./14-answer.txt): What does this script print?

  ```python
  l1 = [1, 2, 3]
  l2 = l1
  l1.append(4)
  print(l2)
  ```

- [15-answer.txt](./15-answer.txt): What does this script print?

```python
l1 = [1, 2, 3]
l2 = l1
l1 = l1 + [4]
print(l2)
```

- [16-answer.txt](./16-answer.txt): What does this script print?

  ```python
  def increment(n):
      n += 1
  
  a = 1
  increment(a)
  print(a)
  ```

- [17-answer.txt](./17-answer.txt): What does this script print?

  ```python
  def increment(n):
      n.append(4)
  
  l = [1, 2, 3]
  increment(l)
  print(l)
  ```

- [18-answer.txt](./18-answer.txt): What does this script print?

  ```python
  def assign_value(n, v):
      n = v
  
  l1 = [1, 2, 3]
  l2 = [4, 5, 6]
  assign_value(l1, l2)
  print(l1)
  ```

- [19-copy_list.py](./19-copy_list.py): Write a function def copy_list(l): that returns a copy of a list.
  - The input list can contain any type of objects
  - Your file should be maximum 3-line long (no documentation needed)
  - You are not allowed to import any module

  ```bash
  guillaume@ubuntu:~/0x09$ cat 19-main.py
  #!/usr/bin/python3
  copy_list = __import__('19-copy_list').copy_list
  
  my_list = [1, 2, 3]
  print(my_list)
  
  new_list = copy_list(my_list)
  
  print(my_list)
  print(new_list)
  
  print(new_list == my_list)
  print(new_list is my_list)
  
  guillaume@ubuntu:~/0x09$ ./19-main.py
  [1, 2, 3]
  [1, 2, 3]
  [1, 2, 3]
  True
  False
  guillaume@ubuntu:~/0x09$ wc -l 19-copy_list.py 
  3 19-copy_list.py
  guillaume@ubuntu:~/0x09$ 
  ```

- [20-answer.txt](./20-answer.txt): Tuple or not?

  ```python
  a = ()
  ```
  Is a a tuple? Answer with Yes or No.

- [21-answer.txt](./21-answer.txt): Tuple or not?

  ```python
  a = (1, 2)
  ```
  Is a a tuple? Answer with Yes or No.

- [22-answer.txt](./22-answer.txt): Tuple or not?

  ```python
  a = (1)
  ```
  Is a a tuple? Answer with Yes or No.

- [23-answer.txt](./23-answer.txt): Tuple or not?

  ```python
  a = (1, )
  ```
  Is a a tuple? Answer with Yes or No.

- [24-answer.txt](./24-answer.txt): What does this script print?

  ```python
  a = (1)
  b = (1)
  a is b
  ```

- [25-answer.txt](./25-answer.txt): What does this script print?

  ```python
  a = (1, 2)
  b = (1, 2)
  a is b
  ```

- [26-answer.txt](./26-answer.txt): What does this script print?

  ```python
  a = ()
  b = ()
  a is b
  ```
- [27-answer.txt](./27-answer.txt): Still the same?

  ```bash
  >>> id(a)
  139926795932424
  >>> a
  [1, 2, 3, 4]
  >>> a = a + [5]
  >>> id(a)
  ```
  Will the last line of this script print 139926795932424? Answer with Yes or No.

- [28-answer.txt](./28-answer.txt): Same or not?

  ```bash
  >>> a
  [1, 2, 3]
  >>> id (a)
  139926795932424
  >>> a += [4]
  >>> id(a)
  ```
  Will the last line of this script print 139926795932424? Answer with Yes or No.

## Advanced Tasks

- [100-magic_string.py](./100-magic_string.py): Write a function `magic_string()` that returns a string “BestSchool” n times the number of the iteration (see code):
  - Format: see example
  - Your file should be maximum 4-line long (no documentation needed)
  - You are not allowed to import any module

  ```bash
  guillaume@ubuntu:~/0x09$ cat 100-main.py
  #!/usr/bin/python3
  magic_string = __import__('100-magic_string').magic_string
  
  for i in range(10):
      print(magic_string())
  
  guillaume@ubuntu:~/0x09$ ./100-main.py | cat -e
  BestSchool$
  BestSchool, BestSchool$
  BestSchool, BestSchool, BestSchool$
  BestSchool, BestSchool, BestSchool, BestSchool$
  BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
  BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
  BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
  BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
  BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
  BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
  guillaume@ubuntu:~/0x09$ wc -l 100-magic_string.py 
  4 100-magic_string.py
  guillaume@ubuntu:~/0x09$ 
  ```

- [101-locked_class.py](./101-locked_class.py): Write a `class LockedClass` with no class or object attribute, that prevents the user from dynamically creating new instance attributes, except if the new instance attribute is called `first_name`.
  - You are not allowed to import any module

  ```bash
  guillaume@ubuntu:~/0x09$ cat 101-main.py
  #!/usr/bin/python3
  LockedClass = __import__('101-locked_class').LockedClass
  
  lc = LockedClass()
  lc.first_name = "John"
  try:
      lc.last_name = "Snow"
  except Exception as e:
      print("[{}] {}".format(e.__class__.__name__, e))
  
  guillaume@ubuntu:~/0x09$ ./101-main.py
  [AttributeError] 'LockedClass' object has no attribute 'last_name'
  guillaume@ubuntu:~/0x09$ 
  ```

- [103-line1.txt](./103-line1.txt):

  ```bash
  julien@ubuntu:/python3$ cat int.py 
  a = 1
  b = 1
  julien@ubuntu:/python3$ 
  ```
Assuming we are using a CPython implementation of Python3 with default options/configuration:
  - How many int objects are created by the execution of the first line of the script? (103-line1.txt)
  - How many int objects are created by the execution of the second line of the script (103-line2.txt)

- [104-line1.txt](./104-line1.txt):

  ```bash
  julien@ubuntu:/python3$ cat int.py 
  a = 1024
  b = 1024
  del a
  del b
  c = 1024
  julien@ubuntu:/python3$ 
  ```
Assuming we are using a CPython implementation of Python3 with default options/configuration:
  - How many int objects are created by the execution of the first line of the script? (104-line1.txt)
  - How many int objects are created by the execution of the second line of the script (104-line2.txt)
  - After the execution of line 3, is the int object pointed by a deleted? Answer with Yes or No (104-line3.txt)
  - After the execution of line 4, is the int object pointed by b deleted? Answer with Yes or No (104-line4.txt)
  - How many int objects are created by the execution of the last line of the script (104-line5.txt)

- [105-line1.txt](./105-line1.txt):

  ```bash
  julien@twix:/tmp/so$ cat int.py 
  print("I")
  print("Love")
  print("Python")
  julien@ubuntu:/tmp/so$ 
  ```
Assuming we are using a CPython implementation of Python3 with default options/configuration:
  - Before the execution of line 2 (print("Love")), how many int objects have been created and are still in memory? (105-line1.txt)
  - Why? (optional blog post :))
  - **Hint:** NSMALLPOSINTS, NSMALLNEGINTS

- [106-line1.txt](./106-line1.txt):

  ```bash
  guillaume@ubuntu:/python3$ cat string.py 
  a = "SCHL"
  b = "SCHL"
  del a
  del b
  c = "SCHL"
  guillaume@ubuntu:/python3$ 
  ```
Assuming we are using a CPython implementation of Python3 with default options/configuration (For answers with numbers use integers, don’t spell out the word):
  - How many string objects are created by the execution of the first line of the script? (106-line1.txt)
  - How many string objects are created by the execution of the second line of the script (106-line2.txt)
  - After the execution of line 3, is the string object pointed by a deleted? Answer with Yes or No (106-line3.txt)
  - After the execution of line 4, is the string object pointed by b deleted? Answer with Yes or No (106-line4.txt)
  - How many string objects are created by the execution of the last line of the script (106-line5.txt)
