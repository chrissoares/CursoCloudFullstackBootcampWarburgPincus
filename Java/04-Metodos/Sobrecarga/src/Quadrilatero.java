public class Quadrilatero {
    public static double area(double lado){
        return (lado * lado);
    }

    public static double area(double base, double altura){
        return (base * altura);
    }

    public static double area(double baseMaior, double baseMenor, double altura){
        return (((baseMaior + baseMenor) * altura) / 2);
    }

    public static double area(float diagonal1, float diagonal2){
        return ((diagonal1 * diagonal2)/2);
    }

    public String verifica(int idade) {

        if (idade > 18) {
            return "Maior de idade";
        } else {
            return "Menor de idade";
        }
    }


}
