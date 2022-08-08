class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Solution:
    def display(self, head: Node):
        current = head
        while current:
            print(current.data, end=' ')
            current = current.next

    def insert(self, head: Node, data):
        # Complete this method
        new_node = Node(data)
        if head is None:
            return new_node
        elif head.next is None:
            head.next = new_node
        else:
            self.insert(head.next, data)
            # go to de last node
        return head


mylist = Solution()
T = int(input())
head = None
for i in range(T):
    data = int(input())
    head = mylist.insert(head, data)

print()
mylist.display(head)
