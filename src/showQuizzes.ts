import { main } from "./app";
import { Quiz } from "./quiz";
import { quizCreator } from "./quizCreator";

//Shows quizzes to play on main page from quizStorage + add button
export function showQuizzes() {
    //remove all child elements of main
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    
    const allQuizzes = Object.values(Quiz);
    Object.keys(localStorage).forEach(function(key){
        console.log(key + ": " + localStorage.getItem(key));
    });
    

    //create a <button> element
    let button = document.createElement("button");
  
    //add class and id to button
    button.setAttribute("class", "rounded fade-in");
    button.setAttribute("id", "add");
  
    //add text to the button
    button.textContent = "+";
  
    //append the button to the main element
    main.appendChild(button);
  
    document.querySelector("h1")?.addEventListener("click", showQuizzes);
    document.querySelector("#add")?.addEventListener("click", quizCreator);
  }