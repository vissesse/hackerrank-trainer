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


def get_quartile(arr: list): 
    m_length = int(len(arr)/2)
    if len(arr) % 2 == 0: 
        
        return  int((arr[m_length-1] + arr[m_length])/2)

    return arr[m_length]


def quartiles(arr):
    # Write your code here 
    arr = sorted(arr)
    length = len(arr)
    half = int(length/2)

    if not (length % 2 == 0):
        return [get_quartile(arr[:half]), arr[half], get_quartile(arr[half+1:])]

    return [ get_quartile(arr[half:]), get_quartile(arr), get_quartile(arr[half+1])]


#if __name__ == '__main__':
#    fptr = open(os.environ['OUTPUT_PATH'], 'w')
#
#    n = int(input().strip())
#
#    data = list(map(int, input().rstrip().split()))
#
#    res = quartiles(data)
#
#    fptr.write('\n'.join(map(str, res)))
#    fptr.write('\n')
#
#    fptr.close()

lista = [3, 7, 8, 5, 12, 14, 21, 13, 18]

def result(res:list):
    return '\n'.join(map(str, res))

print("result:\n", result(quartiles(lista)))

