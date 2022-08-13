export class Sorting {


    private static printArray(array_name: string, array: number[]): void {
        console.log(` ${array_name} Array:`)
        console.log(array)
        console.log("")


    }

    public static bubleSort(array: number[]): void {
        this.printArray("Initial", array)
        let end_position = array.length - 1;
        let swap_positon: number;

        while (end_position > 0) {
            swap_positon = 0;
            for (let i = 0; i < end_position; i++) {
                // swap element i and i+1
                const element = array[i];
                const next_element = array[i + 1];

                if (element > next_element) {
                    array[i] = next_element;
                    array[i + 1] = element;
                    
                    swap_positon = i;
                }
                this.printArray("Current ", array)
            }
            end_position = swap_positon
            console.log(end_position)
        }

        this.printArray("array sorted ", array)
    }



}