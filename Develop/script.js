
var dateHeader = document.querySelector("#currentDay")
var container = document.querySelector(".container")
var current = moment()
var currentHour = moment(current.format("h a"),"h a")
class Calendar {
    constructor(am9=null,am10=null,am11=null,pm12=null,pm1=null,pm2=null,pm3=null,pm4=null,pm5=null) {
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
        return JSON.parse(localStorage.getItem("calendarObject"))
    }
}

function renderTimeBlocks(calendarObject) {
    let keys=Object.keys(calendarObject)
    for ( i = 0; i < keys.length; i++) {
        //  row contains timeblock which contains all of hour, description, and save button
        let row=document.createElement("form")
        row.setAttribute("class","row timeblock w-100")
        let hour=document.createElement("div")
        hour.textContent = reformatKey(keys[i])
        hour.setAttribute("class","hour col-1")
        let description = document.createElement("textarea")
        description.setAttribute("class","description col-10 " + checkRelativeToNow(keys[i]))
        description.value = calendarObject[keys[i]]
        description.setAttribute("name",keys[i])
        let button = document.createElement("button")
        button.setAttribute("class","saveBtn col-1")
        button.setAttribute("name",keys[i])
        button.textContent = '\u{1F4BE}'
        button.addEventListener("click",saveContent)
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

function saveContent(event) {
    event.preventDefault()
    let trueTarget = document.querySelectorAll(`textarea[name=${event.target.name}]`)[0]
    console.log(trueTarget)
    calendarObject[event.target.name] = trueTarget.value
    localStorage.setItem("calendarObject",JSON.stringify(calendarObject))
}

dateHeader.textContent = current.format("MMMM Do, YYYY")

calendarObject = getLocalStorage()
renderTimeBlocks(calendarObject)

