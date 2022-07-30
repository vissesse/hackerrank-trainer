#!/bin/python3

import math
import os
import random
import re
import sys


def hour_glass(array: list[list]):
    sum_list = [0]


def data():
    return [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ]


if __name__ == '__main__':

    arr = data()

    # for _ in range(6):
    #    arr.append(list(map(int, input().rstrip().split())))

    for row in arr:
        for col in row:
