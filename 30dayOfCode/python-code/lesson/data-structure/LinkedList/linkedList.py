from abc import ABC, abstractmethod
from Node import Node


class ListABC(ABC):

    @abstractmethod
    def all(self): raise Exception("Method must be implemented")

    @abstractmethod
    def find(self, data: any): raise Exception("Method must be implemented")

    @abstractmethod
    def find_by_index(self, index: int):
        raise Exception("Method must be implemented")

    @abstractmethod
    def add(self, data: any): raise Exception("Method must be implemented")

    @abstractmethod
    def rem_by_index(self, index: int):
        raise Exception("Method must be implemented")

    @abstractmethod
    def rem(self, data: any):
        raise Exception("Method must be implemented")

    @abstractmethod
    def update(self, index: int, data: any):
        raise Exception("Method must be implemented")


class LinkedList(ListABC):

    def __init__(self, data: any = None) -> None:
        self.head = Node(data) if data else None

    def add(self, data: any):
        """"""
        node: Node = Node(data)
        if self.head is None:
            self.head = node

        elif self.head.get_next() is None:
            self.head.set_next(node)
        else:
            cursor: Node = self.head
            while cursor.get_next():
                cursor = cursor.get_next()
            cursor.set_next(node)

    def add_into_index(self, index, data):
        """"""
        new_node = Node(data)

        if index == 0:
            new_node.set_next(self.head)
            self.head = new_node
        else:
            node = self.find_by_index(index-1)
            next_node = node.get_next()
            new_node.set_next(next_node)
            node.set_next(new_node)
        

    def rem(self, data: any):
        cursor = self.head
        node = None
        if cursor.get_data() == data:
            node = cursor.get_next()
            self.head = node
        else:
            while cursor.get_next():
                if cursor.get_next().get_data() == data:
                    node = cursor.get_next()
                    cursor.set_next(node.get_next())
                    break

                cursor = cursor.get_next()

        return node if node else False

    def all(self):
        cursor: Node = self.head
        all = []
        while cursor:
            all.append(cursor)
            cursor = cursor.get_next()

        return all

    def len(self):
        cursor = self.head
        cont = 0
        while cursor:
            cursor = cursor.get_next()
            cont += 1
        return cont

    def rem_by_index(self, index: int):
        cursor = self.head
        cont = 0
        node = None
        while cursor.get_next():
            if cont == index-1:
                node = cursor.get_next()
                cursor.set_next(node.get_next())
                break

            cont += 1
            cursor = cursor.get_next()
        return node if node else -1

    def find(self, data: any) -> None or Node:
        cursor = self.head
        node = None
        while cursor:
            if cursor.get_data() == data:
                node = cursor
                break
            cursor = cursor.get_next()

        return node

    def update(self, index: int, data: any) -> Node:
        cursor = self.head
        cont = 0
        while cursor:
            if cont == index:
                cursor.set_data(data)
                break

            cont += 1
            cursor = cursor.get_next()
        return True if cursor else False

    def find_by_index(self, index: int) -> Node:
        cursor = self.head
        cont = 0
        node = None
        while cursor:
            if cont == index:
                node = cursor
            cont += 1
            cursor = cursor.get_next()

        return node

    def __str__(self) -> str:
        cursor = self.head
        while cursor:
            print(cursor.get_data(), "->", end=" ")
            cursor = cursor.get_next()
