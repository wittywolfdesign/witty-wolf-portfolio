---
# Hechos tomados únicamente de HANDOVER.md.
# Título ES: "Mata tu plantilla" enviado; alternativa "La plantilla ha
# muerto", ver el informe de traducción. Marco puede cambiarlo.
title: "Mata tu plantilla"
client: "Witty Wolf"
tagline: "La web que estás leyendo es el caso de estudio"
summary: "El propio portfolio: una plantilla de Framer jubilada a favor de una web Astro escrita a mano. La misma alma en los textos, un envase nuevo, cada línea mía."
year: "2026"
role: "Product designer & developer"
discipline: ["Art direction", "Front-end", "Design system"]
thumb: "/thumbs/witty-wolf.svg"
accent: "#E3993D"
ink: "#1A1714"
order: 1
featured: true
status: "published"
context: "El portfolio que estás mirando, reconstruido de una plantilla de Framer a una web Astro escrita a mano."
problem: "Una plantilla puede alojar tu trabajo. Hablar por ti, no puede."
outcome: "Una web Astro estática y escrita a mano en la dirección field-notes; cada detalle de este caso está vivo en la página que estás leyendo."
metrics:
  - value: "Estática"
    label: "Astro, escrita a mano, plantilla jubilada"
  - value: "2"
    label: "Tipografías, ambas self-hosted"
  - value: "1"
    label: "Color de acento, gastado con cuidado"
---

El portfolio antiguo vivía en una plantilla de Framer. Cumplía como cumple
un piso de alquiler: todo funciona, nada es tuyo. Los textos tenían alma.
El envase tenía una suscripción.

<p class="note">El problema del envase</p>

## El envase de otro

La plantilla hablaba primero, y hablaba sobre todo en stock. La foto del
hero era mía, un atardecer que hice en los Houthavens de Ámsterdam, pero
la página de trabajo abría con un render 3D de una fototeca y el contacto
se escondía tras un skyline de ciudad que podría vender cualquier cosa.
Debajo había un logotipo en una tipografía display redondeada que ya ha
sido retirada de la marca por completo.

<figure class="fig">
  <img src="/work/witty-wolf-site/framer-landing.png" alt="La antigua landing de Framer: la foto de atardecer con veleros que Marco hizo en los Houthavens de Ámsterdam, con Witty Wolf Design en la antigua tipografía display redondeada" loading="lazy" />
  <figcaption>La antigua landing: mi atardecer de los Houthavens, la tipografía jubilada, los textos ya queriendo salir de ahí.</figcaption>
</figure>

<figure class="fig fig--paper fig--duo">
  <span class="fig__tile"><img src="/work/witty-wolf-site/framer-work-stock.jpg" alt="El antiguo hero de la página de trabajo: un render 3D genérico de stock con átomos y esferas orbitando" loading="lazy" /></span>
  <span class="fig__tile"><img src="/work/witty-wolf-site/framer-contact.png" alt="La antigua página de contacto: una foto de stock de larga exposición de un skyline con un título gigante de Contact" loading="lazy" /></span>
  <figcaption>Átomos de stock presentando los casos, un skyline de stock cogiendo el teléfono.</figcaption>
</figure>

El pensamiento de marca era real y merecía conservarse: el ingenio como
principio de trabajo, lenguaje llano, personalidad al servicio de la
claridad. Merecía algo mejor que un layout que otra persona ya había
vendido mil veces.

<figure class="fig fig--mid fig--pin">
  <img src="/work/witty-wolf-site/framer-brand-sheet.png" alt="La antigua hoja de marca: visión de marca, tono de voz y principios de imagen de Witty Wolf Design" loading="lazy" />
  <figcaption>La antigua hoja de marca: el tono de voz sobrevivió a la mudanza, la tipografía no.</figcaption>
</figure>

<figure class="fig fig--paper">
  <img src="/work/witty-wolf-site/framer-editor.png" alt="La web de Witty Wolf abierta dentro del editor de Framer, con paneles de variantes y un botón de Upgrade Now visible" loading="lazy" />
  <figcaption>El envase en persona: mi web, el editor de otro, un botón de upgrade donde debería haber un commit.</figcaption>
</figure>

<p class="note">La mudanza</p>

## La misma alma, un envase nuevo

