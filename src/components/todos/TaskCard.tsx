import './taskstable.css';
import { Task } from '../../types/todos'; // Import the Task type from todos.ts

interface TaskCardProps {
  task: Task;
  onToggleDone: (updatedTask: Task) => void;
}

function TaskCard({ task, onToggleDone }: TaskCardProps) {
  const handleToggleDone = () => {
    const updatedTask: Task = { ...task, isDone: !task.isDone };
    onToggleDone(updatedTask);
  };

  return (
    <div className={`task${task.isDone ? ' done' : ''}`}>
      <div className="task-info">
        <h2>{task.title}</h2>
      </div>
      <div className="task-actions">
        <button className="circular btn-delete">
          <span className="material-symbols-sharp btn-delete-icon">delete</span>
        </button>

        {task.isDone ? (
          <button className="circular btn-delete" onClick={handleToggleDone}>
            <span className="material-symbols-sharp btn-delete-icon">close</span>
          </button>
        ) : (
          <button className="circular btn-isDone" onClick={handleToggleDone}>
            <span className="material-symbols-sharp btn-isDone-icon">done</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
