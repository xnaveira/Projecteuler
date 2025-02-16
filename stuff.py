def isPrime(n):
    if n in [1,2,3,5,7]:
        return True
    if n % 2 == 0:
        return False
    nsqr = round(math.sqrt(n))
    for i in range(2,nsqr+1):
        tmp = n % i
        if n % i == 0:
            return False
    return True

# while True:
#     user_input = input("Enter a number (or type 'exit' to quit): ")
#     if user_input.lower() == "exit":
#         break
#     try:
#         number = int(user_input)
#     except ValueError:
#         print("Invalid input, please enter a valid number.")
#         continue

#     result = isPrime(number)
#     print("Result:", result)