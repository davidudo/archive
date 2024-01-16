#include "no-vowels.h"

string replace(string text);

int main(int argc, string argv[])
{
  while (argc != 2)
  {
    printf("Usage: ./no-vowel word\n");
    return 1;
  }

  string replaced_string = replace(argv[1]);

  printf("%s\n", replaced_string);
}

string replace(string text)
{
  for (int i = 0; text[i] != '\0'; i++)
  {
    switch (text[i])
    {
    case 'a':
      text[i] = '6';
      break;

    case 'e':
      text[i] = '3';
      break;

    case 'i':
      text[i] = '1';
      break;

    case 'o':
      text[i] = '0';
      break;
    }
  }

  return text;
}
