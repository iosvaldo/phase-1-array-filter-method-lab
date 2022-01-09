// Code your solution here

const findMatching = function(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === string.toLowerCase()
  })
}

const fuzzyMatch = (drivers, index) => {
  return drivers.filter(driver => driver.startsWith(index))
}

function matchName(drivers, name){
  return drivers.filter(function(hometown){
    return hometown.name === name
  })
}