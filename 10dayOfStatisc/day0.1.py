# Enter your code here. Read input from STDIN. Print output to STDOUT


def get_the_mean(array: list):
    sum = 0
    for element in array:
        sum += element
    return float(sum/len(array))


#[1, 2, 3, 4, 5]

def get_the_median(array: list):
    median_pos = int(len(array)/2)
    if not (len(array) % 2 == 0):
        return array[median_pos]

    median_pos_firt = median_pos-1
    median_pos_sec = median_pos

    median = (array[median_pos_firt] + array[median_pos_sec]) / 2
    return median


def get_the_mode(array: list):
    verified_numers = []
    maior = -1
    popular_one = -1
    for element in array:
        if element not in verified_numers:
            count = array.count(element)
            verified_numers.append(element)

            if maior < count:
                maior = count
                popular_one = element

    return popular_one



if __name__ == '__main__':
    n = int(input())
    lista= list(map(int, input().rstrip().split()))
    
    
    lista = sorted(lista)
    mean = get_the_mean(lista)
    median = get_the_median(lista)
    mode = get_the_mode(lista)
    print('%.1f' % round(mean, 1))
    print('%.1f' % round(median, 1))
    print(mode)
