const InstructorSelect = ( {instructors} ) => {
    
    const instructorSelect = instructors.map(instructor => {
        return (
            <div key ={instructor._id}>
                
                {instructor.name}

            </div>
        )
    }) 
    
    return ( 
    <>        <h1>Instructor Select</h1>
        {instructorSelect}
        </>

     );
}
 
export default InstructorSelect;