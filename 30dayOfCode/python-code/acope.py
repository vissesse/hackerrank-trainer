import math


class Difference:
    def __init__(self, a):
        self.__elements = a
        self.maximumDifference = None

        # Add your code here
    def computeDifference(self):
        # [1, 2, 3, 4]
        #
        self.maximumDifference = max([int(math.fabs(element - self.__elements[j])) for i,
                   element in enumerate(self.__elements) for j in range(i, len(self.__elements)) if i != j])


# End of Difference class


_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)
