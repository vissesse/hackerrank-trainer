from ..Node import Node


class LinkedList:

    def __init__(self, node: Node = None) -> None:
        self.node: Node = node

    def add(self, data: any):
        """"""
        node: Node = None
        if self.node is None:
            node.set_head(data)
