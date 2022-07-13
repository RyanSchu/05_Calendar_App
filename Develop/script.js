
var dateHeader = document.querySelector("#currentDay")
var container = document.querySelector(".container")
var current = moment()
var currentHour = moment(current.format("h a"),"h a")
class Calendar {
    constructor(am9,am10,am11,pm12,pm1,pm2,pm3,pm4,pm5) {
        this.am9 = am9,
        this.am10= am10,
        this.am11 = am11,
        this.pm12 = pm12,
        this.pm1 = pm1,
        this.pm2 = pm2,
        this.pm3 = pm3,
        this.pm4 = pm4,
        this.pm5 = pm5
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
        row.setAttribute("class","row timeblock w-100")
        let hour=document.createElement("div")
        hour.textContent = "AM"
        hour.setAttribute("class","hour col-1")
        let description = document.createElement("textarea")
        description.setAttribute("class","description col-10 " + checkRelativeToNow(keys[i]))
        let button = document.createElement("button")
        button.setAttribute("class","saveBtn col-1")
        row.appendChild(hour)
        row.appendChild(description)
        row.appendChild(button)
        container.appendChild(row)
    }
}

function reformatKey(key) {
    let text = key.replace(/[apm]+/i,"") + " " + key.slice(0,2)
    return text
}

function checkRelativeToNow(time) {
    let text = reformatKey(time)
    text = moment(text,"h a")
    console.log(text.format("h a"))
    if (text.isBefore(currentHour)) {
        return "past"
    } else if (text.isAfter(currentHour)) {
        return "future"
    } else {
        return "present"
    }
}

dateHeader.textContent = current.format("MMMM Do, YYYY")

calendarObject = getLocalStorage()
renderTimeBlocks(calendarObject)

