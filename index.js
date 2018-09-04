
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
  string += "!!!"
  facts[i] = (string);
  i = i+1;
  }
  return facts
}