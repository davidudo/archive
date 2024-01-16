# 0x0D. C - Preprocessor

## Resources
- [Understanding C program Compilation Process](https://m.youtube.com/watch?v=eW5he5uFBNM)
- [Object-like Macros](https://gcc.gnu.org/onlinedocs/gcc-5.1.0/cpp/Object-like-Macros.html#Object-like-Macros)
- [Macro Arguments](https://gcc.gnu.org/onlinedocs/gcc-5.1.0/cpp/Macro-Arguments.html#Macro-Arguments)
- [Pre Processor Directives in C](https://m.youtube.com/watch?v=X6HiYbY3Uak)
- [The C Preprocessor](https://www.cprogramming.com/tutorial/cpreprocessor.html)
- [Standard Predefined Macros](https://gcc.gnu.org/onlinedocs/gcc-5.1.0/cpp/Standard-Predefined-Macros.html#Standard-Predefined-Macros)
- [include guard](https://en.m.wikipedia.org/wiki/Include_guard)
- [Common Predefined Macros](https://gcc.gnu.org/onlinedocs/gcc-5.1.0/cpp/Common-Predefined-Macros.html#Common-Predefined-Macros)

## Learning Objectives
At the end of this project, I am expected to be able to explain to anyone, without the help of Google:
- What are macros and how to use them
- What are the most common predefined macros
- How to include guard your header files

## Mandatory Tasks
- [0-object_like_macro.h](./0-object_like_macro.h): Create a header file that defines a macro named `SIZE` as an abbreviation for the token `1024`.

  ```bash
  julien@ubuntu:~/0x0c. macro, structures$ cat 0-main.c
  #include "0-object_like_macro.h"
  #include "0-object_like_macro.h"
  #include <stdio.h>
  
  /**
   * main - check the code
   *
   * Return: Always 0.
   */
  int main(void)
  {
      int s;
  
      s = 98 + SIZE;
      printf("%d\n", s);
      return (0);
  }
  julien@ubuntu:~/0x0c. macro, structures$ gcc -Wall -pedantic -Werror -Wextra -std=gnu89 0-main.c -o a
  julien@ubuntu:~/0x0c. macro, structures$ ./a 
  1122
  julien@ubuntu:~/0x0c. macro, structures$ 
  ```
- [1-pi.h](./1-pi.h): Create a header file that defines a macro named `PI` as an abbreviation for the token `3.14159265359`.

  ```bash
  julien@ubuntu:~/0x0c. macro, structures$ cat 1-main.c
  #include "1-pi.h"
  #include "1-pi.h"
  #include <stdio.h>
  
  /**
   * main - check the code
   *
   * Return: Always 0.
   */
  int main(void)
  {
      float a;
      float r;
  
      r = 98;
      a = PI * r * r;
      printf("%.3f\n", a);
      return (0);
  }
  julien@ubuntu:~/0x0c. macro, structures$ gcc -Wall -pedantic -Werror -Wextra -std=gnu89 1-main.c -o b
  julien@ubuntu:~/0x0c. macro, structures$ ./b
  30171.855
  julien@ubuntu:~/0x0c. macro, structures$ 
  ```

- [2-main.c](./2-main.c): Write a program that prints the name of the file it was compiled from, followed by a new line.
  - You are allowed to use the standard library

  ```bash
  julien@ubuntu:~/0x0c. macro, structures$ gcc -Wall -pedantic -Werror -Wextra -std=gnu89 2-main.c -o c
  julien@ubuntu:~/0x0c. macro, structures$ ./c 
  2-main.c
  julien@ubuntu:~/0x0c. macro, structures$ cp 2-main.c 02-main.c
  julien@ubuntu:~/0x0c. macro, structures$ gcc -Wall -pedantic -Werror -Wextra -std=gnu89 02-main.c -o cc
  julien@ubuntu:~/0x0c. macro, structures$ ./cc
  02-main.c
  julien@ubuntu:~/0x0c. macro, structures$ 
  ```

- [3-function_like_macro.h](./3-function_like_macro.h): Write a function-like macro `ABS(x)` that computes the absolute value of a number `x`.

  ```bash
  julien@ubuntu:~/0x0c. macro, structures$ cat 3-main.c
  #include <stdio.h>
  #include "3-function_like_macro.h"
  #include "3-function_like_macro.h"
  
  /**
   * main - check the code
   *
   * Return: Always 0.
   */
  int main(void)
  {
      int i;
      int j;
  
      i = ABS(-98) * 10;
      j = ABS(98) * 10;
      printf("%d, %d\n", i, j);
      return (0);
  }
  julien@ubuntu:~/0x0c. macro, structures$ gcc -Wall -pedantic -Werror -Wextra -std=gnu89 3-main.c -o d
  julien@ubuntu:~/0x0c. macro, structures$ ./d 
  980, 980
  julien@ubuntu:~/0x0c. macro, structures$ 
  ```

- [4-sum.h](./4-sum.h): Write a function-like macro `SUM(x, y)` that computes the sum of the numbers `x` and `y`.

  ```bash
  julien@ubuntu:~/0x0c. macro, structures$ cat 4-main.c
  #include <stdio.h>
  #include "4-sum.h"
  #include "4-sum.h"
  
  /**
   * main - check the code
   *
   * Return: Always 0.
   */
  int main(void)
  {
      int s;
  
      s = SUM(98, 1024);
      printf("%d\n", s);
      return (0);
  }
  julien@ubuntu:~/0x0c. macro, structures$ gcc -Wall -pedantic -Werror -Wextra -std=gnu89 4-main.c -o e
  julien@ubuntu:~/0x0c. macro, structures$ ./e 
  1122
  julien@ubuntu:~/0x0c. macro, structures$ 
  ```