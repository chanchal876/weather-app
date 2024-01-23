let form = document.querySelector("form")
let input = document.querySelector("input")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let img = document.querySelector("img")
let p = document.querySelector("p")
let h5 = document.querySelector("h5")
let h6 = document.querySelector("h6")



const searchbutton = async (e) =>{
    // console.log("submit here..")
    e.preventDefault();
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key= ffbf6309a4f64daa8e762046240701 &q=${input.value}&aqi=yes`)

    const data = await response.json();
    console.log(data)


    h1.innerText = data.current.temp_c + ` °C`;
    h2.innerText = data.location.name;
    p.innerText = data.current.condition.text;
    img.setAttribute("src", data.current.condition.icon);
    h6.innerText = data.current.humidity + ` %` + `
    humidity`;
    h5.innerText = data.current.temp_f + ` °F`
    


    reset.form();

};
form.addEventListener("submit", searchbutton)