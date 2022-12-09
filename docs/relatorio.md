---
title: Relatório
sidebar: false
hero: true
---

<VPDocHero
    class="VPDocHero"
    name="Relatório"
    text="Células Solares sensibilizadas por corantes"
    tagline="2022"
    image="/image/fluentui-emoji/bookmark_tabs_3d.png"
    :actions="[
        {
            theme: 'alt',
            text:'Jupyter notebook',
            link:'https://github.com/FelixLuciano/celulas-solares/blob/main/notebooks/efficiency.ipynb'
        },
        {
            theme: 'alt',
            text:'Baixar excel',
            link:'https://github.com/FelixLuciano/celulas-solares/raw/main/data/analise.xlsx'
        },
    ]"
/>


## 1.   Experimental

Para o procedimento de montagem de uma célula solar sensibilizada por corante, foram
utilizados dois pedaços de vidro condutor de 2cm x 3cm. O procedimento completo está
descrito na figura a seguir.

<ImgZoom src="/image/esquema-de-fabricacao.jpg" alt="Esquema de montagem de uma célula solar sensibilizada por corante">
    Figura 1 - Esquema de montagem de uma célula solar sensibilizada por corante
</ImgZoom>

No primeiro vidro foi colocado inicialmente, sob a face onde se encontra o filme de FTO
(fluorine doped tin oxide), uma máscara adesiva contendo uma área exposta de $1 cm^2$. Em
seguida, foi adicionado um pouco de pasta de $TiO_2$ sobre o vidro em uma região afastada da
área de $1 cm^2$ e com um auxílio de um bastão de vidro, foi feito o espalhamento dessa pasta
sob a área exposta. Caso a pasta de TiO2 tenha sido colocada na face sem o filme de FTO do
vidro, a célula não irá passar corrente elétrica.

Após a aplicação, a máscara foi removida e o vidro foi aquecido a $450\, ^oC$ por 45 minutos. Por
fim, o vidro condutor com filme de $TiO_2$ foi mergulhado em uma solução de corante durante 24
horas. O corante é de extrema importância para o funcionamento da célula, uma vez que absorve
os fótons e excita os elétrons do $TiO_2$ fazendo com que sejam transportados até a superfície
do vidro condutor.

No segundo vidro, foi inicialmente feito um pequeno furo na sua parte condutora. Em seguida
foi adicionado, sobre a parte condutora, 1 gota de solução alcoólica de $H_2PtCl_6$ ($6\, mg/mL$) numa
região próxima do furo e esperado até ela secar. Depois, mais uma gota foi adicionada.

Após a solução secar completamente, o vidro foi aquecido a $450\, ^oC$ por 45 minutos. Esse aquecimento
é necessário para a formação de precipitado de platina no vidro, responsável pela criação de
uma diferença de potencial entre os dois eletrodos após sua junção.

 Após a montagem dos dois eletrodos, um pedaço de termoplástico foi colocado sobre o filme ativo
 de $TiO_2-\text{corante}$ de forma que essa área ativa ficasse envolta pelo termoplástico. Em seguida, o
 contra eletrodo (vidro condutor com a platina depositada) foi colocado sobre o eletrodo com
 $TiO_2$ e corante de forma que os eletrodos ficassem voltados um para o outro com o termoplástico
 no meio. Caso as faces dos eletrodos tenham sido invertidas, a célula não converterá luz solar
 em eletricidade, uma vez que o circuito ficará em aberto e não será submetido a uma diferença de
 potencial. A figura a seguir descreve o resultado esperado.

<ImgZoom src="/image/esquema-celula-montada.png" alt="Esquema da célula montada">
    Figura 2 - Esquema da célula montada
</ImgZoom>

Após o acoplamento dos eletrodos, duas gotas do eletrólito de $I_3^-/I^-$ foram depositadas sobre o furo
e o sistema foi levado para uma câmara de vácuo por 5 minutos. Esse eletrólito de $I_3^-/I^-$ faz a
redução do corante que fora excitado pelos fotoelétrons vindos da energia solar, para que o mesmo
possa ser excitado novamente, repetindo o processo. O termoplástico tem o papel de criar um
compartimento vazado entre os eletrodos para.


## 2.   Caracterização

