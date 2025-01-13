export default function StudentItem({student, style, customClass = ''}){
    return(
        <li style={style} className={customClass}>
            {student.firstName} {student.lastName}
        </li>
    )
}