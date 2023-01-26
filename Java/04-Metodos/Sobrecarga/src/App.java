public class App {
    public static void main(String[] args) throws Exception {
        //Quadridlateros
        System.out.println("Área dos Quadrilateros");
        
        System.out.println("Área do quadrado: "+ Quadrilatero.area(5));
        System.out.println("Área do retangulo: "+ Quadrilatero.area(15d, 20d));
        System.out.println("Área do trapezio: "+ Quadrilatero.area(10, 5, 3));
        System.out.println("Área do Losangulo: "+Quadrilatero.area(10f, 8f));

    }
}
