
function createPicture( photoName,altValue) {
    let createPhoto=document.createElement("img")
    let createELE = document.createElement("div")
    createPhoto.src = `${photoName}.jpg`;
    createPhoto.alt = `${altValue}`;
    createPhoto.style.cssText = "width:300px;height:250px"
    let createNamePhoto = document.createElement("div")
    createNamePhoto.appendChild(document.createTextNode(altValue))
    createNamePhoto.style.cssText="font-size:25px ;color:pink ;height:50px"
    createELE.appendChild(createPhoto)
    createELE.appendChild(createNamePhoto)
    createELE.id = `${altValue}`
    createELE.className="divPhoto"
    return createELE
}

//##########################################################################################

function filter(inputValue) {
    let shoes = "shoes boots flip flopsheel heels"
    let sunGlasses = "sun sunglasses lenses rims"
    let jacket = "jacket scarf wool coat sweater  fleece raincoat "
    let Wrist = "hour hand wristwatch "
    
    if (shoes.includes(`${(inputValue).toLocaleLowerCase()}`) == true) {
        document.getElementById("btnShoes").click()
    }

    if (sunGlasses.includes(`${(inputValue).toLocaleLowerCase()}`) == true) {
        document.getElementById("btnSun").click()
    }   
    
    if (jacket.includes(`${(inputValue).toLocaleLowerCase()}`) == true) {
        document.getElementById("btnJacket").click()
    }      
    
    if (Wrist.includes(`${(inputValue).toLocaleLowerCase()}`) == true) {
        document.getElementById("btnWrist").click()
    }    
    
}

//##########################################################################################

window.onload = function () {
    for (let photoIndex = 0; photoIndex < 26; photoIndex++){
        if (photoIndex >= 0 && photoIndex<6) {
            document.getElementById("containsPictures").append(createPicture(`su${photoIndex}`,"SunGlasses"))
            continue
            
        }
        if (photoIndex >= 6 && photoIndex < 11){
            document.getElementById("containsPictures").append(createPicture(`wr${photoIndex}`,"Wristwatch"))
            continue
        }
        if (photoIndex >= 11 && photoIndex < 17) {
            document.getElementById("containsPictures").append(createPicture(`sh${photoIndex}`,"shoes"))
            continue
        }
        if (photoIndex >= 17 && photoIndex < 26) {
            document.getElementById("containsPictures").append(createPicture(`j${photoIndex}` , "Jacket"))
            continue
        }
    }
    
}

//##########################################################################################

document.body.addEventListener("click", e => {
    if (e.target.className=="btnAll" ) {
        window.location.reload()
    }

//##########################################################################################
    
    if (e.target.className == "btnJacket") {
        for (let eleNumber = (document.getElementById("containsPictures").childElementCount); eleNumber >0; eleNumber--){
            let eleToDelete = document.getElementById("containsPictures").firstElementChild
            eleToDelete.remove()
        }
        for (let photoIndex = 17; photoIndex < 26; photoIndex++){
            document.getElementById("containsPictures").append(createPicture(`j${photoIndex}` , "Jacket"))
        }
    }    

//##########################################################################################
    
    if (e.target.className == "btnSun") {
        for (let eleNumber = (document.getElementById("containsPictures").childElementCount); eleNumber >0; eleNumber--){
            let eleToDelete = document.getElementById("containsPictures").firstElementChild
            eleToDelete.remove()
        }
        for (let photoIndex = 0; photoIndex < 6; photoIndex++){
            document.getElementById("containsPictures").append(createPicture(`su${photoIndex}` , "SunGlasses"))   
        }
    }

//##########################################################################################
    
    if (e.target.className == "btnShoes") {
        for (let eleNumber = (document.getElementById("containsPictures").childElementCount); eleNumber >0; eleNumber--){
            let eleToDelete = document.getElementById("containsPictures").firstElementChild
            eleToDelete.remove()
        }
        for (let photoIndex = 11; photoIndex < 17; photoIndex++){
            document.getElementById("containsPictures").append(createPicture(`sh${photoIndex}`,"shoes"))
        }
    }

//##########################################################################################

    if (e.target.className == "btnWrist") {
        for (let eleNumber = (document.getElementById("containsPictures").childElementCount); eleNumber >0; eleNumber--){
            let eleToDelete = document.getElementById("containsPictures").firstElementChild
            eleToDelete.remove()
        }
        for (let photoIndex = 6; photoIndex < 11; photoIndex++){
            document.getElementById("containsPictures").append(createPicture(`wr${photoIndex}`,"Wristwatch"))
        }
    }

})

//##########################################################################################

document.getElementById("inputText").addEventListener("input", function () {
    filter(this.value)
})
    
//##########################################################################################

document.getElementById("btnSearch").onclick = function () {
    filter(this.value)
}
