# Design Patterns
##### - Reusable, reliable solutions to problems that we face every day in software development.
##### - Cataloged solutions
##### - Reusable in many different situations
##### - Well documented
##### - language collaboration
##### - Improve Architecture
##### - Write a better code
##### - Become a better programmer
# Design Patterns Essential
##### - Pattern name
##### - The problem
##### - The solution
##### - Consequences
# Design Patterns are divided into 3 categories
##### - Creational
##### - Structural
##### - Behavior
# Creational
##### - Abstract Factory
##### - Builder
##### - Factory method
##### - Prototype
##### - Singleton
# Structural
##### - Adapter
##### - Bridge
##### - Composite
##### - Decoder
##### -Facade
##### - FlyWeight
##### - Proxy
# Behavior
##### - Chain of responsibility
##### - Command
##### - Interpreter
##### - Iterator
##### - Mediator
##### - Memento
##### - State
##### - Strategy
##### - Template message
##### - Visitor
# Other Patterns
##### - Module
##### - Revealing Module
##### - Revealing Constructor
##### - Callback
##### -Middleware
##### - Reactor
##### - Blockchain
##### -Scheduler
##### -Publisher Subscriber
# ANTI-PATTERNS
##### -Modifying the prototype on instance
person.__proto__adress = {}
##### - Syncing execution after initialization
listen(){
fs.readFileSync(...)
}
##### - Callback chaos (callback hell)
readFile(...,()=> {
parseData(..., () =>{
    writeFile(..., () =>{
       logResponse(..., () => {
       });
       })
       
    })
   
})

# Object Creational: Singleton
##### - Intent: "Ensure a class only has one instance, and provide a global point pf access to it."

# Object Creational: Prototype
##### - Intent: "Specify the kinds of objects to create using prototypical instance, and create new object by copying this prototype."