Com as células solares montadas, foi feita a caracterização delas por meio da análise das
curvas IxV de cada uma. A partir da análise é possível determinar parâmetros tais como a
corrente de curto-circuito (ISC, unidade: mA), a tensão de circuito-aberto (VOC, unidade:
Volts), a corrente em máxima potência (iMP, unidade: mA), a tensão em máxima potência (VMP,
unidade: Volts), a potência máxima (PMAX, unidade: mW) , fator de preenchimento (FF) e a
eficiência global de conversão de fótons em elétrons (η). 

Para a obtenção dessas curvas IxV, as células foram primeiramente individualmente expostas
sob uma fonte de iluminação controlada e com densidade de potência (mW.cm-2) conhecida. Ao
ser iluminada pela fonte de luz, a placa irá produzir uma corrente e uma voltagem específica
que pode ser mensurada por um amperímetro em série e um voltímetro em paralelo. Foi acoplado
ao circuito um modulador por largura de pulso (PWM) controlado por um potenciômetro para
facilitar a medição da corrente que passa pela placa quando a mesma possui uma diferença de
tensão conhecida. O circuito completo é mostrado na figura a seguir.

<ImgZoom src="/image/esquema-eletrico.png" alt="Esquema Elétrico de medição de uma célula solar">
    Figura 3 - Esquema Elétrico de medição de uma célula solar
</ImgZoom>

Os curvas de Corrente x Tensão e Potência x Tensão obtidos experimentalmente nas 3 células
solares produzidas foram:

<ImgZoom src="/image/cell-2.svg" alt="Análise da Célula 1">
    Figura 4 - Análise da Célula 1
</ImgZoom>

<ImgZoom src="/image/cell-3.svg" alt="Análise da Célula 2">
    Figura 5 - Análise da Célula 2
</ImgZoom>

<ImgZoom src="/image/cell-4.svg" alt="Análise da Célula 3">
    Figura 6 - Análise da Célula 3
</ImgZoom>

Pelos gráficos de Corrente x Tensão conseguimos encontrar a corrente de curto-circuito e a
tensão de circuito-aberto, que são respectivamente a corrente quando a tensão é nula e a
voltagem quando a corrente é nula.

Pelos gráficos de Potência x Tensão conseguimos encontrar a Potência Máxima e a tensão
em máxima potência.

|          | $I_{SC}$ ($mA$) | $V_{OC}$ ($V$) | $P_{max}$ ($mW$) | $V_{MP}$ ($V$) |
|----------|----------------:|---------------:|-----------------:|---------------:|
| Célula 1 |          `18,2` |         `0,66` |          `5,440` |         `0,40` |
| Célula 2 |          `15,5` |         `0,68` |          `4,107` |         `0,37` |
| Célula 3 |          `15,2` |         `0,66` |          `4,522` |         `0,38` |

Sendo $P_\text{Luz}$ e Potência luminosa e $A_\text{celula}$ a àrea da célula solar, os outros
parâmetros $I_{MP}$, $FF$ e $Ef$ foram obtidos a partir das equações abaixo:

$$
P_\text{max} = I_\text{MP}\cdot V_\text{MP}
$$

$$
FF = \frac{P_\text{max}}{I_\text{SC}\cdot V_\text{SC}}
$$

$$
Ef = \frac{P_\text{max}}{P_\text{Luz}\cdot A_\text{Celula}}
$$

A Célula 1 foi a que induziu maior corrente, em média, e também a que obteve maior eficiência
de conversão de fótons em elétrons. Células solares de dioxido de titanio sensibilizados por
corante como estas produzidas no experimento, costumam apresentar uma eficiência de até 10%.

Essa baixa eficiência e corrente induzida das placas são consequências do transporte de elétrons
deficiente e pequena quantidade de corante absorvido no $TiO_2$. Esses entraves foram gerados
durante a etapa de fabricação das células por conta da desatenção da equipe e falta de alguns
cuidados na hora de aplicar o eletrólito sobre a o vidro condutor contendo o $TiO_2$.


## 3.   Aplicações

Com as células solares produzidas no experimento, foi-se proposto um desafio para testá-las.

A ideia é que se faça uma associação das células solares, produzidas no experimento, não é necessário utilizar todas as células, porém essa associação necessita ser capaz de gerar energia o suficiente para alimentar um circuito. Para isso, foi utilizado um circuito simples que liga uma ventoinha e carrega uma bateria, na qual as plaquinhas precisam ter uma capacidade de conseguir ligar a ventoinha por 24 horas, ou seja, um dia inteiro, sem o auxílio de nenhuma alimentação externa.

Especificações da bateria:
1. Tensão: $1.2\,V$
2. Capacidade: $2.6\,Ah$

$$
P_\text{bateria} = 1.2\,V \cdot 2.6\,Ah = 3.12\,Wh
$$

Especificações da ventoinha: 
1. Tensão: $0.18\,V$ 
2. Corrente: $0.0062\,Ah$

$$
P_\text{ventoinha} = 0.18\,V \cdot 0.0062\,A = 1.116\cdot 10^{-3}\,Wh
$$

$$
Energia_\text{ventoinha} = 1.116\cdot 10^{-3}\,Wh \cdot 24\,h = 2.67\cdot 10^{-2}\,Wh/dia
$$

Dessa forma, a energia necessária para alimentar a ventoinha por 24 horas é de $2.67\cdot 10^{-2}\,Wh/dia$. Para isso, foi necessário fazer uma associação das células solares produzidas no experimento, para que a potência gerada seja suficiente para alimentar a ventoinha por 24 horas.

Porém antes de tudo é necessário criarmos um critério para avaliarmos qual a melhor associação de células, para isso, foi criado um índice de eficiência para cada plaquinha. Esse índice é calculado a partir da seguinte equação:

$$
Ef = \frac{P_\text{max}}{P_\text{Luz}\cdot A_\text{Celula}}
$$

Onde $P_\text{max}$ é a potência máxima, $P_\text{Luz}$ é a potência luminosa da lâmpada utilizada no experimento que detem uma potência luminosa de $100$ e $A_\text{Celula}$ é a área da célula que é de $1\,cm^2$.

Para as 3 células produzidas no experimento, o índice de eficiência foi calculado e pode ser visto na tabela abaixo:

|          | $Área$ ($cm^2$) | $P_{max}$ ($mW$) | $FF$ ($%$) | $Eficiência$ ($%$) |
|----------|----------------:|-----------------:|-----------:|-------------------:|
| Célula 1 |             `1` |          `5,440` |    `45,28` |            `5,444` |
| Célula 2 |             `1` |          `4,107` |    `38,96` |            `4,107` |
| Célula 3 |             `1` |          `4,522` |    `45,07` |            `4,522` |

Para as outras 12 células, o cálculo é um pouco diferente, pois não foi dado a variação de tensão e corrente de cada célula, apenas o $I_{sc}$ e o $V_{oc}$, além disso foi dado os dados, dessas variações, para 5 células distintas, com isso foi possível calcular o Factor Function ($FF$) individualmente dessas 5 plaquinhas, como pode ser visto na tabela abaixo:

|          | $I_{SC}$ ($mA$) | $V_{OC}$ ($V$) | $P_{max}$ ($mW$) | $FF$ ($%$) |
|----------|----------------:|---------------:|-----------------:|-----------:|
| Célula 4 |          `10,9` |         `0,74` |          `3,741` |    `46,37` |
| Célula 5 |          `10,3` |         `0,77` |          `4,472` |    `56,38` |
| Célula 6 |           `9,0` |         `0,80` |          `3,996` |    `55,50` |
| Célula 7 |          `13,0` |         `0,73` |          `4,488` |    `47,29` |
| Célula 8 |          `13,1` |         `0,76` |          `4,752` |    `47,73` |

Como todas as 12 células foram produzidas com o mesmo material e nas mesmas condições, o $FF$ de cada célula pode ser deduzido como a média dos $FF$ das outras 5 calculadas anteriormente, portanto o $FF$ das 12 células será de $50,65$ $%$. Dessa forma, a potência máxima de cada célula pode ser calculado como:

$$
P_{max} = \frac{FF\cdot I_{sc}\cdot V_{oc}}{100}
$$

Onde $FF$ é o Factor Function, $I_{sc}$ é a corrente de curto circuito e $V_{oc}$ é a tensão de abertura do circuito.

Como os dados de $I_{sc}$ e $V_{oc}$ foram dados para as 12 células distintas, o cálculo da potência máxima de cada célula foi feito individualmente, como pode ser visto na tabela abaixo:

