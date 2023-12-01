let puppiesArr = []
const puppiesList = document.querySelector(".puppiesList")
const puppyDetail = document.querySelector(".puppyDetail")

window.addEventListener("hashchange", () => {
   render()
})

async function fetchPuppies (){
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310/players")
    const data = await response.json()
    const puppies = data.data.players
    console.log(puppies)
    puppiesArr = puppies
    render()

}

 async function render(){
    const puppyName = puppiesArr.map((puppy) => {
        return `<div><h1 class="name"><a href=#${puppy.name}>${puppy.name} <br>
                <img src="${puppy.imageUrl}">
                </h1></a></div>`
    })

    const name = window.location.hash.slice(1)
    //console.log(name)

    const singlePuppy = puppiesArr.find((puppy) => {
        return puppy.name === name
    })

    puppiesList.innerHTML = singlePuppy ? "" : "<h1> List of All Puppies</h1>" + `<div class="puppyContainer"> ${puppyName.join("")}</div.` 

    if(singlePuppy) {
        
    puppyDetail.innerHTML = `
        <h1> Single Puppy Data </h1>
        <h2> Name: ${singlePuppy.name} <br> Breed: ${singlePuppy.breed} </h2>
        <h2> Status: ${singlePuppy.status} <br>
            ID: ${singlePuppy.id}; Team ID: ${singlePuppy.teamId}; Cohort ID: ${singlePuppy.cohortId}
        </h2>
        <img src="${singlePuppy.imageUrl}"> <br><br>
        <button type="button"><a href="#">Back To All Puppies</a></button>
    `

    } else{
        puppyDetail.innerHTMl = ""
    }

 }




fetchPuppies()
