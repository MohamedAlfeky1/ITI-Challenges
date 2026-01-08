class GamePlan {
  constructor() {
    if (new.target === GamePlan) {
      throw new Error("You cannot instantiate an abstract class directly.");
    }
  }

  executeStrategy() {
    throw new Error("executeStrategy() must be implemented in the subclass.");
  }
}

class AttackStrategy extends GamePlan {
  executeStrategy() {
    console.log("Playing in Attack Mode: High pressing, fast movement.");
  }
}

class DefenseStrategy extends GamePlan {
  executeStrategy() {
    console.log("Playing in Defense Mode: Stay back, close spaces.");
  }
}

class MediumStrategy extends GamePlan {
  executeStrategy() {
    console.log("Playing in Balanced Mode: Normal pressure, stable play.");
  }
}

class FootballTeam {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  play() {
    this.strategy.executeStrategy();
  }
}

const team = new FootballTeam();

team.setStrategy(new DefenseStrategy());
team.play(); // Attack Mode

team.setStrategy(new DefenseStrategy());
team.play(); // Defense Mode

team.setStrategy(new MediumStrategy());
team.play(); // Balanced Mode
