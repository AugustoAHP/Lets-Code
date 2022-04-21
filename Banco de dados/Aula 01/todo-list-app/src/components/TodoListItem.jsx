import { useState } from "react";

export function TodoListItem({ id, text, checked }) {
    const [checkedState, setCheckedState] = useState(checked);

    function changeCheckboxvalue() {
        setCheckedState(!checkedState);
    }

    return (
        <>
            <input id={`check-${id}`} type="checkbox" onChange={changeCheckboxvalue} checked={checkedState}/>
            <label htmlFor={`check-${id}`}>{ text }</label><br />
        </>
    )
}

