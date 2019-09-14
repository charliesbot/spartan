const stringCompression = word => {
  let queue = [];
  let result = "";
  let i = 0;
  while (queue.length > 0 || i < word.length) {
    const current = word[i];
    const last = queue[queue.length - 1];

    if (last && last !== current) {
      result += `${last}${queue.length}`;
      queue = [];
    }

    if (current) {
      queue.push(current);
    }

    i++;
  }

  return result.length > word.length ? word : result;
};

const test = "ccabbbbaaaaaacc";

console.log(stringCompression(test));
