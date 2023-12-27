import { useState } from 'react'
import { SpaceCard } from '../spaceCard/spaceCard'
import { writeChanges, setListner } from '../../firebase'
import classes from './style.module.css'

export const CardsList = () => {
  const [ spacesList, setSpacesList ] = useState([])

  const handleAddSpace = () => {
    writeChanges('spaces', [...spacesList, `${spacesList.length + 1}`])
  }

  const onChange = (value) => {
    if (JSON.stringify(spacesList) !== JSON.stringify(value)) {
      setSpacesList(value)
    }
  }

  setListner('spaces', onChange)

  return (
    <div className={classes.wrapper}>
      {spacesList.map((space)=> <SpaceCard key={space} space={space} />)}
      <button className={classes.btn} onClick={handleAddSpace}>Add New Space</button>
    </div>
  )
}
