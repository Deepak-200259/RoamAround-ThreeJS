import Experience from "../Experience";

export default class Track {
  constructor() {
    this.experience = new Experience();
    const { scene, resources } = this.experience;
    this.scene = scene;
    this.resources = resources;
    this.trackModel = this.resources.items.World1Model;
    this.setTrack();
  }

  setTrack() {
    this.scene.add(this.trackModel.scene);
    this.trackModel.scene.scale.set(10, 10, 10);
    this.trackModel.scene.position.set(63, -0.45, 90);
  }
}
