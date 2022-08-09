class Node:

    def __init__(self, data=None):
        self.__data = data
        self.__next = None

    def get_data(self):
        return self.__data

    def set_data(self, data):
        self.__data = data

    def get_next(self) -> 'Node':
        return self.__next

    def set_next(self, node: 'Node'):
        self.__next = node

    def __str__(self) -> str:
        return f'{self.get_data()}'