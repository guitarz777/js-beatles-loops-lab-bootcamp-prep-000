
function theBeatlesPlay (musicians, instruments){
  var sentence = []
  for (let i=0; i < musicians.length; i++){
    sentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentence
}



function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length){
  var string = facts[i]
  var newString += "!!!";
  facts[i] = newString;
  i += 1;
  }
  return facts
}