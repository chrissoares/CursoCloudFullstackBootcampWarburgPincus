public class OrdemInvesa {
    public static void main(String[] args) {
        int[] vetor = { -5, 6, -15, 50, -45, 7, 22, -75 };

        System.out.println("Vetor Inverso:");
        for(int i = (vetor.length-1); i>= 0; i-- ){
           // System.out.print(vetor[i]+", ");        
        }
        System.out.println("---------------------");

        int i, num = 5;
        for (i = 0; i < 3; i++) {
            num += i;
            System.out.print(i);
        }
        
    }
}
