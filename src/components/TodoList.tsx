import React from 'react'
import { Todo } from './model'
import SingleTodo from './SingleTodo'
import "./style.css"


type Props = {
    state: Todo[],
    setState: React.Dispatch<React.SetStateAction<Todo[]>>
}
export default function TodoList({ state, setState }: Props) {
    return (

        <div className="todos">
            {
                state?.map((data) => (
                    <SingleTodo
                        state={state}
                        todo={data}
                        key={data.id}
                        setState={setState}
                    />
                ))
            }
        </div>
    )
}
