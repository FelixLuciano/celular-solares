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
            text:'Jupyter notebook',
            link:'https://github.com/FelixLuciano/celulas-solares/blob/main/notebooks/efficiency.ipynb'
        }
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
    Figura 1 - Análise da Célula 1
</ImgZoom>

<ImgZoom src="/image/cell-3.svg" alt="Análise da Célula 2">
    Figura 2 - Análise da Célula 2
</ImgZoom>

<ImgZoom src="/image/cell-4.svg" alt="Análise da Célula 3">
    Figura 3 - Análise da Célula 3
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
P_\text{max} = I_\text{MP} \cdot V_\text{MP}
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

::: danger Work in progress
<ImgZoom src="/image/cells.svg" alt="Análise das Células confeccionadas pelos técnicos do laboratório">
    Figura 4 - Análise das Células confeccionadas pelos técnicos do laboratório
</ImgZoom>
:::


## 3.   Aplicações

<video src="/video/circuito-alimentado-por-celula-solar.mp4" controls loop />


<br>

[^1]: EXEMPLO, de referência bibliográfica. **Testando notas de rodapé**. 2022. Disponível em: https://google.com.br

<style>
hr.footnotes-sep {
    margin-top: 4rem;
}
</style>
