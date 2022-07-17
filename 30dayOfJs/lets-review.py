# Enter your code here. Read input from STDIN. Print output to STDOUT

# get the value
test_cases = []
n = int(input())

for _ in range(n):
    test_cases.append(str(input()))
    

for s in test_cases:
    #even positions character
    evens = []
    odd = []
    for i, c in enumerate(s):
        if i%2 == 0:
            evens.append(c)
        else:
            odd.append(c)


    strings = "".join(evens) + " " + "".join(odd)

    print(strings)