|           | $I_{SC}$ ($mA$) | $V_{OC}$ ($V$) | $P_{max}$ ($mW$) | $FF$ ($%$) |
|-----------|----------------:|---------------:|-----------------:|-----------:|
| Célula 4  |          `10,9` |         `0,74` |           `3,74` |    `50,65` |
| Célula 5  |          `10,3` |         `0,77` |           `4,47` |    `50,65` |
| Célula 6  |          ` 9,0` |         `0,80` |           `3,99` |    `50,65` |
| Célula 7  |          `13,0` |         `0,73` |           `4,48` |    `50,65` |
| Célula 8  |          `13,1` |         `0,76` |           `4,75` |    `50,65` |
| Célula 9  |           `8,6` |         `0,84` |           `3,65` |    `50,65` |
| Célula 10 |           `7,3` |         `0,85` |           `3,14` |    `50,65` |
| Célula 11 |           `9,6` |         `0,79` |           `3,84` |    `50,65` |
| Célula 12 |           `6,2` |         `0,89` |           `2,80` |    `50,65` |
| Célula 13 |           `8,9` |         `0,79` |           `3,56` |    `50,65` |
| Célula 14 |          `10,7` |         `0,82` |           `4,44` |    `50,65` |
| Célula 15 |          `10,7` |         `0,81` |           `4,39` |    `50,65` |

Com a potência máxima de cada célula, a área de cada uma e a potência luminosa, a eficiência de cada plaquinha pode ser calculada como:

$$
Ef = \frac{P_{max}}{A\cdot P_{lum}}\cdot 100
$$

Onde $P_{max}$ é a potência máxima de cada célula, $A$ é a área de cada célula, que é de $1\,cm^2$ e $P_{lum}$ é a potência luminosa da lâmpada, sendo de $100$.

Com isso, a eficiência de cada célula pode ser calculada como:

|           | $Área$ ($cm^2$) | $P_{max}$ ($mW$) | $FF$ ($%$) | $Eficiência$ ($%$) | $Tensão média$ ($V$) | $Corrente média$ ($mA$) |
|-----------|----------------:|-----------------:|----------: |-------------------:|---------------------:|------------------------:|
| Célula 1  |             `1` |           `5,44` |     `45,28`|             `5,44` |              `0,35`  |                  `13,32`|
| Célula 2  |             `1` |           `4,10` |     `38,96`|             `4,10` |              `0,37`  |                  `10,15`|
| Célula 3  |             `1` |           `4,52` |     `45,07`|             `4,52` |              `0,36`  |                  `11,01`|
| Célula 4  |             `1` |           `3,74` |     `50,65`|             `3,83` |              `0,418` |                  `8,14` |
| Célula 5  |             `1` |           `4,47` |     `50,65`|             `3,36` |              `0,418` |                  `8,14` |
| Célula 6  |             `1` |           `3,99` |     `50,65`|             `4,95` |              `0,418` |                  `8,14` |
| Célula 7  |             `1` |           `4,48` |     `50,65`|             `2,95` |              `0,418` |                  `8,14` |
| Célula 8  |             `1` |           `4,75` |     `50,65`|             `3,74` |              `0,418` |                  `8,14` |
| Célula 9  |             `1` |           `3,65` |     `50,65`|             `3,65` |              `0,418` |                  `8,14` |
| Célula 10 |             `1` |           `3,14` |     `50,65`|             `3,14` |              `0,418` |                  `8,14` |
| Célula 11 |             `1` |           `3,84` |     `50,65`|             `3,84` |              `0,418` |                  `8,14` |
| Célula 12 |             `1` |           `2,80` |     `50,65`|             `2,79` |              `0,418` |                  `8,14` |
| Célula 13 |             `1` |           `3,56` |     `50,65`|             `3,56` |              `0,418` |                  `8,14` |
| Célula 14 |             `1` |           `4,44` |     `50,65`|             `4,44` |              `0,418` |                  `8,14` |
| Célula 15 |             `1` |           `4,39` |     `50,65`|             `4,39` |              `0,418` |                  `8,14` |

Com todos os dados coletados e calculados, agora é possível fazer a assossiação de células para formar a placa solar. Para isso, é necessário identificar as tensões mínimas que o circuito deverá fornecer. Como a tensão da bateria é de $1,2\,V$ a assossiação de células deve ser feita de forma que a tensão mínima fornecida seja de $1,2\,V$. Além disso, deve-se levar em consideração a eficiência de cada célula, pois a célula com maior eficiência deve ser a primeira a ser conectada, pois ela fornecerá mais potência para o circuito.

