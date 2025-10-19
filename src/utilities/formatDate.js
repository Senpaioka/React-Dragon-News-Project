// function getFormattedDate() {
//   return new Date().toLocaleDateString('en-US', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });
// }

// export {getFormattedDate}


function getFormattedDate() {
  
  const today = new Date()
  const weekday = today.toLocaleDateString('en-US', { weekday: 'long' }); 
  const restOfDate = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }); 

  return {weekday, restOfDate};
}

export {getFormattedDate};