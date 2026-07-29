---
title: "Vende la diferencia"
client: "FLIZpay"
tagline: "Vende la diferencia, no la checklist"
summary: "Rediseñar el panel de comercios y la app de pago de FLIZpay en torno al cashback que los distingue."
year: "2026"
role: "Product Designer, UX/UI · 12 semanas, con el equipo de diseño e ingeniería de FLIZ"
discipline: ["Research", "Product design", "Design system", "QA"]
thumb: "/thumbs/fliz.svg"
accent: "#80ed99"
ink: "#001f3f"
order: 1.5
featured: true
status: "published"
metrics:
  - value: "2 productos"
    label: "Panel de comercios y app de pago de consumidor"
  - value: "Research → QA"
    label: "Estrategia, UX/UI, design system, testing"
  - value: "5+ tareas UX"
    label: "Correcciones post-lanzamiento, sin que me lo pidieran"
---

FLIZpay es una empresa alemana de pagos por open banking. La app de consumidor es
el sistema de pago en sí: pagas a una tienda directamente desde tu banco, y FLIZ te
devuelve después un porcentaje como cashback. Los comercios ofrecen ese cashback
para atraer pagos hacia FLIZ, y un panel de comercios aparte es donde lo configuran
y lo siguen. Pasé doce semanas dentro del equipo de FLIZ, trabajando de cerca bajo
la dirección de la design lead y en colaboración diaria con los desarrolladores, en
dos productos con trabajos muy distintos. El ritmo lo marcaban los lanzamientos
constantes. El mayor fue la renovación del panel de comercios, y por el camino
asumí la estrategia de producto, el design system y QA.

<p class="note">01 · El diferenciador</p>

## El diferenciador que estaba escondido

Toda herramienta de pago compite en la misma checklist: facturación, informes,
permisos, roles. Útil, esperado, y nunca la razón por la que alguien cambia. En
las primeras semanas desmenucé ese campo, feature a feature: primero un vistazo
de cerca a los rivales más próximos, por mi cuenta; después la IA rellenando la
matriz de comparación según parámetros que yo había fijado, que me enseñó los
que se me habían escapado; y al final un último repaso recorriendo yo mismo las
apps y las webs de la competencia, porque una matriz sin verificar es una
opinión. El patrón se repetía en todas partes. La checklist era lo mínimo. Nunca
fue el campo de batalla.

> Lo único que FLIZpay hacía que nadie más hacía era aquello de lo que el producto
> menos hablaba.

La ventaja es el cashback: FLIZ devuelve dinero a los clientes por pagar con open
banking, y los comercios fijan el porcentaje para atraer compradores. Ese mecanismo
estaba enterrado, una sola historia perdida entre una docena de features de
paridad. Así que el brief se reescribió solo: dejar de seguir la checklist, y poner
el diferenciador donde no se pueda pasar por alto.

<div class="fz-cards" data-fz-in>
  <figure class="fz-card"><img src="/work/fliz/fliz-card-discount-system.png" alt="Tarjeta de marketing de FLIZpay: el sistema de descuentos, que atrae a los primeros compradores con un porcentaje de bienvenida y los mantiene con un porcentaje recurrente" loading="lazy" /><figcaption>Discount system</figcaption></figure>
  <figure class="fz-card"><img src="/work/fliz/fliz-card-self-service.png" alt="Tarjeta de marketing de FLIZpay: configuración self-service, ajustar descuentos y aceptar pagos sin llamadas de onboarding" loading="lazy" /><figcaption>Self service</figcaption></figure>
</div>

<p class="note">02 · La renovación</p>

## La cuenta de empresa, reconstruida en torno al cashback

Un comercio no debería entrar para *mirar* su cuenta. Debería entrar para
*gestionarla*. El panel tiene un solo trabajo, y no es aceptar pagos, eso lo hace la
app. Es donde un comercio fija su cashback, ve cómo rinde y mantiene la tienda
conectada. Así que reconstruimos el FLIZ Company Account en torno a
ese trabajo: el
cashback, su rendimiento y su configuración, todo a un golpe de vista. Yo me
encargué de buena parte del trabajo inicial, la research, la estructura y el MVP que
probó la dirección, siempre bajo la guía de la design lead y con ingeniería en la
mesa. (La interfaz llama a ese porcentaje *discount*; el cliente lo recibe como
cashback.)

Empezó como el **MVP para la renovación**: el rediseño reducido a su estructura, lo
justo para probar la dirección antes del pase a alta fidelidad.

