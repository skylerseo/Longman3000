function word(word, pos, sl, wl) {
  if (!sl && !wl) {
    console.log(`{
    "word": "${word}",
    "partOfSpeech": "${pos}",
    "spokenLevel": "-",
    "writtenLevel": "-"
  },`);
  } else if (!wl) {
    console.log(`{
    "word": "${word}",
    "partOfSpeech": "${pos}",
    "spokenLevel": "${sl.charAt(0) == 'S' ? sl : '-'}",
    "writtenLevel": "${sl.charAt(0) == 'W' ? sl : '-'}"
},`);
  } else {
    console.log(`{
    "word": "${word}",
    "partOfSpeech": "${pos}",
    "spokenLevel": "${sl.charAt(0) == 'S' ? sl : '-'}",
    "writtenLevel": "${wl.charAt(0) == 'W' ? wl : '-'}"
},`);
  }
}

word('zone', 'n', 'W3');