class Node:

    def __init__(self, data=None) -> None:
        self.__head = data
        self.__next = None

    def get_head(self):
        return self.__head

    def set_head(self, data: any) -> any:
        self.__head = data

    def set_next(self, data: 'Node'):
        self.__next = data

    def get_next(self) -> 'Node':
        return self.__next
