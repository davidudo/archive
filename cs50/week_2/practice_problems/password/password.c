#include "password.h"

bool valid(string password);

int main(void)
{
  string password = get_string("Enter your password: ");
  if (valid(password))
  {
    printf("Your password is valid!\n");
  }
  else
  {
    printf("Your password needs at least one uppercase letter, lowercase "
           "letter, number and symbol\n");
  }
}

// TODO: Complete the Boolean function below
bool valid(string password)
{
  bool has_upper = false;
  bool has_lower = false;
  bool has_number = false;
  bool has_symbol = false;

  for (int i = 0; password[i] != 0; i++)
  {
    if (isupper(password[i]))
    {
      has_upper = true;
    }
    else if (islower(password[i]))
    {
      has_lower = true;
    }
    else if (ispunct(password[i]))
    {
      has_symbol = true;
    }
    else if (isdigit(password[i]))
    {
      has_number = true;
    }
  }

  bool good_password = has_upper && has_lower && has_number && has_symbol;

  if (good_password)
  {
    return true;
  }

  return false;
}
