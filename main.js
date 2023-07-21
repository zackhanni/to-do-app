window.addEventListener('Load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_element = document.querySelector("#tasks")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please input a task");
        }

        const task_element = document.createElement("div");
        task_element.classList.add("task");

        const task_content_element = document.createElement("div");
        task_content_element.classList.add("content");
        task_content_element.innerText = task;

        task_element.appendChild(task_content_element);

        list_element.appendChild(task_element);

        //26:13

        // const content_input_element = document.createElement("input");
        // content_input_element.classList.add("text");
        // content_input_element.type.add("text");
        // content_input_element.value.add(task);

        // task_content_element.appendChild(content_input_element);

    })

})