class Formatter {
   static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

   static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g,  "");
  }
  static titleize(string){
    const array = []
    const arr = string.split(" ")
     const constant = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    for (let i = 0; i < arr.length; i++){
      if (i === 0){
        array.push(Formatter.capitalize(arr[i]))
      } else {
        const test = constant.includes(arr[i])
        if (!test){
          array.push(Formatter.capitalize(arr[i]))
        } else {
          array.push(arr[i])
        }
      }
    }
    return array.join(" ")
  }
}
