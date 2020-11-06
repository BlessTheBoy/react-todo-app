import React, {useEffect, useState} from 'react'

function Number(props) {
    const [number, setNumber] = useState(0)
    useEffect(() => {
        setNumber(0)
        let i = 0
        props.todos.forEach(todo => {
            if (!todo.completed) i++
        })
        setNumber(i);
    }, [props])
    return (
        <div>
            {number}
        </div>
    )
}

export default Number
