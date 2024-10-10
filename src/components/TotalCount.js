import {useQuery} from "@apollo/client";
import {ALL_TODO} from "../apollo/todos";

const TotalCount = () => {
    const {data} = useQuery(ALL_TODO)

    return data?.todos && <b>Total todos: {data.todos.length}</b>
}
export default TotalCount;
