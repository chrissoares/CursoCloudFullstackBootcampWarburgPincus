public class Operadores {
    public static void main(String[] args) {
        int numero = 5;
        System.out.println(numero);
        numero = -numero; //Inverte o sinal:  passa para negativo
        System.out.println(numero);
        numero = -numero; //Inverte o sinal:  passa para positivo
        System.out.println(numero);

        //incremento
        numero ++;
        System.out.println(numero); //Imprime 6

        System.out.println(numero++); //Imprime 6 e incrementa +1
        System.out.println(numero); //imprime 7

        System.out.println(++numero); //Incrementa +1 e imprime 8

        //operador ternario
        int a, b;
    
        a = 5;
        b = 6;
    
        String resultado = "";

        if(a==b)
            resultado = "Verdadeiro";
        else
            resultado = "Falso";
        System.out.println(resultado);
        
        resultado = a!=b ? "verdadeiro" : "falso"; //Inverti o resultado para imprimir algo diferente
        System.out.println(resultado);

        //Operadores comparação
    
        String nomeUm = "Christiano";
        String nomeDois = new String("Christiano");
    
        System.out.println("Comparando String e Objeto");
        System.out.println(nomeUm == nomeDois); //Vai dar Falso, apesar do valor ser igual
        System.out.println(nomeUm.equals(nomeDois)); //Vai dar Verdadeiro.

    }


}
