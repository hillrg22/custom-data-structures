// Create custom data structures
// 1. Code-along here

class Spell {
  constructor(name, unforgivable, type, difficulty){
    this.name = name
    this.unforgivable = unforgivable
    this.type = type
    this.difficulty = difficulty
  }

  setDifficulty(newDifficulty) {
    this.difficulty = newDifficulty
  }

  getDifficulty(){
    return this.difficulty
  }

}

let Patronus = new Spell("Patronus", false, "Defense", 7)

let Expelliarmus = new Spell("Expelliarmus", false, "Attack", 5)

Expelliarmus.setDifficulty(6)

console.log(Expelliarmus)


class AttackSpell extends Spell {
  constructor(name, unforgiveable, difficulty, damage){
    super(name, unforgiveable, "Attack", difficulty, damage)
    this.damage = damage
  }
}
let crucio = new AttackSpell("Crucio", true, 8, "High")
console.log(crucio)


// 2. Create your own class




// 3. Refactor to use constructor function for initial values



// 4.
