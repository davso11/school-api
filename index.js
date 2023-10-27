const express = require("express");

// routes
const studentsRoutes = require("./routes/students");
const notesRoutes = require("./routes/notes");
const subjectsRoutes = require("./routes/subjects");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/students", studentsRoutes);
app.use("/notes", notesRoutes);
app.use("/subjects", subjectsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
