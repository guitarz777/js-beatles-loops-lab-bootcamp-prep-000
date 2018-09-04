
function theBeatlesPlay (musicians, instruments){
  var sentence = []
  for (let i=0; i < musicians.length; i++){
    sentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentence
}


var j = 0
function johnLennonFacts(facts){
  while (j < facts.length){
  var string = facts[j]
  var newString = string.concat("!!!");
  facts[j] = newString;
  j = j+1;
  }
  return facts
}