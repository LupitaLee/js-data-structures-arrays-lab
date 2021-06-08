// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];


function 
destructivelyAppendDriver(name){
    drivers.push(name);
    return drivers
}

function
destructivelyPrependDriver(name){
    drivers.unshift(name)
    return drivers
}

function
destructivelyRemoveLastDriver(){
    drivers.pop()
    return drivers
}

function
destructivelyRemoveFirstDriver(){
    drivers.shift()
    return drivers
}

function 
appendDriver(name){
   const newdrivers = [...drivers, name]
   return newdrivers
}

function
prependDriver(name){
    const newdrivers = [name, ...drivers]
   return newdrivers
}

function
removeLastDriver(){
    const newdrivers = drivers.slice(0,-1)
    return newdrivers
}

function 
removeFirstDriver(){
    const newdrivers = drivers.slice(1)
    return newdrivers
}