Portanto, deve-se por em série as células 6, 14, 2, visto que elas possuem a maior eficiência e a soma das suas tensões conseguem fornecer a tensão mínima de $1,2\,V$. Porém, como a teoria é diferente da prática, para que o circuito realmente funcione foi preciso associar mais $6$ plaquinhas paralelamente. Dessa forma, o circuito ficou da seguinte forma, as células 6, 14, 2 ficaram associadas em série sendo ligadas em paralelo pelas células 6, 11 e 3 em série, que por sua vez foram ligadas em paralelo pelas células 15, 8 e 1 em série. O circuito final ficou da seguinte forma:

Antes da montagem ser realizada, é necessário antes fazer a simulação da sua energia gerada na cidade de São Paulo, mais específicamente na região da Vila Olímpia. Para isso, foi utilizado o site [Solar Power Calculator](https://www.solarpowercalculator.co.uk/), que calcula a energia gerada por um sistema solar fotovoltaico em um determinado local. Na região da Vila Olímpia o valor médio observado foi de $0.443\,W/Cm^2$, com esse valor foi possível calcular a energia gerada por cada célula. A tabela abaixo mostra a energia gerada por cada célula.

$$
P_{gerada} = \frac{P_{irradiada}\cdot Area\cdot Eficiencia}{100}
$$

Onde $P_{gerada}$ é a energia gerada pela célula, $P_{irradiada}$ é a energia irradiada na região, $Area$ é a área da célula e $Eficiencia$ é a eficiência da célula.

|           | $Potência Gerada$ ($Wh/dia$) |
|-----------|-----------------------------:|
| Célula 1  |                   `0,024099` |
| Célula 2  |                   `0,018194` |
| Célula 3  |                   `0,017019` |
| Célula 4  |                   `0,016985` |
| Célula 6  |                   `0,021945` |
| Célula 8  |                   `0,016577` |
| Célula 11 |                   `0,017019` |
| Célula 14 |                   `0,019690` |
| Célula 15 |                   `0,017019` |
| **SOMA**  |                   `0,173993` |

Com os valores de energia gerada por cada célula, foi possível calcular a energia total gerada pela associação de células, que foi a soma de todas as células, sendo de $0,174\,Wh/dia$, como a energia mínima necessária para girar a ventoinha é de $2.67\cdot 10^{-2}\,Wh/dia$, o circuito foi capaz de gerar energia suficiente para girar a ventoinha, visto que a energia gerada ultrapassa da mínima necessária e essa energia excedente é armagenada na bateria para que a ventoinha continue girando, mesmo nas horas que não haja a incidência de luz solar. Vale ressaltar que como a bateria tem uma capacidade de armazenamento de $3.12\,Wh$, apenas uma bateria é o suficiente para armazenar a energia excedente.

<video src="/video/circuito-alimentado-por-celula-solar.mp4" controls loop muted />

## 4. Conclusão

Através de células solares, é possível suprir a demanda de uma rede nacional de energia elétrica
até consumo diário de uma residência. Pois ela pode ser instalada em uma usina, em larga escala,
ou em casas, em curta escala. Isso pois uma célula de poucos centímetros interligada com outras
células cria um sistema de geração com boa escalabilidade. Este sistema pode estar acoplado em
uma rede de distribuição ou isolado, mas seu funcionamento é comum: geração, armazenamento e
inversão; variando apenas a potência.

A escala é uma vantagem das células solares. Pois, diferente de usinas hidrelétricas e nucleares,
a solar não depende de linhas de transmissão robustas. Isso gera, por consequência, um grande
atrativo para quem busca por esta fonte de energia: Produzir eletricidade no mesmo lugar em que se
consome, e não depender de um sistema de distribuição. Isso é interessante pois leva energia para
locais isolados ou reduz o custo com as companhias de distribuição que arcam com a manutenção
da malha elétrica.

Outra vantagem é econômica. O custo de um sistema de geração de energia elétrica por células solares,
está diretamente relacionado com a sua produção, instalação e a manutenção. A maior parte do custo
vem da sua produção, que varia com o preço da matéria prima e manufatura. Já a economia é proporcional
ao que se deixa de pagar por outros sistemas ao longo da depreciação do equipamento. E este é um
cenário bastante estável, pois uma vez adquirido o equipamento, contar com a presença de luz solar
é muito mais factível do que a ausência de estiagens e o aumento pela demanda de combustíveis fósseis
para a geração de energia.
