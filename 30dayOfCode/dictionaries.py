# Enter your code here. Read input from STDIN. Print output to STDOUT


# get data

def input_data(data, store: dict):
    if len(data) > 2:
        first_name = data[0]
        her_number = data[-1]
        data = [first_name, her_number]

    name, number = data
    store[name.lower()] = number


# query data


def query_data(name, search_phone_book):
    search_phone_book.append(name)


def show_data(name):
    if str(name).lower() not in phone_book:
        print('Not found')
    else:
        print(f"{name}={phone_book[name]}")


if __name__ == '__main__':
    phone_book: dict = {}
    search_phone_book = []

    n = int(input().strip())
    
    phone_book = {name:input().split() for _ in range(n)}
    
    for _ in range(n):
        arr = list(map(str, input().rstrip().split()))
        input_data(arr, phone_book)

    for _ in range(n):
        n = str(input().strip())
        query_data(n, search_phone_book)

    for name in search_phone_book:
        show_data(name)
        