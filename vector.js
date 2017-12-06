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

        this.add = (otherVector) => {
            const sum = [];
            let index = 0;
            this.coordinates.forEach((coordinate) => {
                sum.push(coordinate + otherVector.coordinates[index]);
                index++;
            });
            return new Vector(sum);
        }

        this.subtract = (otherVector) => {
            const diff = [];
            let index = 0;
            this.coordinates.forEach((coordinate) => {
                diff.push(coordinate - otherVector.coordinates[index]);
                index++;
            });
            return new Vector(diff);
        }

        this.scalarMultiply = (multiplier) => {
            const product = [];
            this.coordinates.forEach((coordinate) => {
                product.push(coordinate * multiplier);
            });
            return new Vector(product);
        }

        this.getMagnitude = () => {
            const magnitude = Math.sqrt(this.coordinates.reduce((e, i) => {
                return e + i;
            }), 0);
            return magnitude;
        }

        this.normalize = () => {
            const magnitude = this.getMagnitude();
            return this.scalarMultiply(1 / magnitude);
        }
    }
}

let vector1 = new Vector([8.218, -9.341]);
let vector2 = new Vector([-1.129, 2.111]);

let vector3 = new Vector([7.119, 8.215]);
let vector4 = new Vector([-8.223, 0.878]);

let vector5 = new Vector([1.671, -1.012, -0.318]);

let vector6 = vector1.add(vector2);
let vector7 = vector3.subtract(vector4);

let vector8 = vector5.scalarMultiply(7.41);

vector6.print();
vector7.print();
vector8.print();

let vector9 = new Vector([1,1,1]);
console.log(vector9.getMagnitude());
console.log(vector9.normalize().coordinates);

