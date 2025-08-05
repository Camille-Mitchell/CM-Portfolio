function handleFormSubmit(event) {
    event.preventDefault();
    const footerSection = document.querySelector("#footersection");
    
    const nameValue= event.target.name.value;
    const emailValue= event.target.email.value;
    const messageValue= event.target.message.value;
    const newElement = document.createElement("section");
    newElement.innerHTML = `
    <p> User's Name: ${nameValue} </p>
    <p>User's Email: ${emailValue}</p>
    <p>User's Message: ${messageValue} </p>`;
    footerSection.appendChild(newElement);
    event.target.reset();
}

const Form= document.querySelector(".form1 form")
Form.addEventListener("submit",handleFormSubmit);

function darkLightMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

document.getElementById("dark").onclick=darkLightMode;