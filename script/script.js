const containerDiv= document.querySelector("div.container");

const team=[
    {
        nome:"Wayne Barnett",

        ruolo:"Founder & CEO",

        foto:"wayne-barnett-founder-ceo.jpg"

    },

    {
        nome:"Angela Caroll",

        ruolo:"Chief Editor",

        foto:"angela-caroll-chief-editor.jpg"

    },

    {
        nome:"Walter Gordon",

        ruolo:"Office Manager",

        foto:"walter-gordon-office-manager.jpg"                  

    },

    {
        nome:"Angela Lopez",

        ruolo:"Social Media Manager",

        foto:"angela-lopez-social-media-manager.jpg"

    },

    {
        nome:"Scott Estrada",

        ruolo:"Developer",

        foto:"scott-estrada-developer.jpg"

    },

    {
        nome:" Barbara Ramos",

        ruolo:"Graphic Designer",

        foto:"barbara-ramos-graphic-designer.jpg"

    },

];





for (let index=0; index<team.length; index++){
    const articleEl = document.createElement("article");

    const imgEl= document.createElement("img");


    const pEl= document.createElement("p"); 

    let img=team[index].foto;

   containerDiv.appendChild(articleEl);


   articleEl.appendChild(imgEl);

   articleEl.appendChild(pEl);

    pEl.append(team[index].nome , team[index].ruolo);

   imgEl.setAttribute("src","./img/" + img);

   console.log(team[index].foto)
    
      
}
