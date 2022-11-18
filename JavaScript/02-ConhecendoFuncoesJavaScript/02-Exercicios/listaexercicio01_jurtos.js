/*
    3) Utilizando funções, elabore um algoritimo que calcule o que deve ser pago por um produto, 
    considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    
    Código Condição de Pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

function calculeSubTotal(precoUnitario, quantidade){
    return precoUnitario * quantidade;
}

function calculeValorPercentual(valor, percentual) {
    return valor * (percentual / 100); 
}

function calculeValorDesconto(valor, percentualDesconto){
    return calculeValorPercentual(valor, percentualDesconto); 
}

function calculeValorJuros(valor, percentualJuros){
    return calculeValorPercentual(valor, percentualJuros); 
}

function getPercentualDesconto(formaPagamento){
    let descontoPercentual = 0;
    if (formaPagamento === 01) {
        descontoPercentual = 10;
    } else if (formaPagamento >= 02 && formaPagamento <= 03) {
        descontoPercentual = 15;
    }
    return descontoPercentual;
}

function getJurosPercentual(formaPagamento){
    let jurosPercentual = 0;
    if (formaPagamento >= 04) {
        jurosPercentual = 10;
    }
    return jurosPercentual;
}

function calculeTotalAPagar(formaPagamento, precoTotalProduto){
    const CODIGO_FORMA_PAGAMENTO_A_VISTA_DEBITO = 01;
    const TEXTO_FORMA_PAGAMENTO_A_VISTA_DEBITO = "Débito";
    const CODIGO_FORMA_PAGAMENTO_A_VISTA_DINHEIRO = 02;
    const TEXTO_FORMA_PAGAMENTO_A_VISTA_DINHEIRO = "Dinheiro";
    const CODIGO_FORMA_PAGAMENTO_A_VISTA_PIX = 03;
    const TEXTO_FORMA_PAGAMENTO_A_VISTA_PIX = "PIX";
    const CODIGO_FORMA_PAGAMENTO_DUAS_PARCELAS = 04;
    const TEXTO_FORMA_PAGAMENTO_DUAS_PARCELAS = "02 vezes";
    const CODIGO_FORMA_PAGAMENTO_PARCELAMENTO = 05;
    const TEXTO_FORMA_PAGAMENTO_PARCELAMENTO = "Parcelado ";

    let textoPagamento = "";
    let descontoPercentual = 0;
    let jurosPercentual = 0;
    
    if (formaPagamento === 01) {
        textoPagamento = TEXTO_FORMA_PAGAMENTO_A_VISTA_DEBITO;
        descontoPercentual = 10;
    } else if (formaPagamento === 02) {
        textoPagamento = TEXTO_FORMA_PAGAMENTO_A_VISTA_DINHEIRO;
        descontoPercentual = 15;
    } else if (formaPagamento === 03) {
        textoPagamento = TEXTO_FORMA_PAGAMENTO_A_VISTA_PIX;
        descontoPercentual = 15
    } else if (formaPagamento === 04) {
        textoPagamento = TEXTO_FORMA_PAGAMENTO_DUAS_PARCELAS;
    } else {
        textoPagamento = TEXTO_FORMA_PAGAMENTO_PARCELAMENTO;
        jurosPercentual = 10;
    }
}

( function (){
    const formaPagamento = 05;
    const numeroParcelas = 2;
    
    const precoUnitarioProduto = 100;
    const quantidadeProduto = 1;

    const precoTotalProduto = calculeSubTotal(precoUnitarioProduto, quantidadeProduto);
    const valorDesconto = calculeValorDesconto(precoTotalProduto, getPercentualDesconto(formaPagamento));
    const valorJuros = calculeValorJuros(precoTotalProduto, getJurosPercentual(formaPagamento));
    if (((formaPagamento >= 01) && (formaPagamento <= 03) && (numeroParcelas > 0)) || (formaPagamento === 04 && numeroParcelas > 2))   {
        console.log('O número de parceas '+numeroParcelas+' não é aceito pela forma de pagamento '+textoPagamento+' escolhida.');
    } else {
        valorAPagar = precoTotalProduto - valorDesconto + valorJuros;
        console.log('O valor total a ser pago é: R$ '+valorAPagar);
    }

})()

