import React, { useState } from 'react';


function PersonalDown() {
    const [closed, setOpen] = useState(false);
    const [name, setName] = useState('Dean Dwiggins12');



    return (
        <div>
            <h1>Personal Details</h1>
            <button onClick={() => setOpen(!closed)}>
                {closed ? 'Hide Details' : 'Show More!'}
            </button>

            {closed && <PersonalDownExtra name={name} setName={setName} />}

        </div>
    );




}

function PersonalDownExtra({ name, setName }) {



    function handleNameChange(e) {
        setName(e.target.value);
    }


    return (
        <>

            <p>Full Name:</p>
            <input className="fullname" type="text " value={name} onChange={handleNameChange} />
            <p>Job Title:</p>
            <input className="jobtitle" type="text" />
            <p>Telephone:</p>
            <input className="telephone" type="text" />
            <p>Email:</p>
            <input type="text" className="email" />



        </>
    )
}



export { PersonalDown, PersonalDownExtra }