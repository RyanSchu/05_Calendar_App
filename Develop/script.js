
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



calendarObject = getLocalStorage()
dateHeader.textContent = current.format("MMMM Do, YYYY")

