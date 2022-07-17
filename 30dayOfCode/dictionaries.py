# Enter your code here. Read input from STDIN. Print output to STDOUT

time_input = int(input())
phone_book: dict = {}
# get data
for _ in range(time_input):
    data = str(input()).split(" ")
    
    if len(data) > 2:
        first_name = data[0]
        her_number = data[-1]
        data = [first_name, her_number]
    
    name, number = data
    phone_book[name.lower()] = number
 
# query data
search_phone_book = []
for _ in range(time_input):
    name = str(input())
    search_phone_book.append(name)
    

for name in search_phone_book:
    if str(name).lower() not in phone_book:
        print('Not found')
    else:
        print(f"{name}={phone_book[name]}")