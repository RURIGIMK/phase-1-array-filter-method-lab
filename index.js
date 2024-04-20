// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === query.toLowerCase();
      });
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(driverObjects, name) {
    return driverObjects.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}
