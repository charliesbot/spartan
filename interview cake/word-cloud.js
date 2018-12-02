/*
 * You want to build a word cloud,
 * an infographic where the size of a word
 * corresponds to how often it appears in the body of text.
*/

function worldCloud(string) {
  string = string.split(" ");
  const map = new Map();

  for (let i = 0; i < string.length; i++) {
    let current = string[i].toLowerCase();
    if (current.endsWith(".")) {
      current.splice;
    }

    if (map.has(current)) {
      const oldValue = map.get(current);
      map.set(current, oldValue + 1);
    } else {
      map.set(current, 1);
    }
  }
  return map;
}

console.log(worldCloud("Add milk and eggs, then add flour and sugar."));
