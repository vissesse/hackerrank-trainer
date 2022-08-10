from LinkedList.linkedList import LinkedList

if __name__ == '__main__':

    lista = LinkedList()
    for i in range(10):
        lista.add(i) 
    lista.__str__()
     
    print()
    #print(lista.find_by_index(0))
    print(lista.add_into_index(10, 100))
    print()
    #print( 'all', lista.all())
    lista.__str__()
    print("len", lista.len())