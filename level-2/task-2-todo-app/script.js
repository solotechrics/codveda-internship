"use strict";

// ===== STEP 1 — Grab all elements =====
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("btn");
const taskList = document.querySelector(".task-list");
const taskCount = document.getElementById("task-count");
const filterBtns = document.querySelectorAll(".filter-btn");
const clearCompletedBtn = document.querySelector(".tasks-footer button");

// ===== STEP 2 — Tasks array and current filter =====
let tasks = [];
let currentFilter = "all";

// ===== STEP 3 — Load tasks from localStorage =====
// When page load, we check if any tasks dey saved before
function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  // If tasks dey saved, parse am from string back to array
  // If nothing dey saved, use empty array
  tasks = savedTasks ? JSON.parse(savedTasks) : [];
}

// ===== STEP 4 — Save tasks to localStorage =====
// Every time tasks change, we save am to localStorage
function saveTasks() {
  // localStorage only store strings, so we convert array to string
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ===== STEP 5 — Generate unique ID for each task =====
// We use Date.now() — it returns current timestamp in milliseconds
// E.g 1715000000000 — this go always be unique
function generateId() {
  return Date.now();
}

// ===== STEP 6 — Update task count =====
// Count how many active (not completed) tasks dey remaining
function updateTaskCount() {
  const activeTasks = tasks.filter((task) => !task.completed);
  taskCount.textContent = `${activeTasks.length} task${activeTasks.length !== 1 ? "s" : ""} left`;
}

// ===== STEP 7 — Render tasks to the screen =====
// This function go display tasks based on current filter
function renderTasks() {
  // First clear the task list
  taskList.innerHTML = "";

  // Filter tasks based on currentFilter
  let filteredTasks = tasks;

  if (currentFilter === "active") {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (currentFilter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  // If no tasks dey, show empty state
  if (filteredTasks.length === 0) {
    taskList.innerHTML = `
      <div class="empty-state">
        <i class="fa-regular fa-clipboard"></i>
        <p>No tasks here!</p>
      </div>
    `;
    updateTaskCount();
    return;
  }

  // Loop through filtered tasks and create HTML for each one
  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("task-item");

    li.innerHTML = `
      <div class="task-checkbox ${task.completed ? "checked" : ""}" data-id="${task.id}"></div>
      <span class="task-text ${task.completed ? "completed" : ""}">${task.text}</span>
      <button class="delete-btn" data-id="${task.id}">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    taskList.appendChild(li);
  });

  // Update the task count
  updateTaskCount();
}

// ===== STEP 8 — Add new task =====
function addTask() {
  // Get the value from input and remove extra spaces
  const text = taskInput.value.trim();

  // If input empty, do nothing
  if (text === "") return;

  // Create new task object
  const newTask = {
    id: generateId(),
    text: text,
    completed: false,
  };

  // Add new task to array
  tasks.push(newTask);

  // Save to localStorage
  saveTasks();

  // Clear the input
  taskInput.value = "";

  // Re-render tasks
  renderTasks();
}

// ===== STEP 9 — Toggle task complete =====
function toggleTask(id) {
  // Find the task with matching id
  const task = tasks.find((task) => task.id === id);

  // Flip completed from false to true or true to false
  if (task) {
    task.completed = !task.completed;
  }

  // Save and re-render
  saveTasks();
  renderTasks();
}

// ===== STEP 10 — Delete task =====
function deleteTask(id) {
  // Remove task with matching id from array
  tasks = tasks.filter((task) => task.id !== id);

  // Save and re-render
  saveTasks();
  renderTasks();
}

// ===== STEP 11 — Clear all completed tasks =====
function clearCompleted() {
  // Keep only tasks wey no complete
  tasks = tasks.filter((task) => !task.completed);

  // Save and re-render
  saveTasks();
  renderTasks();
}

// ===== STEP 12 — Event Listeners =====

// Add task when button clicked
addBtn.addEventListener("click", addTask);

// Add task when Enter key pressed
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Handle checkbox and delete clicks inside task list
// We use EVENT DELEGATION — one listener for all tasks
// Because tasks dey created dynamically, we listen on the parent
taskList.addEventListener("click", function (e) {
  // Check if person clicked checkbox
  if (e.target.classList.contains("task-checkbox")) {
    const id = Number(e.target.dataset.id);
    toggleTask(id);
  }

  // Check if person clicked delete button or trash icon
  if (
    e.target.classList.contains("delete-btn") ||
    e.target.closest(".delete-btn")
  ) {
    const btn = e.target.closest(".delete-btn");
    const id = Number(btn.dataset.id);
    deleteTask(id);
  }
});

// Handle filter buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    // Update current filter
    currentFilter = btn.dataset.filter;

    // Re-render tasks
    renderTasks();
  });
});

// Clear completed tasks
clearCompletedBtn.addEventListener("click", clearCompleted);

// ===== STEP 13 — Initialize app =====
// Load tasks from localStorage and render when page load
loadTasks();
renderTasks();
