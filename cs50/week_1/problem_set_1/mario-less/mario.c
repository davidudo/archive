#include "mario.h"

int main(void)
{
  int height = get_int("Height: ");

  while (height < 1 || height > 8)
  {
    height = get_int("Height: ");
  }

  for (int i = 0; i < height; i++)
  {
    for (int j = 1; j < height - i; j++)
    {
      printf("%s", " ");
    }

    for (int j = 0; j <= i; j++)
    {
      printf("%s", "#");
    }

    printf("\n");
  }
  printf("\n");

  return 0;
}

int get_int(char prompt[])
{
  int number;

  printf("%s", prompt);
  scanf("%d", &number);

  return number;
}
