
function theBeatlesPlay (musicians, instruments){
  var sentence = []
  for (let i=0; i < musicians.length; i++){
    sentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentence
}


var i = 0
function johnLennonFacts(facts){
  while (i < facts.length){
  var string = facts[i]
  var newString = string.concat("!!!");
  facts[i] = newString;
  i = i+1;
  }
  return facts
}