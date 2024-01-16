#include "bulbs.h"

const int BITS_IN_BYTE = 8;

void print_bulb(int bit);
void decimal_to_binary(int decimal);

int main(void)
{
  // TODO
  string message = get_string("Message: ");

  for (int i = 0; message[i] != '\0'; i++)
  {
    decimal_to_binary(message[i]);
    printf("\n");
  }
}

void print_bulb(int bit)
{
  if (bit == 0)
  {
    // Dark emoji
    printf("\U000026AB");
  }
  else if (bit == 1)
  {
    // Light emoji
    printf("\U0001F7E1");
  }
}

void decimal_to_binary(int decimal)
{
  int binary[BITS_IN_BYTE] = {0};

  int i = 7;
  while (decimal > 0 && i >= 0)
  {
    binary[i] = decimal % 2;
    decimal /= 2;
    i--;
  }

  for (int i = 0; i <= 7; i++)
  {
    print_bulb(binary[i]);
  }
}
