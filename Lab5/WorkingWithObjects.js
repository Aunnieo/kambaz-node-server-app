let assignment = {
  id: "A1",
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

let module = {
  id: "M1",
  name: "Introduction to Node",
  description: "Learn the basics of Node.js",
  course: "CS5610",
};

export default function WorkingWithObjects(app) {
  // ----- ASSIGNMENT ROUTES -----

  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });

  app.get("/lab5/assignment/title", (req, res) => {
    res.send(assignment.title);
  });

  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    assignment.title = req.params.newTitle;
    res.json(assignment);
  });

  app.get("/lab5/assignment/score/:score", (req, res) => {
    assignment.score = Number(req.params.score);
    res.json(assignment);
  });

  app.get("/lab5/assignment/completed/:completed", (req, res) => {
    assignment.completed = req.params.completed === "true";
    res.json(assignment);
  });

  // ----- MODULE ROUTES -----

  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });

  app.get("/lab5/module/name", (req, res) => {
    res.send(module.name);
  });

  app.get("/lab5/module/name/:newName", (req, res) => {
    module.name = req.params.newName;
    res.json(module);
  });

  app.get("/lab5/module/description/:newDesc", (req, res) => {
    module.description = req.params.newDesc;
    res.json(module);
  });
}
