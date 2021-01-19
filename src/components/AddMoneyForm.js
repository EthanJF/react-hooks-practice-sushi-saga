import React, {useState} from 'react'

const AddMoneyForm = (props) => {

    const [ newMoney, setNewMoney ] = useState(0)

    const handleChange = (event) => {
        setNewMoney(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addMoney(newMoney)
        setNewMoney(0)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="number" value={newMoney} onChange={handleChange}/>
            <input type="submit" value="Add More Money"/>
        </form>
    )
}

export default AddMoneyForm;