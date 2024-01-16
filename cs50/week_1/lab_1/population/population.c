#include "population.h"

int main(void)
{
    // Prompt for start size
    int start;
    do
    {
        start = get_int("Start size: ");
    }
    while (start < 9);

    // Prompt for end size
    int end;
    do
    {
        end = get_int("End size: ");
    }
    while (end < start);

    // Calculate number of years until we reach threshold
    int years = get_years(start, end);

    // Print number of years
    printf("Years: %i\n", years);
}

int get_years(int start, int end)
{
    int years = 0;
    int ending_population = 0;
    int starting_population = start;

    if (start == end)
    {
      return years;
    }

    while(ending_population < end) {
      int born = starting_population / 3;
      int dead = starting_population / 4;

      ending_population = starting_population + born - dead;
      starting_population = ending_population;
      years++;
    }

    return years;
}

int get_int(char prompt[])
{
  int number;

  printf("%s", prompt);
  scanf("%d", &number);

  return number;
}
