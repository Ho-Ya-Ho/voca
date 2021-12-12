import useFetch from "../hooks/useFetch"
import {Link} from "react-router-dom"

export interface IDay{
    id : number;
    day : number;
}

function Daylist() {

    const days : IDay[] = useFetch('http://localhost:3001/days');

    return(
        <div>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}



export default Daylist