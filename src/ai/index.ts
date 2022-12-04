import * as YUKA from "yuka";
import { Collectible } from "./Collectable";
import { Girl } from "./Girl";
import { AnimationMixer, Scene, AnimationAction, AnimationClip } from "three";

const entityManager = new YUKA.EntityManager();

const time = new YUKA.Time();
const avatar = new Scene();
const mixer = new AnimationMixer(avatar);
const animations = new Map();

animations.set("IDLE", createAnimationAction(mixer, "Character_Idle"));
animations.set("WALK", createAnimationAction(mixer, "Character_Walk"));
animations.set("GATHER", createAnimationAction(mixer, "Character_Gather"));
animations.set(
  "RIGHT_TURN",
  createAnimationAction(mixer, "Character_RightTurn")
);
animations.set("LEFT_TURN", createAnimationAction(mixer, "Character_LeftTurn"));

function createAnimationAction(mixer: AnimationMixer, clip) {
  let action = mixer.clipAction(clip);

  if (!action) action = mixer.clipAction(new AnimationClip("IDLE", 1, []));

  action.play();
  action.enabled = false;

  return action;
}

const girl = new Girl(mixer, animations);

entityManager.add(girl);

const collectibleMesh = null;

function sync(entity, renderComponent) {
  console.log("sync", entity, renderComponent);
  // renderComponent.matrix.copy( entity.worldMatrix );
}

const collectible = new Collectible();
collectible.setRenderComponent(collectibleMesh, sync);
collectible.spawn();

entityManager.add(collectible);

function requestAnimationFrame(f) {
  setImmediate(() => f(Date.now()));
}

export function animate(delta0: number) {
  //requestAnimationFrame(animate);

  const delta = time.update().getDelta();

  entityManager.update(delta);

  //console.log(girl.toJSON());
  console.log(girl.position);
}
