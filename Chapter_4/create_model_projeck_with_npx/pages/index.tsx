import {
    Button,
    Htag,
    Paragraph,
    Tag,
    Rating
} from "../components";
import {useEffect, useState} from "react";
import {withLayout} from "../layout/HOC/HOC";


function Home() {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log('Counter: ' + counter);
        return function cleanUp() {
            console.log('Unmount')
        }
    })

    useEffect(() => {
        console.log('Mounted');

    }, [])
    const [rating, setRating] = useState<number>(4)
    return (
        <>
            <Htag tag='h1'>Counter: {counter}</Htag>
            <Htag tag='h2'>Тeстовый текст</Htag>
            <Htag tag='h3'>Тeстовый текст</Htag>
            <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка + 1</Button>
            <Button appearance='ghost' arrow='down' onClick={() => setCounter(x => x - 1)}>Кнопка -1</Button>
            <Paragraph size='l'>Большой Параграф</Paragraph>
            <Paragraph>Средний Параграф</Paragraph>
            <Paragraph size='s'>Маленький Параграф</Paragraph>
            <Tag color={"primary"} size='s'>Маленький</Tag>
            <Tag color={"ghost"} size='s'>Маленький</Tag>
            <Tag color={"red"} size='s'>Маленький</Tag>
            <Tag color={"gray"} size='s'>Маленький</Tag>
            <Tag color={"green"} href="www.figma.com" size='s'>Маленький</Tag>

            <Tag color={"primary"} size='m'>Средний</Tag>
            <Tag color={"ghost"} size='m'>Средний</Tag>
            <Tag color={"red"} size='m'>Средний</Tag>
            <Tag color={"gray"} size='m'>Средний</Tag>
            <Tag color={"green"} href="www.figma.com" size='m'>Средний</Tag>

            <Tag color={"primary"}>Большой</Tag>
            <Tag color={"ghost"}>Большой</Tag>
            <Tag color={"red"}>Большой</Tag>
            <Tag color={"gray"}>Большой</Tag>
            <Tag color={"green"} href="www.figma.com">Большой</Tag>

            <br></br>

            <Rating rating={rating} isEditable setRating={setRating}></Rating>
        </>

    )
}

export default withLayout(Home);
