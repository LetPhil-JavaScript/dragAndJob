# Simple Drag and Drop Task Manager

This is a beginner-friendly JavaScript project that demonstrates how to use the **drag and drop** API to move tasks between different containers.

## Features

- Drag and drop tasks between columns
- Prevent images inside tasks from being dragged
- Logs the drop target to the console for learning/debugging

## How It Works

- `dragstart`: triggered when a task starts being dragged
- `dragover`: allows dropping by preventing the default behavior
- `drop`: appends the dragged task to the drop target container

## Files

- `index.html` - Contains the structure for task containers and tasks
- `style.css` - Basic styling (not shown here)
- `script.js` - JavaScript logic for drag and drop behavior

## Learning Goals

This project is great for understanding:
- How `dragstart`, `dragover`, and `drop` events work
- DOM manipulation with `append()`
- Event delegation
- Preventing default behavior on images to stop accidental dragging

## Image Dragging

To keep things clean, we block the dragging of images inside tasks:

```js
images.forEach(img => img.addEventListener('dragstart', (e) => {
    e.preventDefault() 
}))
