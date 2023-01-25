public class MinhaClasse {
    public static void main (String [] args){
        System.out.println("Bora aprender");
        final String BR = "Brasil";

        String meuNome = "Christiano";

        int anoFabricacao = 2022;

        boolean simNao = true;

        anoFabricacao = 2023;
        simNao = false;
        meuNome = BR;

        String primeiroNome = "Christiano";
        String segundoNome = "Soares";
        meuNome = nomeCompleto(primeiroNome, segundoNome);

        System.out.println(nomeCompleto(primeiroNome, segundoNome));

    }

    public static String nomeCompleto(String primeiroNome, String segundoNome){
        return primeiroNome.concat(" ").concat(segundoNome);
    }
}
