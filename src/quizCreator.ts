import { main } from "./app";
import { Question } from "./question";
import { Quiz } from "./quiz";
import { Settings } from "./settings";
import { Type } from "./type";

export async function quizCreator() {
  //create new quiz
  let quiz = new Quiz(await askForTitle(), await askForSettings());
  await addQuestion(quiz);

  //create a <p> element
  let p = document.createElement("p");
  p.textContent = "Do you want to add question?";

  //create a button for ending the quiz
  let endButton = document.createElement("button");
  endButton.setAttribute("id", "end");
  endButton.textContent = "End";

  //create a button for adding one more question
  let oneMoreButton = document.createElement("button");
  oneMoreButton.setAttribute("id", "oneMore");
  oneMoreButton.textContent = "One more";

  //append the elements to main
  main.appendChild(p);
  main.appendChild(endButton);
  main.appendChild(oneMoreButton);
  while (true) {}
}

function askForTitle(): Promise<string> {
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

    //create a submit <input> element
    let submitInput = document.createElement("input");
    submitInput.setAttribute("type", "submit");

    //append the elements to the form
    form.appendChild(label);
    form.appendChild(titleInput);
    form.appendChild(submitInput);

    //append the form to the main element
    main.appendChild(form);

    //After submit title is equal to typed title
    form = document.querySelector("form")!;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = document.querySelector<HTMLInputElement>("#title")!.value;
      if (!title) {
        reject("Title is required.");
      } else {
        resolve(title);
      }
    });
  });
}

function askForSettings(): Promise<Settings> {
  return new Promise((resolve, reject) => {
    //Quiz settings
    //remove all child elements of main
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }

    //create a <form> element
    let form = document.createElement("form");
    form.setAttribute("class", "fade-in");

    //create a <fieldset> element
    let fieldset = document.createElement("fieldset");

    //create a <legend> element
    let legend = document.createElement("legend");
    legend.textContent = "Settings";

    //create input element for negative points
    let option1 = document.createElement("input");
    option1.setAttribute("type", "checkbox");
    option1.setAttribute("id", "option1");
    option1.setAttribute("name", "option");

    //create a label for negative points
    let labelOption1 = document.createElement("label");
    labelOption1.setAttribute("for", "option1");
    labelOption1.textContent = "Negative points";

    //create input element for time limit
    let option2 = document.createElement("input");
    option2.setAttribute("type", "number");
    option2.setAttribute("id", "option2");
    option2.setAttribute("name", "option");
    option2.setAttribute("min", "0");
    option2.setAttribute("max", "600");
    option2.setAttribute("value", "0");

    //create a label for time limit
    let labelOption2 = document.createElement("label");
    labelOption2.setAttribute("for", "option2");
    labelOption2.textContent = "Time limit in s(0=unlimited)";

    //create input element for randomise questions
    let option3 = document.createElement("input");
    option3.setAttribute("type", "checkbox");
    option3.setAttribute("id", "option3");
    option3.setAttribute("name", "option");

    //create a label for randomise questions
    let labelOption3 = document.createElement("label");
    labelOption3.setAttribute("for", "option3");
    labelOption3.textContent = "Randomise questions";

    //create input element for randomise answers
    let option4 = document.createElement("input");
    option4.setAttribute("type", "checkbox");
    option4.setAttribute("id", "option4");
    option4.setAttribute("name", "option");

    //create a label for randomise answers
    let labelOption4 = document.createElement("label");
    labelOption4.setAttribute("for", "option4");
    labelOption4.textContent = "Randomise answers";

    //create input element for disable previous questions
    let option5 = document.createElement("input");
    option5.setAttribute("type", "checkbox");
    option5.setAttribute("id", "option5");
    option5.setAttribute("name", "option");

    //create a label for disable previous questions
    let labelOption5 = document.createElement("label");
    labelOption5.setAttribute("for", "option5");
    labelOption5.textContent = "Disable previous questions";

    //create a submit input element
    let submitInput = document.createElement("input");
    submitInput.setAttribute("type", "submit");
    //append the elements to the fieldset
    fieldset.appendChild(legend);
    fieldset.appendChild(option1);
    fieldset.appendChild(labelOption1);
    fieldset.appendChild(document.createElement("br"));
    fieldset.appendChild(option2);
    fieldset.appendChild(labelOption2);
    fieldset.appendChild(document.createElement("br"));
    fieldset.appendChild(option3);
    fieldset.appendChild(labelOption3);
    fieldset.appendChild(document.createElement("br"));
    fieldset.appendChild(option4);
    fieldset.appendChild(labelOption4);
    fieldset.appendChild(document.createElement("br"));
    fieldset.appendChild(option5);
    fieldset.appendChild(labelOption5);
    fieldset.appendChild(submitInput);

    //append the fieldset to the form
    form.appendChild(fieldset);

    //append the form to the main element
    main.appendChild(form);
    //set settings
    const submit = document
      .querySelector("input[type='submit']")
      ?.addEventListener("click", () => {
        return {
          negativePoints:
            document.querySelector<HTMLInputElement>("#option1")?.checked,
          time: +document.querySelector<HTMLInputElement>("#option2")!.value,
          randomQuestions:
            document.querySelector<HTMLInputElement>("#option3")?.checked,
          randomAnswers:
            document.querySelector<HTMLInputElement>("#option4")?.checked,
          prevQuestion:
            document.querySelector<HTMLInputElement>("#option5")?.checked,
        };
      });
  });
}

