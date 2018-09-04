
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
  var a = "!!!"
  var newString = string.concat(a);
  facts[j] = newString;
  j = j+1;
  }
  return facts
}