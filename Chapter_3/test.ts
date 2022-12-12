let a: number = 5;

const b = 'Hello World';

const c: boolean = true;

let arrow: string[] = ['first element', 'second element', 'third element'];

function Summ(a:number): string | number{
    return "Input number ${a}";
}

const multiplication = (a:number): number =>{
    return a*2;
}

let ele = arrow.map(element => element.toUpperCase())

function countCoord (coord: {lat: number, long: number | undefined}){
}
const printIt =(id: number | string)=>{
    if(typeof id === 'number'){
        console.log(id.toString());4
    }
    else
        console.log(id.toUpperCase());
}

function GetSum (a: number | number[]){
    if (Array.isArray(a)){

    }
}