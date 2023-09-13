import Experience from "../Experience";

export default class Car {
  constructor() {
    this.experience = new Experience();
    const { scene, resources } = this.experience;
    this.scene = scene;
    this.resources = resources;
    this.car = this.resources.items.Car;
    this.setCar();
  }

  setCar() {
    this.scene.add(this.car.scene);
    this.car.scene.position.set(0, 0.8, 0);
    this.car.scene.rotation.set(0, -Math.PI / 2, 0);
  }
}
