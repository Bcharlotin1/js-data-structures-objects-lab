// Write your solution in this file!
const driver = {"name": "Sam"};


function  updateDriverWithKeyAndValue(driver, key, value){
    let newDriver = {...driver}
    newDriver[key] = value;
    return newDriver;
};

function  destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver;
};

function  deleteFromDriverByKey(driver, key){
  let oldDriver = {...driver};
  delete oldDriver[key];
  return oldDriver;
};

function  destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
};