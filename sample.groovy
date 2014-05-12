class Dummy {
  Integer age
  String name
}

y = 15
while (y--) {
  if (y & 1) {
    y
    println "one statement"
  } else {
    y
    println "another statement"
  }
}

myDouble = {it * 2}


def divide = {a,b -> a/b}


println "hello"
println "mama"

def (a, b, c) = [1,2,3]

myList = [1,2,3].collect {it*3}
another = [new Dummy(age: 10, name: "Peter"), new Dummy(age:12, name: "Jack")].name

dill = divide(2, 0)


