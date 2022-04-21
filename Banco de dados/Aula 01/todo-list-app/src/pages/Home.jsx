import { TodoListItem } from '../components/TodoListItem'
import './Home.css'

export function Home() {
    const itemArray = [
        { id:1, text: "Acordar 7 horas da manhã", checked: false},
        { id:2, text: "Lavar toda louça suja", checked: false},
        { id:3, text: "Passear com os pets por 30 minutos", checked: false},
        { id:4, text: "Lavar todo carro", checked: false}
    ];

    localStorage.setItem("abc", "Oi, Tudo bem?")
    sessionStorage.setItem("def", "Yes")

    return (
        <div className="container">
            {itemArray.map(({id, text, checked}) => {
            {/* {itemArray.map((obj) => { */}
                return <TodoListItem id={id} text={text} key={id} checked={checked}/>
            })}
        </div>
    )
}