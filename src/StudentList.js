import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import StudentItem from "./StudentItem";
import SearchContext from "./SearchContext";

const students = [
    {
        id: 0,
        firstName: 'Student',
        lastName: 'AA',
        classe_id: 1,
    },
    {
        id: 1,
        firstName: 'Student',
        lastName: 'AB',
        classe_id: 1,
    },
    {
        id: 2,
        firstName: 'Student',
        lastName: 'AC',
        classe_id: 1,
    },
    {
        id: 3,
        firstName: 'Student',
        lastName: 'AD',
        classe_id: 2,
    },
    {
        id: 4,
        firstName: 'Student',
        lastName: 'AE',
        classe_id: 2,
    },
    {
        id: 5,
        firstName: 'Student',
        lastName: 'AF',
    },
    {
        id: 6,
        firstName: 'Student',
        lastName: 'AG',
    },
    {
        id: 7,
        firstName: 'Student',
        lastName: 'AH',
    }
]

export default function StudentList(){
    const {search} = useContext(SearchContext)
    const params = useParams();

    let students_list = students
        .filter(std => (!params.id || params.id == std.classe_id));
    return <div
        style={{display: 'flex', flexWrap: 'wrap'}}>
        {(students_list.length>0)?students_list.filter(std =>
            std.firstName.toLowerCase().includes(search)
            || std.lastName.toLowerCase().includes(search)
        ).map((std, idx) => {
                return <StudentItem
                    customClass='list-group-item'
                    style={{backgroundColor: idx % 2 ? 'Gray' : '#eee'}}
                    key={std.id}
                    student={std}
                    index={idx}
                />
            }):(params.id?'No student found in this class':'')}

    </div>;
}