import { Task } from '../types/todos'; 

export function countCompletedTasks(tasks: Task[]): number {
    return tasks.filter(task => task.isDone).length;
}

export function countCurrentTasks(tasks: Task[]): number {
    return tasks.filter(task => !task.isDone).length;
}

export function countTotalTasks(tasks: Task[]): number {
    return tasks.length;
}
