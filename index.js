const schedule = require("node-schedule");
var s = new Date();
console.log(s);
s.setMinutes(s.getMinutes() + 1);
console.log(s);

const jobs = {};

jobs["yoyo"] = schedule.scheduleJob(s, function () {
  console.log("task executed");
});
console.log(jobs["yoyo"]);

s.setMinutes(s.getMinutes() + 1);
console.log(s);
let y = "yoyo";
jobs["yoyo"] = schedule.scheduleJob(
  s,
  function (data) {
    console.log("task executed 1", data);
  }.bind(null, y)
);
s.setMinutes(s.getMinutes() - 0.5);
y = "hello";
jobs["lala"] = schedule.scheduleJob(
  s,
  function (data) {
    console.log("task executed 2", data);
  }.bind(null, y)
);
y = "next";
// jobs["yoyo"].reschedule(s, function () {
//   console.log("task executed");
//   console.log(new Date().toISOString());
// });
