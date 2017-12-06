class Vector {
    constructor(coordinates) {
        this.coordinates = coordinates;
        this.print = () => {
            console.log(`Vector: (${this.coordinates})`);
        }
        this.equals = (otherVector) => {
            return ((this.coordinates.length === otherVector.coordinates.length) && (this.coordinates.every((element, index) => {
                return element === otherVector.coordinates[index];
            })));
        }
    }
}

let vector1 = new Vector([1, 2, 3]);
let vector2 = new Vector([1,2,3]);
let vector3 = new Vector([-1,2,3]);
vector1.print();
console.log(vector1.equals(vector2));
console.log(vector1.equals(vector3));
