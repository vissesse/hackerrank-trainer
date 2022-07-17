#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'quartiles' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY arr as parameter.
#

# [1, 2, 3,
#  4, 5, 6] when len is even

# [1, 2, 3, 4, 5] when len in odd


def get_quartile(arr: list):
    """ """
    print("->", arr)
    m_length = int(len(arr)/2)
    if len(arr) % 2 == 0:
        print(f"{arr[m_length-1]} + {arr[m_length]}")
        return int((arr[m_length-1] + arr[m_length])/2)

    return arr[m_length]


def quartiles(arr):
    # Write your code here
    Q1 = Q2 = Q2 = 0
    length = len(arr)
    half = int(length/2)

    if not (length % 2 == 0):
        Q2 = arr[half]
        Q1 = get_quartile(arr[:half])        
        Q3 = get_quartile(arr[half+1:])
    else:
        Q2 = get_quartile(arr)
        Q1 = get_quartile(arr[half:])
        Q3 = get_quartile(arr[half+1:])

    return [Q1, Q2, Q3]

#
lista = sorted([3, 7, 8, 5, 12, 14, 21, 13, 18])

def result(res:list):
    return '\n'.join(map(str, res))

print("result:\n", result(quartiles(lista)))

