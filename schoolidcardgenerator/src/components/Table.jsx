export default function Table({data}){

    return(
        <>
            <h2>Personnel Details</h2>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Employee-ID</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Roll No.</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((person,index)=>(
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.role}</td>
                            <td>{person.employee_id?person.employee_id:"N/A"}</td>
                            <td>{person.class?person.class:"N/A"}</td>
                            <td>{person.section?person.section:"N/A"}</td>
                            <td>{person.roll_no?person.roll_no:"N/A"}</td>
                        </tr>
                        )
                    )}
                </tbody>
            </table>

        </>
    )
}