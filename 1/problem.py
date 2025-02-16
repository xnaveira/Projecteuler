import math

def isMultipleof(x,y):
    if x % y == 0:
        return True
    else:
        return False

accumulate = 0
for j in range(1,1000):
    if isMultipleof(j,3) or isMultipleof(j,5):
        accumulate = accumulate + j

print("The sum of the first 1000 multiples of 5 or 3 is:", accumulate)