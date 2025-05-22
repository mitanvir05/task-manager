import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Task 1",
    description: "Description for Task 1",
    tags: ["tag1", "tag2"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskUpdate, setTaskUpdate] = useState({});

  function handleAddEditTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(tasks.map((task) => (task.id === newTask.id ? newTask : task)));
    }
    setIsModalOpen(false);
  }

  function handleEditTask(task) {
    setTaskUpdate(task);
    setIsModalOpen(true);
  }

  function handleCloseClick() {
    setIsModalOpen(false);
    setTaskUpdate(null);
  }

  return (
    <section className="mb-20" id="tasks">
      {isModalOpen && (
        <AddTaskModal onSave={handleAddEditTask} taskUpdate={taskUpdate} onCloseClick={handleCloseClick}/>
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setIsModalOpen(true)} />
          <TaskList tasks={tasks} onEdit={handleEditTask} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
