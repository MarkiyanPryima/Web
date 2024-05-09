// Singleton
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

// Facade
class Engine {
    start() {
        console.log("Engine started");
    }

    stop() {
        console.log("Engine stopped");
    }
}

class AirConditioner {
    on() {
        console.log("Air conditioner turned on");
    }

    off() {
        console.log("Air conditioner turned off");
    }
}

class Car {
    constructor() {
        this.engine = new Engine();
        this.airConditioner = new AirConditioner();
    }

    start() {
        this.engine.start();
        this.airConditioner.on();
    }

    stop() {
        this.engine.stop();
        this.airConditioner.off();
    }
}

const myCar = new Car();
myCar.start();
myCar.stop();

// Iterator
class Iterator {
    constructor(items = []) {
        this.index = 0;
        this.items = items;
    }

    hasNext() {
        return this.index < this.items.length;
    }

    next() {
        return this.hasNext() ? this.items[this.index++] : undefined;
    }
}

class Collection {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getIterator() {
        return new Iterator(this.items);
    }
}

const collection = new Collection();
collection.addItem("Item 1");
collection.addItem("Item 2");
collection.addItem("Item 3");

const iterator = collection.getIterator();

while (iterator.hasNext()) {
    console.log(iterator.next());
}