<figure class="fig fig--bare fz-shot fz-shot--wire" data-fz-parallax>
  <span class="fz-browser">
    <span class="fz-browser__bar" aria-hidden="true"><i></i><i></i><i></i><b>dashboard · MVP</b></span>
    <img src="/work/fliz/fliz-dashboard-wireframe.png" alt="El MVP para la renovación del panel de FLIZpay: la estructura del panel, una fila de KPIs, una tabla de transacciones y las áreas de descuento, dispuestas antes del pase a alta fidelidad" loading="lazy" />
  </span>
  <figcaption>El MVP para la renovación: la estructura del panel, antes del pase a alta fidelidad.</figcaption>
</figure>

Las áreas de verdad hacen el trabajo: una franja de KPIs, una tabla de transacciones
filtrable, el rendimiento del descuento, una guía de instalación y una línea de
estado de la plataforma en vivo. Toda la cuenta legible y manejable desde una
sola pantalla.

<figure class="fig fig--bare fz-shot" data-fz-parallax>
  <span class="fz-browser">
    <span class="fz-browser__bar" aria-hidden="true"><i></i><i></i><i></i><b>FLIZ Company Account · Dashboard</b></span>
    <img src="/work/fliz/fliz-dashboard.png" alt="El panel de comercios de FLIZpay en alta fidelidad: una franja de KPIs de cuatro tarjetas, una tabla de transacciones buscable y filtrable con status pills, un panel para configurar el descuento, un gráfico de rendimiento del descuento y una guía de instalación" loading="lazy" />
  </span>
  <figcaption>El panel en alta fidelidad: KPIs, transacciones, configuración y rendimiento del descuento, una sola pantalla desde la que actuar.</figcaption>
</figure>

<p class="note">El momento KPI</p>

## Un número, antes que nada

Lo primero que muestra el panel no es un menú. Son cuatro números. Esa fue la
decisión de diseño: un valor honesto debería recibir al comercio antes de que haga
nada, para que la cuenta responda a *¿cómo vamos?* de un vistazo.

<div class="fz-kpi-pin" data-fz-kpi>
  <div class="fz-kpi">
    <div class="fz-kpi__card">
      <span class="fz-kpi__label">Revenue this month</span>
      <span class="fz-kpi__value" data-fz-count data-count-to="12480.5" data-count-dec="2" data-count-euro="1">€ 12.480,50</span>
      <span class="fz-kpi__sub">+8.3% vs last month</span>
    </div>
    <div class="fz-kpi__card">
      <span class="fz-kpi__label">Transactions today</span>
      <span class="fz-kpi__value" data-fz-count data-count-to="47" data-count-dec="0">47</span>
      <span class="fz-kpi__sub">€1,240.00 total</span>
    </div>
    <div class="fz-kpi__card">
      <span class="fz-kpi__label">Active discount</span>
      <span class="fz-kpi__value" data-fz-count data-count-to="3.5" data-count-dec="1" data-count-suffix="%">3.5%</span>
      <span class="fz-kpi__sub">First purchase: 5%</span>
    </div>
    <div class="fz-kpi__card">
      <span class="fz-kpi__label">New customers (30d)</span>
      <span class="fz-kpi__value" data-fz-count data-count-to="89" data-count-dec="0">89</span>
      <span class="fz-kpi__sub">Via discount incentive</span>
    </div>
  </div>
  <p class="fz-kpi-note">Los valores de muestra son cifras de placeholder del archivo de diseño, no resultados de negocio.</p>
</div>

<p class="note">03 · Estados</p>

## Un estado en el que confiar de un vistazo

Un pago ocurrió o no, y un comercio no debería tener que adivinar cuál. La tabla de
transacciones funciona con un solo sistema de estados y un mapeo de color fijo, de
modo que un estado significa lo mismo cada vez que lo ves: verde liquidado, ámbar
esperando, rojo fallido, gris detenido.

<div class="fz-status" data-fz-in>
  <div class="fz-status__card">
    <span class="fz-pill fz-pill--done">Completed</span>
    <p>Pago procesado con éxito y liquidado en tu cuenta.</p>
  </div>
  <div class="fz-status__card">
    <span class="fz-pill fz-pill--pending">Pending</span>
    <p>Pago iniciado, a la espera de la confirmación del banco.</p>
  </div>
  <div class="fz-status__card">
    <span class="fz-pill fz-pill--failed">Failed</span>
    <p>El pago no se pudo procesar. Revisa los detalles de la transacción.</p>
  </div>
  <div class="fz-status__card">
    <span class="fz-pill fz-pill--canceled">Canceled</span>
    <p>Transacción cancelada por el usuario o el sistema.</p>
  </div>
