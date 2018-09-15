/*
 * Given an array of meeting time intervals consisting of
 * start and end times [[s1,e1],[s2,e2],...] (si < ei),
 * find the minimum number of conference rooms required.
*/

var minMeetingRooms = function(intervals) {
  intervals = intervals.sort((a, b) => a.start - b.start);
  let found = false;
  const rooms = [];
  for (let i = 0; i < intervals.length; i++) {
    found = false;
    for (let j = 0; j < rooms.length; j++) {
      if (rooms[j].end <= intervals[i].start) {
        rooms[j].end = intervals[i].end;
        found = true;
        break;
      }
    }
    if (!found) {
      rooms.push(intervals[i]);
    }
  }
  return rooms.length;
};

// const times = [{ start: 13, end: 15 }, { start: 1, end: 13 }];
const times = [
  { start: 0, end: 30 },
  { start: 5, end: 10 },
  { start: 15, end: 20 }
];
console.log(minMeetingRooms(times));
