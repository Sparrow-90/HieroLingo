const nameToGlyphsMap = {
      'A':'𓄿𓂝',
      'B': '𓃀',
      'C': '𓎠',
      'D': '𓂧',
      'E': '𓆸',
      'F': '𓆑',
      'G': '𓎼',
      'H': '𓎛𓉔',
      'I': '𓇋',
      'J': '𓆓',
      'K': '𓎪',
      'L': '𓃭',
      'M': '𓅓',
      'N': '𓈖',
      'O': '𓍯',
      'P': '𓊪',
      'Q': '𓈎',
      'R': '𓂋',
      'S': '𓋴',
      'T': '𓏏',
      'U': '𓅨',
      'V': '𓆑',
      'W': '𓅱𓍢',
      'X': '\uD808\uDC17',
      'Y': '𓇌',
      'Z': '𓏠'
    };

const button = document.querySelector('.button--js');
const nameInput = document.querySelector('.input--js');
nameInput.addEventListener('click', function(){
    this.value="";
});

function translateNameToHieroglyph(){
    const output = document.querySelector('.output--js');
    const name = nameInput.value.toUpperCase();
    let glyphs = "";

    for(let i = 0; i < name.length; i++){
        const letter = name[i];
        if(letter in nameToGlyphsMap){
            glyphs += nameToGlyphsMap[letter];
        }
    }

    output.innerText = glyphs;
};

button.addEventListener('click', translateNameToHieroglyph);

function actionTranslate(event){
    switch(event.key){
      case 'Enter':
        console.log('działa')
        translateNameToHieroglyph()
        break
    }
  }
  window.addEventListener('keydown', actionTranslate)
