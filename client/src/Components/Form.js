import InstructorSelect from "./InstructorSelect";
import PlaceholderSelect from "./PlaceholderSelect";
import ReporterSelect from "./ReporterSelect";

const Form = ( {instructors}, {reporters}, {placeholders}) => {
    return ( 
        <div>
            <h1>This is Form</h1>
            <InstructorSelect instructors = {instructors} />
            <PlaceholderSelect />
            <ReporterSelect />
        </div>
     );
}
 
export default Form;