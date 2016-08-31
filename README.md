# NexoInflacao

https://www.nexojornal.com.br/grafico/2016/05/02/Da-hiperinfla%C3%A7%C3%A3o-%C3%A0-estagfla%C3%A7%C3%A3o-a-economia-desde-1991

Baseando-me nesse viz, farei uma interativa usando D3.

###Processo
- [x] O básico (main.html, script.js and style.css)
- [x] Preparar rascunho da interface
- [ ] Desenhar um gráfico 1 com:
- [ ] ..Pontos corretos
- [ ] ..Setas
- [ ] ..Legenda
- [ ] Fazer transição para sub gráficos com:
- [ ] ..Mudança de cores
- [ ] ..Legenda
- [ ] Repetir processo para gráfico 2 e 3
- [ ] Fazer transição entre gráficos 1 - 2 - 3
- [ ] Fazer ficar bonito:
- [ ] ..fontes
- [ ] ..cores
- [ ] ..disposição

###Geral
Os gráficos chamados 1,2,3 estão nomeados na pasta img. Seus subgráficos correspondentes tem a forma x.y, sendo x o gráfico principal e y a ordem em que aparece. 

###Rascunho

A ideia do display é essa:
![display main](https://github.com/JoaoCarabetta/NexoInflacao/blob/master/rascunho/rascunho-js.png?raw=true)

Em laranja fica o svg para o título, em verde a legenda fixa explicando as variações compostas, em amarelo o plot principal, em azul um toggle para variar os mandatos (consequentemente o tempo). Finalmente, em rosa ficará uma legenda interativa que responderá ao clique mostrando mais informações. Veja a imagem abaixo:
![display legenda](https://github.com/JoaoCarabetta/NexoInflacao/blob/master/rascunho/rascunho-02.png?raw=true)

###Fontes

Inflação IPCA (1994-2016) - http://www.ibge.gov.br/home/estatistica/indicadores/precos/inpc_ipca/defaultseriesHist.shtm

Inflação IPCA (1991-1993) -  http://hcinvestimentos.com/2011/02/21/ipca-igpm-inflacao-historica/?hvid=NcSFP

Desemprego (Jan 2002-2016) - http://bit.ly/1N2rjCM

Desemprego 1991 - 2001 - Zoiômetro no gráfico do Nexo
