//this is where my all my resume componenets will eventually reside 

import { PersonalDownResume } from "./personal";

function ResumeMain({ name, jobTitle }) {


    return (
        <div className="resumeMain">
            <div className="resumeHead">
                <PersonalDownResume name={name} jobTitle={jobTitle} />
            </div>

            <div className="eduResume">

            </div>

            <div className="expResume">


            </div>

        </div>
    );
}


export default ResumeMain;