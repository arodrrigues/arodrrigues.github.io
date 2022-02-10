from abc import ABC, abstractmethod
class Absclass(ABC):
    def print(lion,x):
        print("Passed value: ", x)
    @abstractmethod
    def task(lion):
        print("We are inside Absclass task")
 
class test_class(Absclass):
    def task(lion):
        print("We are inside test_class task")
 
class example_class(Absclass):
    def task(lion):
        print("We are inside example_class task")
 
#object of test_class created
test = test_class()
test.task()
test.print(100)
 
#object of example_class created
example = example_class()
example.task()
example.print(200)
 
print("test is  an instance of Absclass? ", isinstance(test, Absclass))
print("example is an instance of Absclass? ", isinstance(example, Absclass))