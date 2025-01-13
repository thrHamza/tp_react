import StudentItem from "./StudentItem";
import FilterBox from "./FilterBox";
import {useState} from "react";

const students = [
    {
        id: 1,
        firstName: 'Test',
        lastName: '1',
    },
    {
        id: 2,
        firstName: 'Test',
        lastName: '2',
    },
    {
        id: 3,
        firstName: 'Test',
        lastName: '3',
    },
    {
        id: 4,
        firstName: 'Test',
        lastName: '4',
    }
]

export default function StudentList(){

    const [search, setSearch] = useState('')

    return(
        <div className="px-3">

            <FilterBox
                className='mb-3'
                onFilter={(value) => setSearch(value)}
            />

            <div className='list-group'>
                {students
                    .filter(s => s.firstName.includes(search) || s.lastName.includes(search))
                    .map((student, index) => <StudentItem
                        customClass='list-group-item'
                        style={{backgroundColor: index % 2 ? 'Gray' : '#eee'}}
                        key={student.id}
                        student={student} />
                )}
            </div>

        </div>
    )
}