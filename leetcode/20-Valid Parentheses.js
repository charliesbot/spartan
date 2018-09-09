/*
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
*/

const dict = {
  "(": ")",
  "{": "}",
  "[": "]"
};

const validParentheses = string => {
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    const current = string.charAt(i);
    if (dict.hasOwnProperty(current)) {
      stack.push(current);
    } else {
      if (dict[current] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
