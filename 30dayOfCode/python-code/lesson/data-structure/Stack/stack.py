from LinkedList.linkedList import LinkedList
from Node import Node

class Stack:
    def __init__(self, data) -> None:
        self.top = Node(data)
        
        
    def pop(self):
        """the element of  the top"""