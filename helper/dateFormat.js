function dateFormat(date){
  let newDate = date.toString().split(" ")
  return `${newDate[2]} ${newDate[1]} ${newDate[3]}`
}

module.exports = dateFormat