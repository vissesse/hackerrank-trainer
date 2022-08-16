from abc import ABC


class IBTree(ABC):

    def is_empty(self) -> bool:
        raise Exception("Method most be implemented")

    def add(self, tree: 'BTree') -> bool:
        raise Exception("Method most be implemented")

    def is_member(self, tree: 'BTree') -> bool: raise Exception(" implemdnte")


class BTree:

    def __init__(self, data: any) -> None:
        self._data = data
        self._left = None
        self._right = None

    def get_data(self):
        return self._data

    def set_data(self, data):
        self._data = data

    def get_left(self):
        return self._left

    def get_right(self):
        return self._right

    def set_left(self, b_tree: 'BTree'):
        self._left = b_tree

    def set_right(self, b_tree: 'BTree'):
        self._right = b_tree

    def is_leaf(self):
        return self.get_left() == self.get_right() == None

    def is_empty(self):
        return self._data is None and self.is_leaf()


class BST(IBTree):

    def __init__(self, data=None) -> None:
        self._root = BTree(data) if data else None

    def is_empty(self) -> bool:
        return self._root.is_empty()

    def add(self, tree: 'BTree') -> BTree:

        if self.is_empty():
            self._root = tree

        elif self._root.get_left().is_empty():
            if tree.get_data() <= self._root.get_data():
                self._root.set_left(tree)
            else:
                self._root.set_right(tree)
                
        elif self._root.get_right().is_empty():
            if tree.get_data() <= self._root.get_data():
                self._root.set_left(tree)
            else:
                self._root.set_right(tree)

    def is_member(self, tree: 'BTree') -> bool:
        return self._root is tree or self.is_member(self._root.get_left()) or self.is_member(self._root.get_right())


if __name__ == "__main__":
    btr = BST(3)
    btr.add(BTree(2))
    btr.add(BTree(4))
    btr.add(BTree(5))

    print(btr._root.get_data())
    print(btr._root.get_right().get_data())
    print(btr._root.get_left().get_data())
