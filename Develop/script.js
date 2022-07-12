
var dateHeader = document.querySelector("#currentDay")
var container = document.querySelector(".container")
var current = moment()

class Calendar {
    constructor(am9,am10,am11,pm12,pm1,pm2,pm3,pm4,pm5) {
        this.am9 = am9,
        this.am10= am10,
        this.am11 = am11,
        this.am12 = pm12,
        this.am1 = pm1,
        this.am2 = pm2,
        this.am3 = pm3,
        this.am4 = pm4,
        this.am5 = pm5
    }
}


function getLocalStorage() {
    if (localStorage.getItem("calendarObject") === null) {
        return new Calendar()
    } else {
        return localStorage.getItem("calendarObject")
    }
}

function renderTimeBlocks(calendarObject) {
    let keys=Object.keys(calendarObject)
    for ( i = 0; i < keys.length; i++) {
        //  row contains timeblock which contains all of hour, description, and save button
        let row=document.createElement("div")
        row.setAttribute("class","row timeblock")
        let hour=document.createElement("div")
        hour.textContent = "AM"
        hour.setAttribute("class","hour")
        let description = document.createElement("textarea")
        description.setAttribute("class","description")
        let button = document.createElement("button")
        button.setAttribute("class","saveBtn")
        row.appendChild(hour)
        row.appendChild(description)
        row.appendChild(button)
        container.appendChild(row)
    }
}

dateHeader.textContent = current.format("MMMM Do, YYYY")

calendarObject = getLocalStorage()
renderTimeBlocks(calendarObject)

