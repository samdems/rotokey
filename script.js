var consonants = "bcdfghjklm".split("");
var consonants2 = "npqrstvxz".split("");
var vowels = 'aeiou_⌫'.split("");

// sets = [consonants,consonants2,vowels]

groups = [
    [
      "ɪ,i:,ʊ,u:".split(","),
      "e,ɜ:,ə,ɔ:".split(","),
      "e,ɜ:,ə,ɔ:".split(","),
      "æ,ʌ,ɒ,ɑ:".split(","),
      '_,⌫'.split(",")
  ]
]

var group = groups[0]
var sets = group[0];
var set = sets[0]
var count = 0
var setcount = 0


function add() {
  if (gess.textContent == '_') {
      main.textContent += ' '
  }else if(gess.textContent == '⌫'){
    main.textContent = main.textContent.slice(0, main.textContent.length-1);
  }
  else{
    main.textContent += gess.textContent
  }
}
function swichset() {
  setcount++
  if (setcount > set.length-1 ) {
    setcount = 0
  }
  count = 0
  set = set[setcount]
}
function smallRight() {
  count++
  if (count > set.length ) {
    count = 0
  }
}
function smallLeft() {
  count--
  if (count < 0 ) {
    count = set.length
  }

}
