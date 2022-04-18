import React from 'react'
import Character from './Character'

const ContainerChar = ({ characters }) => {
    return (
        <div>
            {
                characters.characters.map((character, i) => (
                    <Character
                        character={character}
                        key={i}
                    />
                ))
            }
        </div>
    )
}

export default ContainerChar