function palindrome(str) {
  str=str.toLowerCase();
  for(let i of str)
  {
    if(!('a'<=i && i<='z')&&!('1'<=i && i<='9'))
    {
      str=str.replace(i,'');
    }
  }
  // console.log(str);

  for(let i=0;i<str.length/2;i++)
  {
    // console.log(str[i]);console.log(str[str.length])
    if(str[i]!=str[str.length-i-1])
    {
      
      return false;
    }
  }
  return true;
}

palindrome("1 eye for of 1 eye.");