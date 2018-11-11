var Counter = function (array) {
  this.count = 0
  this.array = array
  this.arrayreset = Object.assign({}, array);
  this.value = array[0]
  window.addEventListener('newkey', function (e) {
    setTimeout(function () {
      this.count = 0
    }.bind(this), 10);
  }.bind(this))
  this.up = function (){
    this.count++
    if (this.count > this.array.length-1 ) {
        this.count = 0
    }
  },
  this.down = function () {
    this.count--
    if (this.count < 0 ) {
        this.count = this.array.length-1
    }
  }
  this.value = function () {
    return this.array[this.count]
  }
}

test1 = function () {
  groups = new Counter([
    new Counter([
      new Counter("ɪ,i,ʊ,u".split(",")),
      new Counter("ɛ,ɜ,ə,ɔ".split(",")),
      new Counter("æ,ʌ,ɒ,ɑ".split(","))
    ]),
    new Counter([
      new Counter("eɪ,ɔɪ,aɪ".split(",")),
      new Counter("eə,ɪə,ʊə".split(",")),
      new Counter("oʊ,aʊ,/".split(","))
    ]),
    new Counter([
      new Counter("p,f,θ,t,s,ʃ,ʧ,k".split(",")),
    ]),
    new Counter([
      new Counter("b,v,ð,d,z,ʒ,ʤ,g".split(",")),
      new Counter("m,n,ŋ,h,w,l,r,j".split(",")),
    ]),
    new Counter([
      new Counter("_,⌫".split(",")),
      new Counter("↗,↘,.,ˈ,ˌ,:,ʔ,ˑ".split(",")),
    ]),
  ])

  document.addEventListener('keydown', function(e) {
    switch (e.key) {
      case 'f':
           groups.value().value().up()
        break;
      case 's':
            groups.value().value().down()
        break;
      case 'd':
            window.dispatchEvent( new Event('newkey'));
        break;
      case 'l':
          main.innerHTML = main.textContent.slice(0, main.textContent.length-1);
        break;
      case 'k':
            groups.up()
      break;
      case 'j':
            groups.value().up()
      break
    }
  reset();
  });
}
test2 = function () {
  groups = new Counter([
    new Counter("ɪ,i,ʊ,u,ɛ,ɜ,ə,ɔ,æ,ʌ,ɒ,ɑ".split(",")),
    new Counter("eɪ,ɔɪ,aɪ,eə,ɪə,ʊə,oʊ,aʊ,/".split(",")),
    new Counter("p,f,θ,t,s,ʃ,ʧ,k".split(",")),
    new Counter("b,v,ð,d,z,ʒ,ʤ,g,m,n,ŋ,h,w,l,r,j".split(",")),
    new Counter("_,⌫,↗,↘,.,ˈ,ˌ,:,ʔ,ˑ".split(",")),
  ])

  groups = new Counter([
    new Counter("ɪ,i,ʊ,u,eɪ,ɔɪ,aɪ".split(",")),
    new Counter("ɛ,ɜ,ə,ɔ,eə,ɪə,ʊə".split(",")),
    new Counter("æ,ʌ,ɒ,ɑ,oʊ,aʊ,/".split(",")),
    new Counter("p,f,θ,t,s,ʃ,ʧ,k".split(",")),
    new Counter("b,v,ð,d,z,ʒ,ʤ,g".split(",")),
    new Counter("m,n,ŋ,h,w,l,r,j".split(",")),
    new Counter("_,⌫".split(",")),
    new Counter("↗,↘,.,ˈ,ˌ,:,ʔ,ˑ".split(",")),
  ])

  document.addEventListener('keydown', function(e) {
    switch (e.key) {
      case 'f':
           groups.value().up()
        break;
      case 's':
            groups.value().down()
        break;
      case 'd':
          window.dispatchEvent( new Event('newkey'));
        break;
      case 'l':
        groups.up()
        break;
      case 'k':
          main.innerHTML = main.textContent.slice(0, main.textContent.length-1);
      break;
      case 'j':
        groups.down()
      break
    }
  reset();
  });
}
window.addEventListener('newkey', function (e) {
  reset();
  var value = groups.value().value()
  if (value == '⌫') {
    main.innerHTML = main.textContent.slice(0, main.textContent.length-1);
  }else{
    main.innerHTML += value
  }
})

reset = function () {
  var elements = document.getElementsByClassName('cell');
  while(elements.length > 0){
    elements[0].classList.remove('cell');
  }
      document.getElementById('T'+groups.value().value()).classList.add('cell')
}
test2()
