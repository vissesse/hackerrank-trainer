from Node import Node


class Queque:
    
    def __init__(self, data=None) -> None:
        self.first = Node(data) if data else None
        
        
    def add(self, data):
        new_data =Node(data)
        
        if self.first is None:
            self.first = new_data
        else:
            cursor = self.first
            while cursor.get_next():
                cursor = cursor.get_next()    
            
            cursor.set_next(new_data)
            
    def __str__(self) -> str:
        cursor = self.first
        
        while cursor:
            print( cursor.get_data(), '->',end=' ')
            cursor = cursor.get_next()
        