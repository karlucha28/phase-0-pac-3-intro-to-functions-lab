function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase()
}
function logShout(string) {
    console.log(string.toUpperCase())
}
function logWhisper(string){
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate (string) {
  console.log(`${if (string.toLowerCase) {"I can't hear you!"} else
  if (string.toUpperCase) {"YES INDEED"} else 
  if ("Let's have dinner together!") {"I would love to"}})
  
}
