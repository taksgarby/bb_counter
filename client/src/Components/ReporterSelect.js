const ReporterSelect = ({reporters}) => {

  const reporterSelect = reporters.map(reporter => {
    return (
        <div key ={reporter._id}>
            
            {reporter.name}

        </div>
    )
}) 

return ( 
<>       
 <h1>Reporter Select</h1>
    {reporterSelect}
    </>

 );
}
 
export default ReporterSelect;