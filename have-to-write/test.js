function word(word, pos, sl, wl) {
  this.word = word;
  this.pos = pos;
  this.sl = sl;
  this.wl = wl;

  if ((this.wl == undefined) && (this.sl == 'S1' || this.sl == 'S2' || this.sl == 'S3')) {
    console.log(`{
      "word": "${word}",
      "partOfSpeech": "${pos}",
      "spokenLevel": "${sl}",
      "writtenLevel": "-"
  },`);
  } else if ((this.sl == 'W1' || this.sl == 'W2' || this.sl == 'W3')) {
    console.log(`{
      "word": "${word}",
      "partOfSpeech": "${pos}",
      "spokenLevel": "-",
      "writtenLevel": "${sl}"
  },`);
  } else {
    console.log(`{
      "word": "${word}",
      "partOfSpeech": "${pos}",
      "spokenLevel": "${sl}",
      "writtenLevel": "${wl}"
  },`);
  }

}

word('concerned', 'adj', 'S1', 'W1');