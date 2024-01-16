#include "scrabble.h"

int main(void)
{
    // Get input words from both players
    string word1 = get_string("Player 1: ");
    string word2 = get_string("Player 2: ");

    // Score both words
    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    // Print the winner
    if (score1 > score2)
    {
      printf("Player 1 wins!\n");
    }
    else if (score1 < score2)
    {
      printf("Player 2 wins!\n");
    }
    else
    {
      printf("Tie!\n");
    }
}

int compute_score(string word)
{
    // Compute and return score for string
    int points = 0;
    string upcase = to_upper(word);

    for (int i = 0; i < strlen(upcase); i++)
    {
      // char index not in range of A-Z assign zero
      if (upcase[i] < 65 || upcase[i] > 90)
      {
        points += 0;
        continue;
      }
      else {
        int index = get_index(upcase[i]);
        points += POINTS[index];
      }
    }
    return points;
}

string to_upper(string word)
{
    // Convert string to uppercase
    string upcase = word;
    for (int i = 0, n = strlen(word); i < n; i++)
    {
        upcase[i] = toupper(word[i]);
    }
    return upcase;
}

int get_index(char c)
{
    // Return index of character in points array
    int index = c - 65;
    return index;
}
