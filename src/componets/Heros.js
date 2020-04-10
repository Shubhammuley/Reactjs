import React from 'react'

function Heros({name}) {
    if(name =='Joker'){
        throw new Error('not a hero')
    }
    return (
        <div>
            {name}
        </div>
    )
}

export default Heros
