interface InputData {
    userId: number;
    id: number;
    title: string;

    info: {
        desc: string,
        isActive: boolean
    }
    tags: Array<{
        name: string,
        value: number
    }>
}

interface Info {
    desc: string,
    isActive: boolean
}

interface Tag {
    name: string,
    value: number
}

interface IInputData {
    userId: number;
    id: number;
    title: string;

    info: Info
    tags: Tag[]
}