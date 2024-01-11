/* class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

module.exports = {
    Cube:Cube
} */

// Addition
function additionner(a, b) {
    return a + b;
}

// Soustraction
function soustraire(a, b) {
    return a - b;
}

// Multiplication
function multiplier(a, b) {
    return a * b;
}

// Division
function diviser(a, b) {
    // Vérification pour éviter la division par zéro
    if (b !== 0) {
        return a / b;
    } else {
        return "Erreur : Division par zéro";
    }
}
