const lst = document.querySelector("ul");

const inpt = document.querySelector("input");

const btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    let formInput = inpt.value;

    inpt.value = "";

    const listItem = document.createElement("li");

    const span = document.createElement("span");

    const button = document.createElement("button");

    listItem.appendChild(span);
    listItem.appendChild(button);

    span.textContent = formInput;

    button.textContent = "Delete";

    lst.appendChild(listItem);

    button.addEventListener("click", () => listItem.remove());

    inpt.focus();
});