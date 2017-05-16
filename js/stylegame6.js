window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");

  /* var buttonhome.onclick = function(){
    window.location.href="Tebak Gambar.html";
  } */
  
  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
    // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    reset = function(){
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      play();
      }
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      alert("Anda telah kalah. Silahkan coba lagi!");
      window.location.href="halamangame.html";
      reset();
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "Tepat Sekali!";
        alert("Jawaban Anda tepat. Silahkan klik \"Ok\" untuk lanjut!");
        window.location.href = "halamangame5.html";
      }
    }
  }


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
    categories = [
        ["durian"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
  }

  play();

  document.getElementById('buttonhome').onclick = function() {
    var x=confirm("Anda yakin ingin keluar?");
      if (x==true) {
        window.location.href="Tebak Gambar.html";
      };    
  }
  
  
}