import { main } from "./app";
import { Question } from "./question";
import { Quiz } from "./quiz";
import { Type } from "./type";

export function addQuestion(quiz: Quiz): Promise<Question> {
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

    //ask to fill question variables
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
          reject(console.log("No such type"));
      }
    });
  });
}
