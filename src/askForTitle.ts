import { main } from "./app";

export function askForTitle(): Promise<string> {
  return new Promise((resolve, reject) => {
    //remove all child elements of main
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    //Enter title of quiz
    //create a <form> element
    let form = document.createElement("form");
    form.setAttribute("class", "fade-in");

    //create a <label> element
    let label = document.createElement("label");
    label.setAttribute("for", "title");
    label.textContent = "Title:";

    //create an <input> element for the title
    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("required", "");

    //create a submit button element
    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("name", "submit");
    submitButton.textContent = "Submit"
    
    //append the elements to the form
    form.appendChild(label);
    form.appendChild(titleInput);
    form.appendChild(submitButton);

    //append the form to the main element
    main.appendChild(form);

    //After submit title is equal to typed title
    form = document.querySelector("form")!;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = document.querySelector<HTMLInputElement>("#title")!.value;
      if (!title) {
        reject(console.log("No title"));
      } else {
        resolve(title);
      }
    });
  });
}
