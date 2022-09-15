// Code your solution here
function findMatching(array, driver) {
    const drivers = array.filter(match => match.toUpperCase() === driver.toUpperCase())
    return drivers
}

function fuzzyMatch(array, driver) {
    const drivers = array.filter(drivername => drivername.toLowerCase().indexOf(driver.toLowerCase())=== 0)
    return drivers
}

function matchName(array, string) {
    const drivers = array.filter(driver => driver.name == string)
    return drivers
}