/* eslint-disable no-console */

class Team {
  constructor() {
    this.team = [];
  }

  add(obj) {
    this.team.push(obj);
    return this;
  }

  * [Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
    let i = 0;
    while (i < this.team.length) {
      yield { value: this.team[i], done: false };
      i += 1;
    }
  }
}

const team = new Team();

team
  .add({ obj: 1 })
  .add({ obj: 2 })
  .add({ obj: 3 })
  .add({ obj: 4 });
console.log(team);

for (const pers of team) {
  console.log(pers);
}
