const mainDiv=document.getElementById("main")
let check="error"
let maxGrid=100
let grid=0
while(check=="error"){
    grid=window.prompt("Choose how many squares per side (max "+maxGrid+")",["30"])
    if(grid>100){
        alert("Chose a valid number")
    }else{check="ok"}}

let i=1
while(i<=grid){
    const rowDiv=document.createElement("div")
    mainDiv.appendChild(rowDiv)
    rowDiv.setAttribute("class","row"+i)
    rowDiv.style.display="flex"
    let w=1
    while(w<=grid){
        const newDiv=document.createElement("div")
        rowDiv.appendChild(newDiv)
        newDiv.setAttribute("class","div"+w)
        newDiv.addEventListener("mouseover",function(){
            this.style.backgroundColor="black"
        })
        newDiv.style.width=1/grid*100+"%"
        newDiv.style.height=900/grid+"px"
        // newDiv.style.border="3px solid red"
        w++
    }
    i++
}