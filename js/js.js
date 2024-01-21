document.body.style.cssText=` 
background-color:black;
margin:0;
font-family:Arial, Helvetica, sans-serif;
`;
// start header 
let Header = document.createElement("div");
Header.className = "header"
let headerLogo = document.createElement("div");
headerLogo.className = "logo"
headerLogo.innerHTML = "<h2>Taleb</h2>"
headerLogo.style.marginLeft = "20px";
headerLogo.style.color = "#97c139";
let headerMenu = document.createElement("div");
headerMenu.className = "menu"
let ul = document.createElement("ul")
ul.className = "ul"
let home = document.createElement("li")
home.innerHTML = "Home"
let about = document.createElement("li")
about.innerHTML = "About"
let contact = document.createElement("li")
contact.innerHTML = "Contact"
ul.append(home);
ul.append(about);
ul.append(contact);
headerMenu.append(ul)
document.addEventListener("DOMContentLoaded" , function(){
    document.querySelector(".ul").style.cssText = `
    list-style-type:none;
    display: flex;
    gap: 10px;
    `;
})
headerMenu.style.cssText = `
margin-right: 20px;
display: flex;
list-style-type: none;`
Header.style.cssText = `
background-color: #161616;
color:white;
height:60px;
display:flex;
justify-content: space-between;
align-items: center;`
document.body.appendChild(Header)
Header.appendChild(headerLogo)
Header.appendChild(headerMenu)
// end header
// start container
let container = document.createElement("div");
container.className="container";
container.style.cssText=`
display: flex;
flex-wrap:wrap;
flex-grow:1;
margin:10px auto ;
justify-content:center;`
for (let i = 0 ; i < 15 ; i++){
let paragraph = document.createElement("p");
paragraph.innerHTML="Product"
let dives = document.createElement("div");
dives.className="div-container";
dives.style.cssText=`
min-width: 250px;
max-width: 300px;
flex-grow:1;
margin:10px;
height:150px;
background-color:#6f6f6f;
text-align: center;
color:white;
border-radius: 10px;`
container.appendChild(dives);
dives.innerHTML=`<h2>${i+1}</h2>`;
dives.appendChild(paragraph);
}
document.body.appendChild(container);
// end container
// start footer
let footer = document.createElement("div");
footer.className="footer";
footer.style.cssText=`
height:80px;
background-color:rgb(114 157 18);
color:white;
font-size:20px;
display:flex;
justify-content:center;
align-items:center;`;
footer.innerHTML="Copyright By Taleb 2023";
document.body.appendChild(footer);
// end footer