import Logo from '../assets/logo.png'
import StudentImage from '../assets/studentpicture.png'
import './IDCard.css'
export default function IDCard({selectedPerson, orientation, theme,setSelectedTemplates, isPrintable}){

    /*
     handleToggle updates the parent state 'selectedTemplates'.
     It uses a unique templateId to 
     track which specific cards the user wants to print.
     */
    function handleToggle(e){
        const isChecked = e.target.checked;
        const templateId = `${orientation}-${theme}`
        
        setSelectedTemplates(prev => {
            if(isChecked){
                return [...prev,templateId];
            }
            else{
                return prev.filter(id => id !== templateId);
            }
        })
    };

    return(
        <div>
            {/* Dynamic Class Names: 
               to apply CSS based on orientation 
               (horizontal/vertical) and theme (theme1/theme2/theme3).
            */}
            <div className={`card ${orientation} ${theme}`}>
                <div className="card-header">
                    <img src={Logo} className="logo-image" alt="school logo"/>
                    <div className="school-name-address">
                        <h2>SALFORD ACADEMY</h2>
                        <p>New Baneshwor, Kathmandu</p>
                    </div>
                </div>
                <div className="card-body">
                    <img src= {StudentImage} className="student-image" alt="Students photograph" />
                    <div className="info">
                        <div className='field'>
                            <span className="label">Name</span>
                            <span className="value">{selectedPerson.name?selectedPerson.name:"N/A"}</span>
                        </div>
                        <div className='field'>
                            <span className="label">Role</span>
                            <span className="value">{selectedPerson.role?selectedPerson.role:"N/A"}</span>
                        </div>


                        {/* Conditional Logic: 
                            If the person is a Student, show academic details.
                        */}
                        {selectedPerson.role==="Student" && <div className="student-related-info">
                            <div className="field">
                                <span className="label">Roll No.</span>
                                <span className="value">{selectedPerson.roll_no?selectedPerson.roll_no:"N/A"}</span>
                            </div> 
                            
                                <div className='field'>
                                    <span className="label">Class</span>
                                    <span className="value">{selectedPerson.class?selectedPerson.class:"N/A"}</span>
                                </div>
                                <div className="field">
                                    <span className="label">Section</span>
                                    <span className="value">{selectedPerson.section?selectedPerson.section:"N/A"}</span>
                                </div>
                                
                        </div>}
                        

                        {/* Conditional Logic: 
                            If the person is NOT a student (e.g., Staff/Teacher), show Employee ID.
                        */}
                        {selectedPerson.role!=="Student" && <div className='field non-student-related-info'>
                            <span className="label">ID</span>
                            <span className="value">{selectedPerson.employee_id?selectedPerson.employee_id:"N/A"}</span>
                        </div>}
                    </div>
                </div>
                <div className="card-footer">
                </div>
            </div>

            {/* 
                This checkbox only appears in the "Preview" list (where isPrintable is true).
                It is hidden in the final PDF view or the 'templates-to-be-printed' section.
            */}
            {isPrintable && <input type="checkbox" onChange={handleToggle}/>}
        </div>
    )
}