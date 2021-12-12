import {useParams} from "react-router-dom"; //url에 포함되는 값을 사용할 때 쓰는 것
import Word, {IWord} from "./Word";
import useFetch from "../hooks/useFetch";

function Day() {

    const { day } = useParams<{ day: string }>();
    const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`)

    return(
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id} />
                ))}
                </tbody>
            </table>
        </div>

    );
}











export default Day