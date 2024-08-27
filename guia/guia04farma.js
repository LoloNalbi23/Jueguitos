let Square=[[1,1,1],
            [1,1,1],
            [1,1,1]]

function MagicSquare(Square) {
  while ( Etapas < 4 ) { 
    acum = 0
    for (let Filas = 0; Filas < Square.length; Filas++) {
      for (let Columnas = 0; Columnas < Square.length; Columnas++) {
        if (Etapas === 0 && Filas === 0) {
          MagicSq += Square[Filas][Columnas];
        }

        if (Etapas == 0) { 
        acum += Square[Filas][Columnas]; 
        }
        
        if (Etapas == 1 && Filas === Columnas) {
          acum += Square[Filas][Columnas]
        }

        if (Etapas == 2 && aux == Columnas) {
          acum += Square[Filas][Columnas]
          aux--
        }

        if (Etapas == 3) {
          if (Columnas == 0) {
            col1 += Square[Filas][Columnas]
          }
          if (Columnas == 1) {
            col2 += Square[Filas][Columnas]
          }
          if (Columnas == 2) {
            col3 += Square[Filas][Columnas]
          }
        }
      }
    }

    if ( Etapas === 3 ) {
      acum = (col1 + col2 + col3) / 3
    }

    if ( Etapas === 0) {
      acum = acum / 3
    }

    console.log(acum + " acum " + MagicSq + " MagicSq " + Etapas + " Etapas ")
    if ( acum === MagicSq ) {
      acum = 0
    } else {
      console.log(acum + " " + Etapas)
      return false
    } 
    Etapas++
  }
  return true
}

let col1 = 0
let col2 = 0
let col3 = 0
let auxx = Square.length - 1

let Etapas = 0
let MagicSq = 0
let aux = Square.length - 1
let acum = 0

console.log(MagicSquare(Square))