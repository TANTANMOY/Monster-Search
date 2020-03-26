import React, { Component } from 'react'
import './card-list.styles.css.css'
import CardCom from './card-com.jsx'


 const Card = props => {
    console.log(props)
    return <div className="card-list">
     {
        props.monsters.map(monster=>  (
            <CardCom key={monster.id} monster={monster}/>
        ) )
       }

    </div>
}

export default Card