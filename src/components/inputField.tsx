import React from 'react'
import "./style.css"

interface Props {
    Todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void
}
export default function InputField({ Todo, setTodo, handleAdd }: Props) {
    return (
        <>
            <form
                className="input" onSubmit={handleAdd}
            >
                <input
                    type="text"
                    placeholder="Enter Task"
                    className="inputBox"
                    value={Todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit" className="inputSubmit">
                    Add
                </button>
            </form>
        </>
    )
}
