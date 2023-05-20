import { useState, useEffect } from 'react';
import './taskstable.css';
import TaskCard from './TaskCard';
import Swal from 'sweetalert2';
import SearchTodos from './SearchTodos';
import ReactSwitch from 'react-switch';
import { Task } from '../../types/todos'; // Import the Task type from todos.ts

function Taskstable() {
  const [tasks, setTasks] = useState<Task[]>([]); // Provide an initial value of an empty array
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [showAllTasks, setShowAllTasks] = useState(true);

  const completedTasks = tasks.filter(task => task.isDone).length;
  const currentTasks = tasks.filter(task => !task.isDone).length;
  const totalTasks = tasks.length;

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') ?? 'null');
    if (savedTasks) {
      setTasks(savedTasks);
      setFilteredTasks(savedTasks);
    }
  }, []);

  const handleAddTask = () => {
    Swal.fire({
      title: 'Enter task title',
      input: 'text',
      inputPlaceholder: 'Task title',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Add task',
      showLoaderOnConfirm: true,
      preConfirm: (taskTitle: string | null) => {
        if (!taskTitle || taskTitle.trim() === '') {
          Swal.showValidationMessage('Task title cannot be empty');
        } else {
          const newTask: Task = {
            id: Math.random().toString(),
            title: taskTitle,
            isDone: false,
          };
          setTasks([...tasks, newTask]);
          setFilteredTasks([...tasks, newTask]);
          localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
        }
      },
    });
  }


  const handleToggleDone = (updatedTask: Task) => {
    const index = tasks.findIndex((task) => task.id === updatedTask.id);
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  
  const handleSearch = (searchValue: string) => {
    if (searchValue === '') {
      setFilteredTasks(tasks);
    } else {
      const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredTasks(filteredTasks);
    }
  };
  
  const handleShowAllTasksChange = (checked: boolean) => {
    setShowAllTasks(checked);
    if (checked) {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks([]);
    }
  };
  
  
  // Determine the text to display on the toggle button based on the state of the "showAllTasks" variable
  const toggleLabel = showAllTasks ? "Hide All Tasks" : "Show All Tasks";
  
  return (
    <>
      <div className="center-div">
        <div className="tasks-table">
          <div className="header-properties">
            <div className="table-properties">
              {/* Show the number of completed, current, and total tasks */}
              <span className="btn-status">
                <span className="material-symbols-sharp">priority</span>: {completedTasks}
              </span>
              <span className="btn-status">
                <span className="material-symbols-sharp">hourglass_top</span>: {currentTasks}
              </span>
              <span className="btn-status">
                <span className="material-symbols-sharp">receipt_long</span>: {totalTasks}
              </span>
              {/* Add a search bar to allow the user to search for tasks */}
              <SearchTodos onSearch={handleSearch} />
              <div className="toggle-button">
                {/* Show the toggle button */}
                <span>{toggleLabel}</span>
                <ReactSwitch
                  checked={showAllTasks}
                  onChange={handleShowAllTasksChange}
                />
              </div>
            </div>
            <div className="header">
              {/* Add a button to allow the user to add a new task */}
              <span id="add-btn" onClick={handleAddTask}>
                <span className="material-symbols-sharp">assignment_add</span>
                &nbsp; Add Task
              </span>
            </div>
          </div>
          <div className="tasks">
            {/* Show a list of task cards for each task */}
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggleDone={handleToggleDone}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}  

export default Taskstable;
