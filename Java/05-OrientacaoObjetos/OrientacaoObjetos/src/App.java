public class App {
    public static void main(String[] args) throws Exception {
        
        Carro carroGolf = new Carro("Azul", "GTS 2.0", 50);
        descreveCarro(carroGolf);

        Carro  carroGol = new Carro("1.0 4 portas", 55);
        carroGol.cor = "Vermelho";
        descreveCarro(carroGol);

        Carro carroPalio = new Carro("Prata", "GL 1.0", 50);
        descreveCarro(carroPalio);

        //Funcionários

        Funcionario funcionario = new Funcionario();

        Funcionario gerente = new Gerente();
        Funcionario vendedor = new Vendedor();
        Funcionario faxineFuncionario = new Faxineiro();

    }

    public static void descreveCarro(Carro carro){
        double valorLitroCombustivel = 5.5;
        System.out.println("O carro "+carro.getModelo() + " possui a cor "+carro.getCor() + " e " + carro.getCapacidadeTanque() + " Litros de capacidade do tanque.");
        System.out.println("Com o combustível à R$"+valorLitroCombustivel+ " o custo para encher o tanque é de R$"+carro.totalValorTanque(valorLitroCombustivel));
    }
}
