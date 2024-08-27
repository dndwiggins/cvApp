import React, { useState } from 'react';


function PersonalDown({ name, setName, jobTitle, setJobTitle, email, setEmail }) {
    const [closed, setOpen] = useState(false); //this does not have to be shared in larger parent component 


    //how do I now share this state into the actual resume based section 

    //I want this to be an output somewhere else
    return (
        <div>
            <h1>Personal Details</h1>
            <button onClick={() => setOpen(!closed)}>
                {closed ? 'Hide Details' : 'Show More!'}
            </button>

            {closed && <PersonalDownExtra name={name} setName={setName}
                jobTitle={jobTitle} setJobTitle={setJobTitle}
                email={email} setEmail={setEmail}

            />}

        </div>
    );




}

function PersonalDownExtra({ name, setName, jobTitle, setJobTitle, email, setEmail }) {



    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleJobChange(e) {
        setJobTitle(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    return (
        <>

            <p>Full Name:</p>
            <input className="fullname" type="text " value={name} onChange={handleNameChange} />
            <p>Job Title:</p>
            <input className="jobtitle" type="text" value={jobTitle} onChange={handleJobChange} />
            <p>Email:</p>
            <input type="text" className="email" value={email} onChange={handleEmailChange} />



        </>
    )
}

function PersonalDownResume({ name, jobTitle }) {


    return (
        <>
            <div>
                <h1>{name}</h1>
                <h2>{jobTitle}</h2>
            </div>


        </>
    )
}


export { PersonalDown, PersonalDownExtra, PersonalDownResume }