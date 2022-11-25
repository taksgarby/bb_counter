import React, { useEffect, useState } from "react";
import { getInstructors, instructorById } from "../Services/InstructorsService.js";
import { getReporters, reporterById } from "../Services/ReportersService.js";
import { getPlaceholders, placeholderById } from "../Services/PlaceholdersService.js";


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

        <h2>&#x1f34c; This is the container &#x1f34c;</h2>

    );
}

export default Container;