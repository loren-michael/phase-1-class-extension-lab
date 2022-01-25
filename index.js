class Polygon {
    constructor(sidesArr) {
        this.sidesArr = sidesArr
    }

    get countSides() {
        return this.sidesArr.length
    }

    get perimeter() {
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        return this.sidesArr.reduce(reducer, 0)
    }
}

class Triangle extends Polygon {
    constructor(sidesArr){
        super(sidesArr)
    }
    
    get isValid() {
        if (this.sidesArr.length != 3) return false;
        let a = this.sidesArr[0];
        let b = this.sidesArr[1];
        let c = this.sidesArr[2];
        return ((a+b>c) && (b+c>a) && (a+c>b))
    }
}

class Square extends Polygon {
    constructor(sidesArr) {
        super(sidesArr)
    }

    get isValid() {
        if (this.sidesArr.length != 4) return false;
        let a = this.sidesArr[0];
        let b = this.sidesArr[1];
        let c = this.sidesArr[2];
        let d = this.sidesArr[3];
        return ((a===b) && (b===c) && (c===d))
    }

    get area() {
        return (this.sidesArr[0]*this.sidesArr[0])
    }
}