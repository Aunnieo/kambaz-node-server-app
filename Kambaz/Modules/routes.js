import { v4 as uuidv4 } from "uuid";

export default function ModulesDao(db) {
  /* ================================
     FIND MODULES FOR COURSE (cid)
     ================================ */
  function findModulesForCourse(courseId) {
    return db.modules.filter((module) => module.course === courseId);
  }

  /* ================================
     CREATE MODULE
     ================================ */
  function createModule(module) {
    const newModule = {
      _id: uuidv4(),
      name: module.name,
      course: module.course, // ← THIS IS cid
      lessons: module.lessons || [],
      editing: false,
    };

    db.modules = [...db.modules, newModule];
    return newModule;
  }

  /* ================================
     DELETE MODULE
     ================================ */
  function deleteModule(moduleId) {
    const before = db.modules.length;

    db.modules = db.modules.filter((module) => module._id !== moduleId);

    return {
      status: before === db.modules.length ? "not_found" : "ok",
    };
  }

  /* ================================
     UPDATE MODULE
     ================================ */
  function updateModule(moduleId, moduleUpdates) {
    const module = db.modules.find((module) => module._id === moduleId);

    if (!module) {
      return { status: "not_found" };
    }

    // Protect immutable fields
    delete moduleUpdates._id;
    delete moduleUpdates.course;

    Object.assign(module, moduleUpdates);
    return module;
  }

  return {
    findModulesForCourse,
    createModule,
    deleteModule,
    updateModule,
  };
}
