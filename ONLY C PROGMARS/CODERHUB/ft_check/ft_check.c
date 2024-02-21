#include<stdio.h>
#include <stdbool.h>

int ft_strlen(char *str)
{
	int i = 0;
	while (str[i])
		i++;
	return (i);
}

bool ft_check(char *s1, char *s2)
{
	int i = ft_strlen(s1) - 1;
	int j = ft_strlen(s2) - 1;
	if ((s1[i] == s2[j]) && (s1[i - 1] == s2[j - 1]))
		return true;
	return false;
}

int main ()
{
	char s1[] = "abc";
	char s2[] = "abcc";
	printf("%s\n", ft_check(s1, s2) ? "true" : "false");
}
