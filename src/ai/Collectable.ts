/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GameEntity } from "yuka";

class Collectible extends GameEntity {
  spawn() {
    this.position.x = Math.random() * 150 - 75;
    this.position.z = Math.random() * 150 - 75;

    if (this.position.x < 10 && this.position.x > -10) this.position.x += 10;
    if (this.position.z < 10 && this.position.y > -10) this.position.z += 10;
  }

  handleMessage(telegram) {
    const message = telegram.message;

    switch (message) {
      case "PickedUp":
        this.spawn();
        return true;

      default:
        console.warn("Collectible: Unknown message.");
    }

    return false;
  }
}

export { Collectible };
