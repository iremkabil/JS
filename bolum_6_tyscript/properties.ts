interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  private _location: Point;

  constructor(location: Point = { x: 0, y: 0 }, private _color?: string) {
    this._location = location;
  }

  travelTo(point: Point): void {
    console.log(`Taksi x: ${this._location.x} y: ${this._location.y} konumuna gidiyor.`);
  }

  get currentLocation() {
    return this._location;
  }

  set currentLocation(value: Point) {
    if (value.x < 0 || value.y < 0) {
      throw new Error('Koordinat bilgileri negatif olamaz.');
    }
    this._location = value;
  }
}

let taxiInstance: Taxi = new Taxi({ x: 2, y: 5 });
taxiInstance.travelTo({ x: 1, y: 2 });
let currentLocation = taxiInstance.currentLocation;
taxiInstance.currentLocation = { x: 2, y: 5 };
