// Tasks.jsx
import { useState } from 'react';
import './tasks.css';


// Import images
import coneImage from './images/cone.jpg';
import featherImage from './images/feather.jpg';
import flagImage from './images/flag.jpg';
import flowerImage from './images/flower.jpg';
import ladyBugImage from './images/lady-bug.jpg';
import hydrantImage from './images/hydrant.jpg';
import mushroomImage from './images/mushroom.jpg';
import statueImage from './images/statue.jpg';


const Tasks = () => {
 const [tasks, setTasks] = useState([
   { id: 1, text: 'Task 1', icon: coneImage, completed: false },
   { id: 2, text: 'Task 2', icon: featherImage, completed: false },
   { id: 3, text: 'Task 3', icon: flagImage, completed: false },
   { id: 4, text: 'Task 4', icon: flowerImage, completed: false },
   { id: 5, text: 'Task 5', icon: ladyBugImage, completed: false },
   { id: 6, text: 'Task 6', icon: hydrantImage, completed: false },
   { id: 7, text: 'Task 7', icon: mushroomImage, completed: false },
   { id: 8, text: 'Task 8', icon: statueImage, completed: false }
 ]);


 const toggleCompletion = (id) => {
   setTasks(tasks.map(task =>
     task.id === id ? { ...task, completed: !task.completed } : task
   ));
 };


 return (
   <div className="tasks-container">
     <h2>Tasks</h2>
     <ul className="task-list">
       {tasks.map(task => (
         <li key={task.id} className={task.completed ? 'completed' : ''}>
           <input
             type="checkbox"
             checked={task.completed}
             onChange={() => toggleCompletion(task.id)}
           />
           <img src={task.icon} alt="Icon" />
           <span>{task.text}</span>
         </li>
       ))}
     </ul>
   </div>
 );
};


export default Tasks;


