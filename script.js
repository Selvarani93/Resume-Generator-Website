// Adding new Work Experience field
function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
  
    weOb.insertBefore(newNode, weAddButtonOb);
  }
  
  // Adding new Academic Qualification field
  function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
  
    aqOb.insertBefore(newNode, aqAddButtonOb);
  }
  
  // Generating CV
  function generateCV() {
    let nameField = document.getElementById("nameField").value;
    let contactField = document.getElementById("contactField").value;
    let addressField = document.getElementById("addressField").value;
    let instagramField = document.getElementById("instagramField").value;
    let linkedinField = document.getElementById("linkedinField").value;
    let githubField = document.getElementById("githubField").value;
    let objectiveField = document.getElementById("objectiveField").value;
  
    let weField = document.getElementsByClassName("weField");
    let aqField = document.getElementsByClassName("aqField");
  
    let nameT1 = document.getElementById("nameT1");
    let contactT = document.getElementById("contactT");
    let addressT = document.getElementsByClassName("addressT");
    let instaT = document.getElementById("instaT");
    let linkedT = document.getElementById("linkedT");
    let ghT = document.getElementById("ghT");
    let nameT2 = document.getElementById("nameT2");
    let objectiveT = document.getElementById("objectiveT");
    let weT = document.getElementById("weT");
    let aqT = document.getElementById("aqT");
  
    nameT1.innerText = nameField;
    contactT.innerText = contactField;
    addressT.innerText = addressField;
    instaT.href = instagramField;
    linkedT.href = linkedinField;
    ghT.href = githubField;
    nameT2.innerText = nameField;
    objectiveT.innerText = objectiveField;
  
    weT.innerHTML = "";
    for (let i = 0; i < weField.length; i++) {
      let newItem = document.createElement("li");
      newItem.innerText = weField[i].value;
      weT.appendChild(newItem);
    }
  
    aqT.innerHTML = "";
    for (let i = 0; i < aqField.length; i++) {
      let newItem = document.createElement("li");
      newItem.innerText = aqField[i].value;
      aqT.appendChild(newItem);
    }
  
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
  }
  
  // Printing the generated CV
  function printCV() {
    window.print();
  }
  