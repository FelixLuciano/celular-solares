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
/>


## 1.   Experimental

::: danger To do
    ...
:::

Hello World[^1].


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
tensão conhecida.O circuito completo é mostrado na figura a seguir.

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
de conversão de fótons em elétrons.Células solares de dioxido de titanio sensibilizados por
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

::: danger To do
    ...
:::

<br>

[^1]: EXEMPLO, de referência bibliográfica. **Testando notas de rodapé**. 2022. Disponível em: https://google.com.br

<style>
hr.footnotes-sep {
    margin-top: 4rem;
}
</style>
