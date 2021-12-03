// const curDate = new Date().toLocaleDateString();
// module.exports.date = curDate;

// module.exports.getLog = (name) => {
//   const hour = new Date().getHours();
//   if (hour > 20) {
//     return `пора ужинать, ${name}`;
//   } else if (hour > 14) {
//     return `пора обедать, ${name}`;
//   } else {
//     return `жди обеда, ${name}`;
//   }
// };

class User {
  constructor(name) {
    this._name = name;
  }

  date = new Date().toLocaleDateString();

  showTerminalArgs() {
      process.argv.forEach((value, i) => {
          console.log(`${i}:${value}`);
      })
  }

  getLog() {
    const hour = new Date().getHours();
    if (hour > 20) {
      return `пора ужинать, ${this._name}`;
    } else if (hour >= 14) {
      return `пора обедать, ${this._name}`;
    } else {
      return `ждиии обеда, ${global.name}`;
    }
  }
}

module.exports = User;