public class Usuario {
    public static void main(String[] args) throws Exception {
        SmartTv smartTv = new SmartTv();

        System.out.println("Situação Inícial da TV:");

        System.out.println("TV Ligada? "+smartTv.ligada);
        System.out.println("Canal Atual? "+smartTv.canal);
        System.out.println("Volume Atual? "+smartTv.volume);
        
        
        System.out.println("Ligar TV");
        smartTv.ligar();
        System.out.println("TV Ligada? "+smartTv.ligada);
        System.out.println("Desligar TV");
        smartTv.desligar();
        System.out.println("TV Ligada? "+smartTv.ligada);
        
        
        System.out.println("Aumentar Volume");
        smartTv.aumentarVolume(); //Volume
        smartTv.aumentarVolume(); //Volume
        smartTv.aumentarVolume(); //Volume
        System.out.println("Volume Atual? "+smartTv.volume);
        
        System.out.println("Diminuir Volume");
        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        System.out.println("Volume Atual? "+smartTv.volume);

        System.out.println("Mudando de Canal");
        smartTv.aumentarCanal();
        smartTv.aumentarCanal();
        smartTv.aumentarCanal();
        smartTv.aumentarCanal();
        System.out.println("Canal Atual? "+smartTv.canal);
        
        smartTv.mudarCanal(21);
        System.out.println("Canal Atual? "+smartTv.canal);
        
        smartTv.diminuirCanal();
        smartTv.diminuirCanal();
        System.out.println("Canal Atual? "+smartTv.canal);

        smartTv.isFuncionando();

    }
}
