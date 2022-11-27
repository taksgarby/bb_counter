import React, { useEffect, useState } from "react";
import { getInstructors, instructorById } from "../Services/InstructorsService.js";
import { getReporters, reporterById } from "../Services/ReportersService.js";
import { getPlaceholders, placeholderById } from "../Services/PlaceholdersService.js";
import Form from "../Components/Form.js";
import Log from "../Components/Log.js";

const Container = () => {
    const [instructors, setInstructors] = useState([]);
    const [reporters, setReporters] = useState([]);
    const [placeholders, setPlaceholders] = useState([]);

    useEffect(() => {
        getInstructors()
            .then((info) =>
                setInstructors(info))

        getReporters()
            .then((info) =>
                setReporters(info))
        
        getPlaceholders()
            .then((info) =>
                setPlaceholders(info))

    }, [])



    return (

        <div>
            <Form />
            <Log />

        </div>
    );
}

export default Container;