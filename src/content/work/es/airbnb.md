---
title: "9 tipografías, un solo flujo. ¿Por qué?"
client: "Airbnb"
tagline: "Lo que de verdad revela clonar Airbnb pantalla a pantalla"
summary: "Un clon pantalla a pantalla de la app iOS de Airbnb: un estudio de lo que se desvía a escala y de si un atomic design estricto podría mantenerlo unido."
year: "2024"
role: "Ejercicio en solitario · Auditoría heurística y rediseño conceptual (no es un proyecto de cliente)"
discipline: ["UI", "Design systems", "Audit"]
thumb: "/thumbs/airbnb.svg"
accent: "#1C2B3A"
ink: "#ffffff"
order: 5
featured: true
status: "published"
context: "Un desmontaje y reconstrucción por iniciativa propia de la app iOS de Airbnb."
problem: "Clonar Airbnb pantalla a pantalla enseña cuánta inconsistencia puede absorber incluso un producto pulido."
outcome: "Una auditoría documentada y una reconstrucción conceptual con consistencia atómica completa, ofrecida como estudio, no como corrección."
metrics:
  - value: "40 horas"
    label: "Sprint, del clon al concepto"
  - value: "9+"
    label: "Estilos tipográficos en un flujo (auditoría)"
  - value: "12+"
    label: "Variantes de radio de esquina (auditoría)"
---

Quería saber cómo se ve de cerca un design system a la escala de Airbnb.
Así que cloné la app iOS pantalla a pantalla en un sprint de 40 horas. De
cerca está más desordenado de lo que el pulido sugiere. Probablemente lo
estén casi todos los sistemas que llevan una década publicando deprisa.

<p class="note">Lo que reveló el clon</p>

## La auditoría

Clonar la app actual fue una pesadilla, en el sentido útil. Más de 9
estilos tipográficos en un solo flujo. Radios de esquina que varían al
azar. Flechas de volver y botones de cancelar que cambian de estilo y de
sitio entre pantallas, así que la gente se reorienta una y otra vez. Esa
deriva visual cuesta atención y debilita la sensación de control.

<figure class="fig fig--paper fig--bleed">
  <img src="/work/airbnb/airbnb-heuristic-audit-board.png" alt="Tablero de evaluación heurística del recorrido completo original de la app iOS de Airbnb, anotado con las inconsistencias encontradas" loading="lazy" />
  <figcaption>El recorrido completo, clonado y anotado. Cada bandera es una inconsistencia.</figcaption>
</figure>

<figure class="fig fig--mid fig--pin">
  <img src="/work/airbnb/airbnb-audit-detail.png" alt="Detalle del tablero de auditoría a tamaño de lectura: tres variantes de radio de esquina marcadas en pantallas contiguas, pequeño, mayor y apenas redondeado, con las notas de estandarización propuestas" loading="lazy" />
  <figcaption>Una columna a tamaño de lectura: tres radios de esquina en pantallas contiguas, y la nota que se convirtió en la solución.</figcaption>
</figure>

<div class="stats">
  <div><span>9+</span><span>combinaciones de peso y tamaño tipográfico en un recorrido</span></div>
  <div><span>12+</span><span>variantes de radio de esquina entre tarjetas y botones</span></div>
  <div><span>Errantes</span><span>controles de volver y cancelar entre pantallas</span></div>
</div>

> La inconsistencia a esta escala no es descuido. Es el aspecto que tiene de cerca una década de publicar deprisa.

<p class="note">Trabajo de base</p>

## De los átomos a las páginas

Con los problemas documentados, probé si un atomic design estricto podía
resolverlos. Un sistema modular desde cero: una cuadrícula de iconos
estricta, radios de esquina uniformes de 8px, una paleta estandarizada.
Cada pantalla comparte los mismos cimientos. El rediseño es un concepto,
no un producto publicado; una respuesta posible a lo que la auditoría
destapó.

<figure class="fig">
  <img src="/work/airbnb/airbnb-atomic-design-board.png" alt="Tablero de atomic design que organiza el nuevo sistema desde átomos como iconos y colores hasta páginas completas" loading="lazy" />
  <figcaption>De átomos a páginas: el sistema conceptual en un tablero.</figcaption>
</figure>

<p class="note">01 · Tipografía</p>

## Tipografía legible

Lexend como tipografía principal. Formas redondeadas, espaciado generoso,
mejor lectura para un rango más amplio de viajeros.

<figure class="fig fig--mid fig--pin">
  <img src="/work/airbnb/airbnb-typography-lexend.png" alt="Espécimen tipográfico de Lexend frente a la antigua mezcla de estilos, mostrando sus formas redondeadas" loading="lazy" />
  <figcaption>Lexend frente a la mezcla antigua: una voz en lugar de nueve.</figcaption>
</figure>

<p class="note">02 · Consistencia</p>

## Componentes unificados

Una cuadrícula de iconos, un sistema de botones. Cada elemento interactivo
comparte el mismo grosor de trazo y el mismo radio de esquina, así que
nada hay que reaprenderlo entre pantallas.

<figure class="fig fig--mid fig--pin">
  <img src="/work/airbnb/airbnb-icon-button-system.png" alt="La cuadrícula de iconos y el sistema de botones estandarizados con grosor de trazo y radio de esquina compartidos" loading="lazy" />
  <figcaption>Una cuadrícula, un radio, un grosor de trazo.</figcaption>
</figure>

<p class="note">03 · Experiencia</p>

## Descubrir con más calma

<figure class="fig fig--duo">
  <span class="fig__tile fig__tile--offset"><img src="/work/airbnb/airbnb-discovery-flow.png" alt="El flujo de descubrimiento de estancias y experiencias con un layout despejado" loading="lazy" /></span>
  <span class="fig__tile"><img src="/work/airbnb/airbnb-final-mockup.png" alt="La app de Airbnb rediseñada en un iPhone, mostrando el lenguaje visual unificado" loading="lazy" /></span>
  <figcaption>El concepto en su sitio: descubrimiento más calmado, chrome consistente.</figcaption>
</figure>

<p class="note">Siendo honestos</p>

## Lo que enseñó este ejercicio

Esto fue un ejercicio, y Airbnb publica bajo restricciones que un clon de
40 horas nunca conocerá: legacy, experimentos, equipos moviéndose en
paralelo. Exactamente eso lo hacía digno de estudio. La reconstrucción
demostró que la estandarización completa es posible: iconos, botones,
radios y tipografía bajo un sistema, controles que se quedan en su sitio,
una estructura modular que podría crecer rápido. Lo que me llevé: la
consistencia no es una capa de barniz al final. Es una estructura con la
que te comprometes al principio, o que pagas por reconstruir después.
