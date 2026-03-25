let students = require("../data/students");

exports.getStudents = (req, res) => {
    res.json(students);
};

exports.addStudent = (req, res) => {
    students.push(req.body);
    res.json({ message: "Student added" });
};

exports.updateStudent = (req, res) => {
    let id = req.params.id;

    students = students.map(s =>
        s.id == id ? req.body : s
    );

    res.json({ message: "Student updated" });
};

exports.deleteStudent = (req, res) => {
    let id = req.params.id;

    students = students.filter(s => s.id != id);

    res.json({ message: "Student deleted" });
};