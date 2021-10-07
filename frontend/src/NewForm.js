import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';

function NewForm() {
    const[inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({values,
            [name]: value,
            [title]: value,
            [date]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return(
        <form> onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name= {inputs.name || ""}
                    onChange={handleChange}
                />
            </label>
            <label> Enter the title of your post:
                <input
                    type="text"
                    name="title"
                    value={inputs.title || ""}
                    onChange={handleChange}
                />
            </label>
            <label> Enter today's date:
                <input
                    type="text"
                    name="date"
                    value={inputs.date || ""}
                    onChange={handleChange}
                />
            </label>
        </form>
    )
}


ReactDOM.render(NewForm , document.getElementById('root'));