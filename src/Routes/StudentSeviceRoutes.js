import Axios from "./axios";

const postStudent = (student) => {
     
    return Axios.post("/student/create_student", student);
}

const postAdmin = (admin) => {
    return Axios.post("/student/post_admin", admin);
}

const getAllStudent = () => {
    return Axios.get("/student/get_student");
}

const deleteRow = (id) => {
    return Axios.delete("/student/delete_student/" +id)
}

const updateRow = (student) => {
    return Axios.put("/student/update_student", student)
}

const studentService = {
    postStudent,
    postAdmin,
    getAllStudent,
    deleteRow,
    updateRow
}

export default studentService;