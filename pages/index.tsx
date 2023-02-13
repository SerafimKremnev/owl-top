import HTag from "../components/HTag/HTag";
import Button from "../components/Button/Button";
import P from "../components/P/P";
import Rating from "../components/Rating/Rating";
import Tag from "../components/Tag/Tag";
import {useState} from "react";
import {withLayout} from "../layout/Layout";
function Home() {
    const [rating, setRating] = useState<number>(4);

    return (
    <>
        <HTag tag='h3'>Заголовок</HTag>
        <Button appearance='primary'>Button</Button>
        <Button appearance='ghost' arrow={'bottom'}>Button</Button>
        <P>Привет</P>
        <P size={'s'}>Привет</P>
        <P size={'l'}>Привет</P>
        <Rating isEditable setRating={setRating} rating={rating}/>
        <Tag size={'m'} color={'green'}>Green</Tag>
        <Tag color={'gray'}>Gray</Tag>
        <Tag color={'primary'}>Primary</Tag>
        <Tag color={'red'}>Red</Tag>
        <Tag>Ghost</Tag>
    </>
    )
}
export default withLayout(Home)
