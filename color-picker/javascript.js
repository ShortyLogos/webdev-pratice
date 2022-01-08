let defaultPageBg = "#fff8dc";
let defaultContainerBg = "#ffffff";
let defaultText = "000000";

window.addEventListener("load", () => {
    let pageBg = document.querySelector(".wrapper");
    pageBg.style.backgroundColor = defaultPageBg;
    let pageBgPicker = document.querySelector("#page-background");
    pageBgPicker.value = defaultPageBg;

    let containerBg = document.querySelector(".pick-me-a-color");
    containerBg.style.backgroundColor = defaultContainerBg;
    let containerBgPicker = document.querySelector("#container-background");
    containerBgPicker.value = defaultContainerBg;

    let infoText = document.querySelector(".info");
    let labelText = document.querySelectorAll("label");
    infoText.style.color = defaultText;
    labelText.forEach ( element => { 
        element.style.color = defaultText;
    });
    let colorTextPicker = document.querySelector("#text-color");
    colorTextPicker.value = defaultText;

    pageBgPicker.addEventListener("input", event => {
        pageBg.style.backgroundColor = event.target.value;
    })

    containerBgPicker.addEventListener("input", event => {
        containerBg.style.backgroundColor = event.target.value;
    })
    
    colorTextPicker.addEventListener("input", event => {
        infoText.style.color = event.target.value;
        labelText.forEach ( element => { 
            element.style.color = event.target.value;
        });
    })

})