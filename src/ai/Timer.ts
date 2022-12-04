export function Timer(update: (delta: number) => void, fps: number) {
  var tickLengthMs = 1000 / fps;

  /* gameLoop related variables */
  // timestamp of each loop
  var previousTick = Date.now();
  // number of times gameLoop gets called
  var actualTicks = 0;

  var gameLoop = function () {
    var now = Date.now();

    actualTicks++;
    if (previousTick + tickLengthMs <= now) {
      var delta = (now - previousTick) / 1000;
      previousTick = now;

      update(delta);

      //   console.log(
      //     "delta",
      //     delta,
      //     "(target: " + tickLengthMs + " ms)",
      //     "node ticks",
      //     actualTicks
      //   );
      actualTicks = 0;
    }

    if (Date.now() - previousTick < tickLengthMs - 16) {
      setTimeout(gameLoop);
    } else {
      setImmediate(gameLoop);
    }
  };

  gameLoop();
}
