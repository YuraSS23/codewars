/* Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

Solution*/

function validateUsr(username) {
    return username === username.toLowerCase() && username.indexOf(" ") === -1 && username.length > 3 && username.length < 17
  }