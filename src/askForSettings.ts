import { main } from "./app";
import { Settings } from "./settings";


export function askForSettings(): Promise<Settings> {
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