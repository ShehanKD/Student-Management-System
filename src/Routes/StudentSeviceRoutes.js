import Axios from "./axios";

const postStudent = (student) => {
     
    return Axios.post("/student/create_student", student);
}

const studentService = {
    postStudent
}

export default studentService;