</div>

<p class="note">04 · Configurar el descuento</p>

## El descuento, ascendido a área de primer nivel

El mecanismo que hace distinto a FLIZ vivía donde nadie mira: una fila dentro de
ajustes. Propuse sacarlo a su propio espacio en el panel, y ahí fue. Un
comercio fija dos porcentajes, un cashback de primera compra para atraer clientes
nuevos y un porcentaje estándar para después, ve el efecto en una vista previa en
vivo, y publica. Aquello en lo que la empresa es mejor es ahora lo más fácil de
hacer en el panel.

<figure class="fig fig--bare fz-shot" data-fz-parallax>
  <span class="fz-browser">
    <span class="fz-browser__bar" aria-hidden="true"><i></i><i></i><i></i><b>Set discount</b></span>
    <img src="/work/fliz/fliz-set-discount.png" alt="La pantalla Set Discount de FLIZpay: controles separados para el descuento de primera compra y el estándar con campos de porcentaje y toggles, y una vista previa en vivo de la oferta que ve el cliente" loading="lazy" />
  </span>
  <figcaption>Configurar el descuento como su propia área: primera compra frente a estándar, con una vista previa en vivo antes de publicar.</figcaption>
</figure>

<p class="note">05 · Guía para comercios</p>

## Una guía para comercios que vale la pena leer

Dar de alta una tienda era un tutorial pesado y saltable. Siguiendo la dirección de
la design lead, lo rediseñé como una guía estática bien hecha y de baja tecnología,
el tipo de documentación que de verdad lees, con los docs de Stripe como referencia
visual: tranquila, secuencial, sin vídeo que aguantar. Se dibujó primero como
wireframe y solo después se llevó a alta fidelidad, para que la estructura estuviera
bien antes de pulirla.

<figure class="fig fig--bare fz-shot fz-shot--tall" data-fz-parallax>
  <span class="fz-browser">
    <span class="fz-browser__bar" aria-hidden="true"><i></i><i></i><i></i><b>Help center · Installation guide</b></span>
    <img src="/work/fliz/fliz-installation-guide.png" alt="La guía de instalación de FLIZpay: un layout de documentación estática, limpio y secuencial, que lleva a un comercio a elegir plataforma, instalar el plugin, generar una API key, configurar un descuento y subir un logo" loading="lazy" />
  </span>
  <figcaption>La guía de instalación: documentación estática y secuencial en vez de un tutorial que nadie terminaba.</figcaption>
</figure>

<p class="note">06 · La app de consumidor</p>

## La app de consumidor: hacer visibles las saved offers

La app es el sistema de pago de FLIZpay: es cómo paga la gente de verdad,
directamente desde su banco. Las ofertas de cashback van encima, y esa capa estaba
enterrada. El catálogo, las saved offers y los filtros estaban a dos o tres taps de
distancia, sin entrada desde la homepage, así que la mejor razón para abrir la app
era lo más difícil de alcanzar. La afirmación necesitaba prueba, así que construí el flujo completo de la
app en FigJam y lo convertí en un ticket: la función más importante estaba
demasiado enterrada para encontrarla. El CEO, el CTO y la design lead lo
confirmaron los tres, y traerla al primer plano se convirtió en el trabajo:
en el homescreen, y prominente en un menú.

Mi primera propuesta fue un botón de hub. Maté mi propio concepto a favor
de una bottom nav (**Balance · Catalogue · QR · Send**), con las funciones
aburridas, ajustes y perfil, detrás de un botón de perfil arriba.
Alrededor: entradas en la homepage que ponen las ofertas en la primera
pantalla (chips de categoría, un tile de saved offers, una tarjeta de deal
of the week), un hub de catálogo, y un flujo *keep browsing?* tras la
compra, para que un pago completado lleve a algún sitio en vez de terminar.
La dirección la validó de forma independiente el lead engineer, y más tarde
evolucionó hacia una iteración con efecto glass. El corte más duro no fue
mío: el product manager y el CEO eliminaron por completo las funciones de
enviar y recibir de la app.

