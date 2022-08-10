import sys

class Node:
    def __init__(self, data) -> None:
        self.__data=data
        self.__next=None
    
    def get_next(self):
        return self.__next
    
    def set_next(self, node:'Node'): 
        self.__next = node
    
    def get_data(self):
        return self.__data
        
        
        
class Stack:
    
    def __init__(self) -> None:
        self.top = None
    
    def push(self, data):
        new_node = Node(data)
        
        if not self.top:
            self.top = new_node
        else:
            new_node.set_next(self.top)
            self.top = new_node
            
    def pop(self):
        data = self.top
        self.top = data.get_next()
        return data.get_data()

class Queque:
    
    def __init__(self) -> None:
        self.first = None

    def enqueue(self, data):
        new_node = Node(data)
        
        if not self.first:
            self.first = new_node
        else:
            cursor = self.first
            while cursor.get_next():
                cursor = cursor.get_next()
            cursor.set_next(new_node)
            
    def dequeue(self):
        data = self.first
        self.first = data.get_next()
        return data.get_data()
 
class Solution:
    """"""
    # Write your code here
    def __init__(self) -> None:
        self.stack = Stack()
        self.queque = Queque()

    def pushCharacter(self, char: chr):
        """"""
        self.stack.push(char)
        

    def enqueueCharacter(self, char: chr):
        """"""
        self.queque.enqueue(char)

    def popCharacter(self) -> chr:
        """"""
        return self.stack.pop()

    def dequeueCharacter(self) -> chr:
        """"""
        return self.queque.dequeue()


# read the string s
s = input()
# Create the Solution class object
obj = Solution()

l = len(s)
# push/enqueue all the characters of string s to stack
for i in range(l):
    obj.pushCharacter(s[i])
    obj.enqueueCharacter(s[i])

isPalindrome = True
'''
pop the top character from stack
dequeue the first character from queue
compare both the characters
'''
for i in range(l // 2):
    if obj.popCharacter() != obj.dequeueCharacter():
        isPalindrome = False
        break
# finally print whether string s is palindrome or not.
if isPalindrome:
    print("The word, "+s+", is a palindrome.")
else:
    print("The word, "+s+", is not a palindrome.")
