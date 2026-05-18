# Todo Application

A fully functional Todo application that allows users to manage their daily tasks with data persistence using the browser's localStorage API.

---

## 📸 Preview

> Clean todo app with burgundy background and white card

---

## ✨ Features

### Core Features

- Add new tasks by typing and clicking the Add button
- Add tasks by pressing the Enter key
- Mark tasks as complete with a visual checkbox
- Delete individual tasks with a trash icon
- Filter tasks by All, Active or Completed
- Clear all completed tasks at once
- Task count updates automatically as tasks are added or completed

### Data Persistence

- All tasks are saved to localStorage automatically
- Tasks remain after page refresh or browser restart
- No backend or database required

---

## 🧠 How It Works

### The Task Object

Every task is stored as a JavaScript object with three properties:

```javascript
{
  id: 1715000000000,    // Unique timestamp ID
  text: "Buy groceries", // The task text
  completed: false       // Whether task is done or not
}
```

### The Tasks Array

All task objects are stored inside a JavaScript array:

```javascript
let tasks = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Learn JavaScript", completed: true },
];
```

### localStorage

The tasks array is saved to localStorage as a string using `JSON.stringify()` and read back using `JSON.parse()`. This is how tasks survive page refreshes.

### Event Delegation

Instead of adding an event listener to every task (which would be inefficient and break for dynamically created tasks), one single event listener is added to the parent task list. It then checks which child element was clicked.

---

## 📐 JavaScript Concepts Demonstrated

| Concept                 | How It Was Used                                                 |
| ----------------------- | --------------------------------------------------------------- |
| DOM Manipulation        | Creating and updating task elements dynamically                 |
| Event Listeners         | Listening for button clicks and key presses                     |
| Event Delegation        | Single listener on parent for all task interactions             |
| Array Methods           | `push()` to add, `filter()` to remove, `find()` to locate tasks |
| localStorage            | Saving and loading tasks across page refreshes                  |
| JSON                    | Converting array to string and back for storage                 |
| Template Literals       | Building HTML strings dynamically                               |
| data attributes         | Storing task IDs on HTML elements                               |
| Intersection of Classes | Adding and removing CSS classes for visual feedback             |

---

## 🎨 Design Decisions

- **Color scheme:** Burgundy `#6D001A` background with white card — bold, clean contrast
- **Typography:** Lato — clean and readable sans-serif font
- **Empty state:** A clipboard icon with "No tasks here!" message when no tasks exist
- **Delete button:** Hidden by default, appears on hover — keeps the interface clean
- **Active filter:** Underlined with burgundy color to show current filter

---

## 🛠️ Technologies Used

| Technology   | Purpose                                   |
| ------------ | ----------------------------------------- |
| HTML5        | Page structure                            |
| CSS3         | Styling and transitions                   |
| JavaScript   | App logic, DOM manipulation, localStorage |
| Font Awesome | Icons (trash, clipboard)                  |
| Google Fonts | Lato typography                           |

---

## 📂 File Structure

task-2-todo-app/
├── index.html → App structure
├── script.js → All JavaScript logic
└── css/
├── variables.css → CSS custom properties
└── style.css → Main styles

---

## 👨‍💻 Author

**Oluwasegun Opeyemi Solomon**  
Lagos, Nigeria  
[github.com/solotechrics](https://github.com/solotechrics)
