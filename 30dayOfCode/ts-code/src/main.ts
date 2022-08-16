//import * as interface_file from "./interfaces";
import { Sorting } from "./lessons/Sort"
import { bubleSort } from "./hackerranking/sorting"
import { Printer } from "./hackerranking/generic"

import { Solution, Tree } from "./lessons/BinaySearchTree"
 




//let IntList = [3, 1, 2, 3, 2]
//let strList = ['Hello', 'World']
//bubleSort(Lista)

//let intPrint: Printer<number> = new Printer();
//let stringPrint: Printer<String> = new Printer();

//intPrint.printArray(IntList);
//stringPrint.printArray(strList);

let tree = new Tree(1, new Tree(3), new Tree(12));
let soluction = Solution.insert(1, tree);

console.log(soluction.get_data())

console.log(soluction.get_left()?.get_data())