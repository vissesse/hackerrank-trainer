function alternativa(s) {


    switch (s.toLowerCase()[0]) {
        case 'a' || 'e' || 'i' || 'o' || 'u':

            break;

        case 'b' || 'c' || 'd' || 'j' || 'g':
            return "B"
            break

        case 'h' || 'j' || 'k' || 'l' || 'm':
            return 'C'
            break

        default:
            //case 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' || 'z':
            return "D"

            break;
    }
}