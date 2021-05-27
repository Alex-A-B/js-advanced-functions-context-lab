/* Your Code Here */

const createEmployeeRecord = (employee) => {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};

const createEmployeeRecords = (employeeList) => {
    return employeeList.map(emp => createEmployeeRecord(emp))
};

const createTimeInEvent = function(timeStamp){
    let dateTime = timeStamp.split(" ")
    let inHour = parseInt(dateTime[1], 10)
    let inDate = dateTime[0]

    this.timeInEvents.push({
        type: "TimeIn",
        hour: inHour,
        date: inDate
    })
    return this
}

const createTimeOutEvent = function(timeStamp){
    let dateTime = timeStamp.split(" ")
    let inHour = parseInt(dateTime[1], 10)
    let inDate = dateTime[0]

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: inHour,
        date: inDate
    })

    return this
}

const hoursWorkedOnDate = function(targetDate){
    let inEvent = this.timeInEvents.find( e => {
        return e.date === targetDate
    });
    
    let outEvent = this.timeOutEvents.find( e => {
        return e.date === targetDate
    })
        return (outEvent.hour - inEvent.hour) / 100
}

const wagesEarnedOnDate = function(targetDate){
    return hoursWorkedOnDate.call(this, targetDate) * this.payPerHour
}

const findEmployeeByFirstName = (srcArray, firstName) => {
    return srcArray.find( (emp) => {
        return emp.firstName === firstName
    })
}

const calculatePayroll = (arrayOfEmployees) => {
    return arrayOfEmployees.reduce( (tally, employee) =>{
        return tally + allWagesFor.call(employee)
    }, 0)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

