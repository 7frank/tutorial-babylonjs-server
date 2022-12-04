import * as YUKA from "yuka";
import { Collectible } from "./Collectable";
import { Girl } from "./Girl";

const entityManager = new YUKA.EntityManager();

const time = new YUKA.Time();

const mixer = null;
const animations = null;

const girl = new Girl(mixer, animations);

entityManager.add(girl);

const collectible = new Collectible();
collectible.setRenderComponent(collectibleMesh, sync);
collectible.spawn();

entityManager.add(collectible);

export function animate() {
  requestAnimationFrame(animate);

  const delta = time.update().getDelta();

  entityManager.update(delta);

  console.log(girl.toJSON);
}