<div class="fz-gallery" data-fz-gallery>
  <div class="fz-gallery__track" data-fz-track>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-concept-a-bottom-nav.png" alt="App de consumidor concepto A: un homescreen con chips de categoría, una fila de saved offers, una tarjeta de deal of the week y una bottom nav" loading="lazy" /></span><figcaption>Concept A · entradas en la homepage + bottom nav, la dirección que ganó</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-concept-b-hub-button.png" alt="App de consumidor concepto B: un patrón de navegación con un botón de hub central" loading="lazy" /></span><figcaption>Concept B · el botón de hub, mi primera propuesta, la maté yo</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-concept-c-gift-card.png" alt="App de consumidor concepto C: un patrón de navegación tipo mundo de gift cards" loading="lazy" /></span><figcaption>Concept C · mundo de gift cards</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-app-homescreen.png" alt="El homescreen de la app de consumidor con send funds y las ofertas visibles al entrar" loading="lazy" /></span><figcaption>Homescreen · ofertas visibles al entrar</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-deal-of-the-week.png" alt="La tarjeta de deal of the week con un badge de tiempo restante, marcado con una llama para dar urgencia" loading="lazy" /></span><figcaption>Deal of the week · badge de tiempo restante</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-nav-glass.png" alt="La iteración posterior con efecto glass del homescreen de la app: transacciones, prepaid deals y un menú inferior de cristal flotando sobre el contenido" loading="lazy" /></span><figcaption>La iteración glass · donde acabó la dirección</figcaption></figure>
  </div>
  <p class="fz-gallery__hint" aria-hidden="true">Scroll →</p>
</div>

<p class="note">07 · Decisiones pequeñas</p>

## Decisiones pequeñas, fricción real

La gran estructura solo funciona si las señales pequeñas son honestas. Guardar una
oferta se marcaba con un clip, que se lee como *adjuntar*, no *guardar*, así que pasó
a ser un corazón. Eso liberó la señal de urgencia que el clip enturbiaba, y el deal
of the week tomó una llama para decir *esto caduca*.

<p class="note">Bajo el capó</p>

## Bajo el capó

Bajo el trabajo visible estaba el tipo poco lucido, y ahí es donde mi reparto de
tareas con la IA fue más nítido. Unas **1.150 capas** renombradas a sentence case
y cerca de **50 localisation strings** arregladas en EN/DE, con una pasada por
las mayúsculas: la IA hizo el grueso con un encargo preciso y propuso las
variantes de idioma, yo elegía entre ellas y comprobaba el resultado capa a
capa, para que el design system se leyera con una sola voz en vez de cinco. Y
para que siguiera así sin mí, escribí las guías que lo acompañan: cómo trabajar
con las variables, cómo manejar la localisation. Documentación que hace más
rápido al siguiente diseñador sin nadie en la sala. El
mismo reparto llevó el trabajo de marca. La identidad acababa de tomar una nueva
dirección bajo la design lead, y trabajé con ella para llevarla a todas partes,
iconografía incluida, con Gemini generando y yo filtrando. Hice QA a mano en TestFlight y llevé tests de Clarity de principio a fin:
la research, la interpretación, el informe. Y presenté
**cinco y pico tareas de UX post-lanzamiento sin que me lo pidieran**, cada una
planteada no como un bug sino como un problema de retención o activación que
valía la pena resolver.

<p class="note">Uso de IA</p>

## Uso de IA

La IA atravesó casi todas las partes de este trabajo, de la research al
QA. Los ejemplos más claros: rellenó la matriz competitiva con parámetros
que fijé yo, y verifiqué cada conclusión en las apps de los propios
rivales. Hizo el grueso del renombrado de 1.150 capas y de los arreglos de
localisation, con encargos precisos, y yo elegía entre sus variantes y
comprobaba capa a capa. Gemini generó iconografía para la nueva dirección
de marca, y la design lead y yo dirigimos y filtramos. Nada producido por
la IA salió sin revisar.

<p class="note">Lo que me enseñó</p>

## Lo que me enseñó

- **Vende la diferencia, no la checklist.** Nadie se cambia porque tengas las
  mismas features que los demás. El trabajo de diseño era mover el verdadero
  diferenciador de las notas al pie al titular.
- **Para un público que ya está dentro, muestra valor, no repitas el pitch.** A un
  comercio que ya se ha registrado no hay que convencerlo otra vez; necesita que la
  recompensa sea fácil de alcanzar y fácil de leer.
- **Asciende el mecanismo central a su propio lugar.** Aquello en lo que un producto
  es mejor no debería vivir nunca en una fila de ajustes. Dale una superficie, y el
  producto entero apunta a lo que lo hace distinto.
