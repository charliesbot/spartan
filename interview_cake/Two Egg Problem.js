/*
 * A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking.
 *
 * If an egg is dropped from above that floor, it will break.
 * If it is dropped from that floor or below, it will be completely undamaged and you can drop the egg again.
 *
 * Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible.
*/

function findFloor(floors) {
  let maxIndex;
  for (let i = 0; i <= floors.length; i += 9) {
    if (floors[i]) {
      maxIndex = i - 10;
      break;
    }
  }

  for (let i = maxIndex; i <= maxIndex + 10; i++) {
    if (floors[i]) {
      return i + 1;
    }
  }
}

const createFloors = crashFloor => {
  const building = [];
  for (let i = 0; i < 100; i++) {
    if (i < crashFloor - 1) {
      building.push(false);
    } else {
      building.push(true);
    }
  }
  return building;
};

const floors = createFloors(87);
console.log(findFloor(floors));
