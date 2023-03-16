function Guitarist (name)  {
    this.name = name
    this.type = 'Guitarist'
}

function Singer  (name)  {
    this.name = name 
    this.type = 'Singer'
}

function FactoryMusician  ()  {
    this.create = (name, type) => {
        switch(type) {
            case 1:
                return new Guitarist(name)
                break;
            case 2:
                return new Singer(name)
                break;
        }

    }
}

function Print () {
    console.log('hello my name is' + this.name + 'and I am a' + this.type);
}

const factoryMusician = new FactoryMusician()
const musicians = []

musicians.push(factoryMusician.create('Jimmy', 1))

musicians.forEach(mus => {
    Print.call(mus)
})



