import { useState } from "react";
import { Home } from "../pages/Home";

export function TodoListItem({ id, text, checked, updateChecked }) {
    const [checkedState, setCheckedState] = useState(checked)
    
    function changeCheckboxValue() {
        setCheckedState(!checkedState);
        updateChecked(id, !checkedState)
    }


    return (
        <>
            <input key={`check-${id}`} type="checkbox" onChange={changeCheckboxValue} checked={checkedState}/>
            <label htmlFor={`check-${id}`}>{ text }</label><br/>
        </>
    )
}