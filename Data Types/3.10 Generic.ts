const logTimeNumber = (num: number): number => {
    console.log(new Date());
    return num;
}

const logTimeString = (num: string): string => {
    console.log(new Date());
    return num;
}
const logTimeGeneric = <T>(num: T): T => {
    console.log(new Date());
    return num;
}

interface TimeStamp {
    stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T) {
    console.log(num.stamp);
    return num;
}