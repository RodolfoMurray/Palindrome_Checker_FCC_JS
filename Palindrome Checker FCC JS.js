function palindrome(str) {
  const alphanumOnly = str
    .toLowerCase()
    .match(/[a-z0-9]/g);
  return alphanumOnly.join("") === alphanumOnly.reverse().join("");
}

palindrome("eye");