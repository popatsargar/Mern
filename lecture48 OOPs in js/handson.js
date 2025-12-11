class Appliance {
  constructor({ brand, power }) {
    this.brand = brand;
    this.power = power;
  }

  turnOn() {
    console.log(`${this.brand} appliance is ON. Power: ${this.power}W`);
  }
}

class WashingMachine extends Appliance {
  constructor({ brand, power, capacity }) {
    super({ brand, power });
    this.capacity = capacity;
  }

  wash() {
    console.log(
      `${this.brand} washing clothes... Capacity: ${this.capacity}kg`
    );
  }
}

class Refrigerator extends Appliance {
  constructor({ brand, power, doors }) {
    super({ brand, power });
    this.doors = doors;
  }

  cool() {
    console.log(`${this.brand} cooling... Doors: ${this.doors}`);
  }
}

const wm = new WashingMachine({
  brand: "LG",
  power: 1500,
  capacity: 7,
});

const fridge = new Refrigerator({
  brand: "Samsung",
  power: 1200,
  doors: 2,
});

wm.turnOn();
wm.wash();

fridge.turnOn();
fridge.cool();
