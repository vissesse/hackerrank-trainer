#!/bin/python3

import math
import os
import random
import re
import sys


if __name__ == '__main__':

    n = format(int(input().strip()), 'b')
  
    number = n.split("0")
    print(max(number).count('1'))    

