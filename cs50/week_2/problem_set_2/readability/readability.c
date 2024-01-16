#include "readability.h"

int count_letters(string text);
int count_sentences(string text);
int count_words(string text);
bool is_whitespace(char c);

int main(void)
{
  string text;
  do
  {
    text = get_string("Text: ");
  } while (strcmp(text, "") == 0);

  float number_of_words = count_words(text);
  float number_of_letters = count_letters(text);
  float number_of_sentences = count_sentences(text);

  float L = (number_of_letters / number_of_words) * 100;
  float S = (number_of_sentences / number_of_words) * 100;

  float index = 0.0588 * L - 0.296 * S - 15.8;

  int grade = ceil(index);

  if (index < 1)
  {
    printf("Before Grade 1\n");
  }
  else if (index > 0 && index < 16)
  {
    printf("Grade %i\n", grade);
  }
  else
  {
    printf("Grade 16+\n");
  }
}

bool is_whitespace(char c)
{
  int whitespace = c == ' ' || c == '\t' || c == '\n';
  return whitespace;
}

int count_letters(string text)
{
  int letter_count = 0;

  for (int i = 0; text[i] != '\0'; i++)
  {
    bool is_upper = (text[i] > 64) && (text[i] < 91);
    bool is_lower = (text[i] > 96) && (text[i] < 123);

    if (is_upper || is_lower)
    {
      letter_count += 1;
    }
  }

  return letter_count;
}

int count_sentences(string text)
{
  int sentence_count = 0;

  for (int i = 0; text[i] != '\0'; i++)
  {
    bool question = text[i] == 63;
    bool period = text[i] == 46;
    bool exclamation = text[i] == 33;
    if (question || period || exclamation)
    {
      sentence_count += 1;
    }
  }

  return sentence_count;
}

int count_words(string text)
{
  int word_count = 0;

  for (int i = 0; text[i] != '\0'; i++)
  {
    if (is_whitespace(text[i]))
    {
      word_count += 1;
    }
  }

  return word_count + 1;
}