La decisión: jubilar la plantilla y escribir a mano una web Astro
estática. Conservar la voz de los textos, sustituir todo lo que la
sostenía. La dirección de arte se volvió field notes: papel cálido, tinta,
una cuadrícula tenue, línea fina y un solo acento ámbar, gastado con
cuidado. Dos tipografías, ambas self-hosted: Geist Mono como voz para
títulos, navegación, etiquetas y números, Work Sans solo para lectura
larga. La antigua display redondeada se jubiló en todas partes, también en
la propia marca.

<figure class="fig fig--paper">
  <img src="/work/witty-wolf-site/astro-home-light.png" alt="La nueva home en Astro con el tema claro: hero de máquina de escribir con la palabra tachada, el lobo de línea dibujado sobre papel cálido" loading="lazy" />
  <figcaption>La misma dirección después de la mudanza: papel, tinta, voz mono y el lobo dibujado a trazos.</figcaption>
</figure>

<p class="note">01 · El oficio</p>

## Detalles que se ganan el sitio

El hero se escribe solo, comete un error a propósito, lo tacha y sigue:
pantallas se convierte en personas. El lobo de al lado es el logo real
dibujado como línea pura que se esboza a sí misma, sin rellenos salvo la
lengua ámbar. Un rastro ámbar se dibuja página abajo mientras haces
scroll, un reloj vivo marca la hora de Madrid en la línea de metadatos y
el footer contesta en modo terminal. El modo oscuro llega sin destello del
tema equivocado, respeta la preferencia del sistema, y cambiarlo se gana
un momento: el lobo se inclina, tiembla, enciende un ojo ámbar, la lámpara
parpadea y el tema aterriza. Toda animación se apaga cuando reduced motion
está activo.

<figure class="fig fig--paper">
  <img src="/work/witty-wolf-site/astro-home-dark.png" alt="La nueva home en Astro con el tema oscuro: el mismo hero con la línea del lobo en tono papel sobre casi negro" loading="lazy" />
  <figcaption>El modo oscuro es un tema de pleno derecho, no una inversión: el lobo cambia tinta por papel.</figcaption>
</figure>

<p class="note">02 · El sistema</p>

## Una sola fuente de verdad

Las páginas de caso corren sobre un sistema pequeño, no sobre un montón de
decisiones. Las etiquetas de margen que ves en esta misma página son la
única fuente de verdad del índice de secciones: el raíl con scroll-spy en
escritorio, la píldora flotante en móvil y los enlaces ancla que siguen
funcionando sin JavaScript, sellados en la build por un pequeño plugin de
rehype. Las figuras comparten un solo tratamiento field-notes, cinta y
chinchetas solo para imágenes, nunca para el texto. Cada caso abre bajo un
sello de goma con la marca de su cliente, estampado cuando el título
termina de escribirse.

<figure class="fig fig--paper">
  <img src="/work/witty-wolf-site/astro-case-index.png" alt="Una doble página de caso en la nueva web: el raíl del índice a la izquierda, una etiqueta de margen y un título, y debajo una captura del producto vivo" loading="lazy" />
  <figcaption>El raíl de secciones, alimentado por las etiquetas de margen: escribe la nota una vez, el índice la sigue.</figcaption>
</figure>

<p class="note">Mi peor cliente</p>

## Soy mi peor cliente

Publicar para ti mismo significa conocer a tu propio yo crítico, y el mío
es el cliente más difícil que tengo. Sin briefing tras el que esconderse,
sin nadie más a quien culpar. Un escaparate también te frena: el diseño
tiene que apartarse del camino del trabajo, así que la contención es el
encargo, no el compromiso.

La web de Framer llevó casi cuatro meses. La mayor parte no fue construir,
fue decidir. Qué enseñar, qué cortar, qué imágenes se ganaban el sitio,
dónde estaba el equilibrio. Esta reconstrucción fue más rápida, porque lo
decidido ya estaba decidido. El trabajo fue redacción en el sentido de
tachar: cortar lo que sobraba y lo que en silencio había empezado a
detestar. Lo más difícil fue matar a mis favoritos.

La crítica de un cliente o de un jefe la encajo mejor que la mía. Soy
implacable cuando me toca juzgar mi propio trabajo. Después, se pule.

<p class="note">Siendo honestos</p>

## La prueba más honesta que existe

Un portfolio no tiene cifras de conversión que merezcan citarse, así que
no pienso inventarlas. El resultado es propiedad: cada línea de esta web
es mía y cambiarla lleva minutos, no un ticket de soporte. Urbiqo me
enseñó que construir tu propio diseño es la prueba de usabilidad más
honesta que hay; aquí la lección volvió a casa, porque esta vez el cliente
era yo, y el cliente se fija en todo.