function addQuestion(quiz: Quiz): Promise<Question> {
  return new Promise((resolve, reject) => {
    //remove all child elements of main
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }

    //create a <form> element
    let form = document.createElement("form");
    form.setAttribute("class", "fade-in");
    form.setAttribute("id", "question-type");

    //create a <fieldset> element
    let fieldset = document.createElement("fieldset");

    //create a <legend> element
    let legend = document.createElement("legend");
    legend.textContent = "Create question";

    //create a <label> element for question type
    let label = document.createElement("label");
    label.setAttribute("for", "type");
    label.textContent = "Type of question";

    //create a <select> element for question type
    let select = document.createElement("select");
    select.setAttribute("id", "type");
    select.setAttribute("name", "type");

    //create the options for the select element
    let option1 = document.createElement("option");
    option1.setAttribute("value", "One true");
    option1.textContent = "One true";

    let option2 = document.createElement("option");
    option2.setAttribute("value", "Many true");
    option2.textContent = "Many true";

    let option3 = document.createElement("option");
    option3.setAttribute("value", "Short answer");
    option3.textContent = "Short answer";

    let option4 = document.createElement("option");
    option4.setAttribute("value", "True/false");
    option4.textContent = "True/false";

    let option5 = document.createElement("option");
    option5.setAttribute("value", "Fill the word");
    option5.textContent = "Fill the word";

    let option6 = document.createElement("option");
    option6.setAttribute("value", "Choose from list");
    option6.textContent = "Choose from list";

    let option7 = document.createElement("option");
    option7.setAttribute("value", "Match");
    option7.textContent = "Match";

    let option8 = document.createElement("option");
    option8.setAttribute("value", "Sort");
    option8.textContent = "Sort";

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    select.appendChild(option6);
    select.appendChild(option7);
    select.appendChild(option8);

    //append the elements to the fieldset
    fieldset.appendChild(legend);
    fieldset.appendChild(label);
    fieldset.appendChild(select);
    fieldset.appendChild(document.createElement("br"));

    //append the fieldset to the form
    form.appendChild(fieldset);

    //append the form to the main element
    main.appendChild(form);
    select = document.querySelector("#type")!;
    select.addEventListener("change", () => {
      switch (select.value) {
        case "One true":
          //create a <label> element
          let newLabel = document.createElement("label");

          //create a <input> element
          let newInput = document.createElement("input");
          newInput.setAttribute("type", "text");

          //append the newLabel and newInput elements to the select element
          select.appendChild(newLabel);
          select.appendChild(newInput);
          
          const question: string = "?";
          const answers: Array<[string, boolean]> = [
            ["1", true],
            ["2", false],
            ["3", false],
            ["4", false],
          ];
          resolve(new Question(question, Type.ONE, answers));
        case "Many true":

        case "Short answer":

        case "True/false":

        case "Fill the word":

        case "Choose from list":

        case "Match":

        case "Sort":

        default:
          console.log("No such option in type select");
      }
    });
  });
}
