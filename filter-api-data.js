/*
//Unfortunetaly not working for price-tag
function filterApiData(apiData, mandatoryKeys) {
  let filteredArray = [];
  for (let i = 0; i < apiData.length; i++) {
    let singleObject = Object.keys(apiData[i]);

    for (let x = 0; x < mandatoryKeys.length; x++) {
      if (singleObject.includes(mandatoryKeys[x])) {
        filteredarray.push(apiData[i]);
      }
    }
  }
  console.log(filteredarray);
  return filteredarray;
}
*/

function filterApiData(apiData, mandatoryKeys) {
  let filteredArray = apiData.filter(function (element) {
    let arr = Object.keys(element);
    let isIncluded = true;

    for (let i = 0; i < mandatoryKeys.length; i++) {
      if (!arr.includes(mandatoryKeys[i])) {
        isIncluded = false;
      }
    }
    if (isIncluded === true) {
      return true;
    }
  });
  return filteredArray;
}
