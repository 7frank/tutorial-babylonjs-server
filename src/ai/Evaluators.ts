/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GoalEvaluator } from "yuka";

import { RestGoal, GatherGoal } from "./Goals";

class RestEvaluator extends GoalEvaluator {
  calculateDesirability(girl) {
    return girl.tired() === true ? 1 : 0;
  }

  setGoal(girl) {
    const currentSubgoal = girl.brain.currentSubgoal();

    if (currentSubgoal instanceof RestGoal === false) {
      girl.brain.clearSubgoals();

      girl.brain.addSubgoal(new RestGoal(girl));
    }
  }
}

class GatherEvaluator extends GoalEvaluator {
  calculateDesirability() {
    return 0.5;
  }

  setGoal(girl) {
    const currentSubgoal = girl.brain.currentSubgoal();

    if (currentSubgoal instanceof GatherGoal === false) {
      girl.brain.clearSubgoals();

      girl.brain.addSubgoal(new GatherGoal(girl));
    }
  }
}

export { RestEvaluator, GatherEvaluator };
