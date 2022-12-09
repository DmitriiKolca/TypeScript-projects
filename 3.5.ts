type Point = {
    lat: number,
    long: number
}

type MaxPoint = Point & {
    z: number;
}
type StringOrNumber = string | number;


interface IPoint {
    lat: number,
    long: number
}


interface I3DPoint extends IPoint {
    z: number;
}

const PrintCoord = (coord: IPoint) => {

}

interface Itest {
    a: number;
}

interface Itest {
    b: number;
}