from LinkedList.linkedList import LinkedList
from Node import Node

class Stack:
    def __init__(self, data=None) -> None:
        self.top = Node(data)
        
        
    def pop(self):
        """the element of  the top"""
        element = self.top
        self.top = element.get_next()    
        return element
    
    def add(self, data):
        """"""
        new_node = Node(data)
        if not self.top:
            self.top = new_node
        else:
            new_node.set_next(self.top)
            self.top = new_node
            
    
    
    def __str__(self) -> str:
        cursor = self.top
        while cursor.get_next():
            print('*', cursor.get_data(), '*')
            cursor = cursor.get_next()