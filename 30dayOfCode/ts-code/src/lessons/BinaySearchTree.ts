

export class Tree {
    constructor(private data: number, private left?: Tree, private right?: Tree) { }

    public get_data() {
        return this.data
    }
    
    public set_data(data: number) {
        return this.data = data
    }

    public get_left() { return this.left }
    public get_right() { return this.right }

    public set_left(tree: Tree) {
        return this.left = tree
    }
    public set_right(tree: Tree) {
        return this.right = tree
    }

    isLeaf() {
        return this.left == null && this.right == null
    }

}


export class Solution {

    static insert(data: number, root?: Tree) {

        if (root == null) {
            return new Tree(data)
        } else {
            if (data <= root.get_data()) {
                root.set_left(this.insert(data, root.get_left()));
            }
            else {
                root.set_right(this.insert(data, root.get_right()))
            }
        }
        return root
    }



    print(root?: Tree) {
        let tree: number[] = []
        if (root.isLeaf()) {
            tree.push(root.get_data())
        }
        else {
            tree.push(root.get_data())
            this.print(root?.get_left())
        }
        return tree;
    }

}