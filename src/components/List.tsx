import React from 'react'
import myStyle from './listStyle.module.css'
import {IState as IProps} from "../App"
  
// export const List = (props: IProps) => { 
export const List: React.FC<IProps> = ({people}) => {

    const renderList = (): JSX.Element[] => { 
        return people.map((person, index) => (
            <li key={index} className={myStyle["parent-box"]}>

                <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                    <img alt="front page" src={person.url} width="50px" height="50px"/>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p>{person.note}</p>
            
            </li>
        ))
    }

  return (
    <ul>
        {renderList()}
    </ul>
  )
}
