a = [3,2,1]
n=len(a)
j = 1
i = 0
swap = []
# Write your code here
for i in range(n):
    currentSwaps = 0
    for j in range(n-1):
        if a[j]>a[j+1]:
            a[j],a[j+1]=a[j+1],a[j]
            swap.append(a[i])
            currentSwaps += 1
    if currentSwaps == 0:
        break
        
print("Array is sorted in",len(swap),"swaps.")
print("First Element:",a[0])
print("Last Element:",a[-1])