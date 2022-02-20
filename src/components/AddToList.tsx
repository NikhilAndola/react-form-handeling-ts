import React, { useState } from 'react'
import styles from './AddToList.module.css'
import {IState as Props} from "../App"

export interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

const [input, setInput] = useState({
    name:"",
    age:"",
    note: "",
    img:"",
})

console.log("🚀 ~ file: AddToList.tsx ~ line 7 ~ AddToList ~ input", input)


const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>): void => {
    setInput({...input, [e.target.name]: e.target.value })
}

const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        if(!input.name || !input.age || !input.img){
            return
        }else{
            setPeople([ 
                ...people,
                {
                    name: input.name,
                    age: parseInt(input.age),
                    url: input.img,
                    note: input.note
                }
        ])
        setInput({ 
                    name:"",
                    age:"",
                    note: "",
                    img:"",
                })
        }
}

    return (
    <div className={styles.formBox}>
        <input
        className={styles.Input}
        type="text"
        placeholder="Name"
        name="name"
        value={input.name}
        onChange={handleChange}
        />
        <input
        className={styles.Input}
        type="number"
        placeholder="age"
        name="age"
        value={input.age}
        onChange={handleChange}
        />
        <input
        className={styles.Input}
        type="text"
        placeholder="img"
        name="img"
        value={input.img}
        onChange={handleChange}
        />
        <textarea 
        className={styles.Input}
        placeholder="Notes"
        name="note"
        value={input.note}
        onChange={handleChange}
        ></textarea>
        <button 
        type="submit"
        className={styles.button}
        onClick={handleClick}
        >
        Add to list
        </button>
    </div>
  )
}

export default AddToList