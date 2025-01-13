import StudentList from "./StudentList";

export default function Main(props){
    return(
        <div className={props.className}>
            <StudentList />
        </div>
    )
}