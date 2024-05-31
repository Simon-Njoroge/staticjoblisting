const allinfo=document.querySelector(".all")

function fetchdata(){
    fetch("data.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
         const divmain=document.createElement("div")
         divmain.classList.add("personinfo")
          const div =document.createElement("div")
          div.className="leftformat"
          const imgdiv=document.createElement("div")
          imgdiv.className="img"
          imgdiv.innerHTML=`<img src="${element.logo}" alt="">`
          const textdiv=document.createElement("div")
          textdiv.classList.add("info")
          const position=document.createElement("div")
          position.classList.add("positions")
          position.innerHTML=`<p>${
            element.company
          }</p>
          <p>${element.new}</p> 
          <p>${element.featured}</p> 
          `
          textdiv.append(position)
          const hh=`<h1>${element.positioin}</h1>`
          const h1elem=document.createElement("div")
          div.classList.add("h1elem")
          h1elem.innerHTML=`<h3>${element.position}</h3>`
          const time = document.createElement("div")
          const btns=document.createElement("div")
          btns.classList.add("buttons")
          btns.innerHTML=`<button>Frontend</button>
          <button>Senior</button>
          <button>HTML</button>
          <button>CSS</button>
           <button>JavaScript</button>`
          time.classList.add("time")
          time.innerHTML=`<p>${element.postedAt}</p>
          <p>${element.contract}</p>
          <p>${element.location}</p>`
          div.append(imgdiv)
          textdiv.append(h1elem)
          textdiv.append(time)
          div.append(textdiv)
          divmain.append(div)
          divmain.append(btns)
          allinfo.append(divmain)
        });
    })
}
fetchdata()