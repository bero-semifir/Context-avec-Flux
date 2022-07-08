import React from 'react'

export const UserForm = ({ user, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
            <label htmlFor="name">Nom</label>
            <input id="name" name="name" onChange={handleChange} />
            <button type="submit">Ajouter</button>
        </form>
    )
}
