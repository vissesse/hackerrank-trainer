#!/bin/python3
import math
import os
import random
import re
import sys



if __name__ == '__main__':

    S = input().strip()
    try: 
        line = int(S)
    except ValueError as e:
        print("Bad String")
    else:
        print(line)