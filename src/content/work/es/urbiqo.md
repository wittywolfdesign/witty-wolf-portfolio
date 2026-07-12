---
title: "Resolver problemas de confianza"
client: "Urbiqo"
tagline: "Verificar a hosts e inquilinos antes de que algo salga mal"
summary: "Cómo inquilinos excluidos y hosts con aversión al riesgo acaban en la misma plataforma."
year: "Desde 2025"
role: "Product Designer, Co-founder & Developer"
discipline: ["Research", "Product design", "Design system", "Front-end"]
thumb: "/thumbs/urbiqo.svg"
accent: "#C25A3C"
ink: "#ffffff"
order: 2
featured: true
status: "published"
# URL DE STAGING — cambiar a producción en el lanzamiento. Una sola fuente para el CTA.
liveUrl: "https://staging.urbiqo.com/es"
context: "Un marketplace SaaS de dos lados para alquiler urbano, en desarrollo activo."
problem: "El alquiler de habitaciones funciona con confianza ciega. Hosts e inquilinos se comprometen antes de que nadie sepa con quién trata."
outcome: "Diseñado de punta a punta y luego construido por mí en Next.js. La plataforma está viva en staging; el lanzamiento aún no ha llegado, las métricas de usuarios tampoco."
metrics:
  - value: "En staging"
    label: "Construido y vivo, lanzamiento por delante"
  - value: "4 meses"
    label: "De la research a la UI de producción"
  - value: "Dos lados"
    label: "Inquilinos y hosts, una plataforma"
---

Madrid crece y su mercado de alquiler no le sigue el ritmo. Los filtros
viven en otra década: sin contrato indefinido, no hay piso. Eso deja fuera
a inquilinos solventes y obliga a los hosts a elegir de un grupo más
pequeño y más uniforme.

<p class="note">El muro de papeleo</p>

## Solvente, y aun así fuera

Freelancers y expats se dan contra puertas cerradas, rechazados por no
tener una nómina estándar por muy solventes que sean. Los hosts también
están atrapados: el papeleo rígido es la única herramienta de riesgo que
existe, así que la usan. Urbiqo no tira ese papeleo; añade más formas de
entrar. Un inquilino puede nombrar un avalista, la ayuda de la familia
cuenta como respuesta real a cómo se cubre el alquiler, y un paso opcional
de contexto le deja contar a los hosts quién es: por qué se muda, cómo
vive, cómo alquiló antes. Los hosts deciden con más evidencia, y los
inquilinos solventes no tradicionales cruzan la puerta.

> El problema nunca fue el anuncio. Era el salto de fe a ambos lados del anuncio.

<p class="note">Trabajo de base</p>

## Mapear el recorrido completo

Antes de cualquier pantalla, mapeé el flujo completo de los dos lados:
cada punto de decisión desde el primer login hasta la verificación, la
solicitud y el pago. Se convirtió en la fuente de verdad de qué diseñar
primero. También fijó tres reglas que el producto debía respetar: mirar
anuncios sigue abierto sin cuenta, la verificación se vuelve obligatoria
al solicitar o publicar, y un perfil verificado se reutiliza entre
solicitudes.

<figure class="fig fig--bleed fig--sheet">
  <img src="/work/urbiqo/urbiqo-user-flow.png" alt="Flujo de usuario en carriles para inquilinos y hosts, desde el primer login hasta la verificación, la solicitud y el pago" loading="lazy" />
  <figcaption>El flujo completo, ambos lados, del primer login al pago.</figcaption>
</figure>

<figure class="fig fig--mid fig--pin">
  <img src="/work/urbiqo/urbiqo-user-flow-detail.png" alt="Detalle del flujo a tamaño de lectura: el host elige freemium o premium, paga con Visa, Bizum o PayPal, pasa la verificación y solo entonces llega al estado de host verificado" loading="lazy" />
  <figcaption>El mismo mapa a tamaño de lectura: el host elige freemium o premium, paga, y solo un host verificado puede publicar.</figcaption>
</figure>

## Dos lados, un problema

El producto tiene que sostener dos realidades a la vez.

<div class="board">
  <div>
    <p class="persona__k">EL INQUILINO · freelancer, solvente, sin nómina</p>
    <p>Ingresos anuales estables, sin contrato mensual fijo. Se atasca en
    la pantalla de subida porque el formulario espera una nómina que no
    existe. Necesita que las pruebas alternativas cuenten como evidencia
    legítima.</p>
  </div>
  <div>
    <p class="persona__k">EL HOST · un mes vacío vs un mes sin cobrar</p>
    <p>Un mes vacío cuesta dinero; un mes sin cobrar cuesta más. El papeleo
    es su medida de fiabilidad porque no hay nada mejor. Necesita una
    señal que no filtre a buenos inquilinos por los motivos equivocados.</p>
  </div>
</div>

La apuesta de Urbiqo: validar fiabilidad, no solo salario.

<p class="note">01 · Verificación</p>

## Un filtro más justo

Puse pruebas alternativas junto a la nómina clásica: extractos bancarios y
facturas. Las cartas del empleador y las declaraciones de impuestos se
consideraron y se descartaron, ambas van por detrás del flujo de caja
real. Los extractos y las facturas lo reflejan en tiempo real, y se
validan con OCR y revisión manual para los casos límite.

Un service blueprint mapea la lógica de backend que adapta los requisitos
de verificación al estado de la persona, aceptando facturas para
freelancers, por ejemplo.

<figure class="fig fig--paper fig--bleed">
  <img src="/work/urbiqo/urbiqo-service-blueprint.png" alt="Service blueprint que enfrenta las pantallas visibles con la lógica interna del sistema, con flujos condicionales para freelancers, validación OCR y una puntuación de riesgo que dispara revisión manual" loading="lazy" />
  <figcaption>El service blueprint: pantallas visibles frente a lógica interna, con flujos condicionales para freelancers, validación OCR y puntuación de riesgo que dispara revisión manual.</figcaption>
</figure>

<p class="note">02 · Confianza</p>

## Humanizar la transacción

Un perfil verificado viaja por delante del inquilino. El host ve la misma
tarjeta de verificación antes de cualquier encuentro: email, teléfono,
identidad y comprobación de antecedentes. Los hosts declaran también su
relación con el anuncio, propietario, inquilino o intermediario, para que
quien solicita sepa con quién trata. La confianza es visible en ambos
lados antes de que nadie reserve una visita.

<figure class="fig fig--paper fig--card">
  <img src="/work/urbiqo/urbiqo-live-trust-step.png" alt="Tarjeta de Trust & Safety en un anuncio vivo de Urbiqo: email verificado, teléfono pendiente, identidad pendiente" loading="lazy" />
  <figcaption>La tarjeta de verificación que el host ve antes de cualquier encuentro: un estado por señal.</figcaption>
</figure>

<p class="note">03 · Claridad</p>

## Desmitificar el proceso

Alquilar ya agobia bastante. La landing funciona como un filtro que da
calma: el recorrido de verificación comprimido en cuatro pasos lineales,
entendidos antes de que nadie cree una cuenta.

<p class="note">Posicionamiento</p>

## Dónde está Urbiqo

Mapeé el mercado de Madrid en dos ejes: complejidad del servicio y
especialización del público. El hueco: nadie combina verificación basada
en confianza con precios accesibles para freelancers, expats e inquilinos
no tradicionales.

<figure class="fig">
  <img class="fig__theme fig__theme--light" src="/work/urbiqo/urbiqo-positioning-light.png" alt="Mapa de posicionamiento de mercado que sitúa a Urbiqo como el jugador más especializado frente a plataformas masivas como Idealista y proveedores de servicio completo como Vitalhouse. La leyenda aún dice Arcano, tapado con cinta y corregido a mano a Urbiqo" loading="lazy" />
  <img class="fig__theme fig__theme--dark" src="/work/urbiqo/urbiqo-positioning-dark.png" alt="Mapa de posicionamiento de mercado que sitúa a Urbiqo como el jugador más especializado frente a plataformas masivas como Idealista y proveedores de servicio completo como Vitalhouse. La leyenda aún dice Arcano, tapado con cinta y corregido a mano a Urbiqo" loading="lazy" />
  <figcaption>El mapa de posicionamiento es anterior al cambio de nombre, de ahí la cinta: antes Arcano, ahora Urbiqo, sosteniendo el nicho entre lo masivo y el servicio completo.</figcaption>
</figure>

<p class="note">La capa de oficio</p>

## Detrás de las pantallas

El sistema por debajo: tokens, componentes y theming con variables para
modo oscuro y localización inglés/español. Construido junto al producto,
guardado como su propia referencia.

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-design-system.png" alt="Hoja de referencia del design system de Urbiqo con identidad de marca, tipografía, paleta de color y pantallas de UI móvil" loading="lazy" />
  <figcaption>El design system: identidad, tipografía, color y componentes en una sola referencia.</figcaption>
</figure>

<p class="note">Tercer acto</p>

## Diseñarlo era la parte fácil

El diseño estaba definido, el sistema documentado, los flujos mapeados.
Entonces lo construí, en Next.js. Construir tu propio diseño es la prueba
de usabilidad más honesta que va a tener jamás. Cada pantalla que yo había
firmado como diseñador tuvo que ganarse el sitio pasando por componentes
reales, datos reales y estados reales.

Algunas decisiones no sobrevivieron al contacto con el código. Un flujo
que en Figma parecía limpio se encontró con estados de carga, estados
vacíos y contenido real incómodo. Yo era el diseñador que tenía que
admitirlo y el developer que tenía que arreglarlo, así que el ciclo de
iteración corría en minutos, no en sprints. El producto en staging es el
resultado.

Un detalle solo apareció cuando hubo un front-end donde ejecutarlo: cada
título de sección se dibuja entrando desde la izquierda, detrás del
skyline terracota. Una decisión de movimiento tomada en código, no en el
archivo estático de diseño.

<div class="skyline-head" data-skyline>
  <span class="skyline-break" aria-hidden="true">
    <svg viewBox="0 0 275 124" fill="none" preserveAspectRatio="xMidYMid meet">
      <path d="M0 121H22.218V103.532H40.2439V77.5423H73.3613V121H90.968V60.9261L108.155 38.7711L127.02 60.9261V121H153.849V23.8592H167.264M167.264 23.8592V0M167.264 23.8592H183.194V121H207.088V55.8134H235.595V121H275" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </span>
  <p class="skyline-break-title">Por qué <span>Urbiqo</span></p>
</div>

Vivo en staging hoy: anuncios destacados; búsqueda con filtros de tipo,
precio y tamaño junto a un mapa; páginas de anuncio con galería,
comodidades y notas de barrio; solicitar y contactar al host; planes
freemium y premium para hosts, inquilinos siempre gratis; inglés y español
completos; un centro de ayuda, FAQs y un formulario de contacto que enruta
por tema. Los anuncios son datos de muestra por ahora, marcadores para
ejercitar los flujos de punta a punta hasta que llegue inventario real en
el lanzamiento.

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-live-search.png" alt="Página de búsqueda de Urbiqo: título, con filtros de tipo, precio y tamaño sobre la parrilla de resultados con seis anuncios de Madrid" loading="lazy" />
  <figcaption>Búsqueda en staging: filtros de tipo, precio y tamaño sobre los resultados.</figcaption>
</figure>

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-live-listing.png" alt="Anuncio de Urbiqo de una habitación privada en Salamanca: galería, comodidades y un mapa del barrio" loading="lazy" />
  <figcaption>Un anuncio vivo: galería, comodidades, notas de barrio y mapa.</figcaption>
</figure>

Tres decisiones de la construcción se ganaron sus propias etiquetas.

<p class="note">Build 01 · La tarjeta inquieta</p>

## La tarjeta que no sabía estarse quieta

Las descripciones reales varían de largo, así que el botón 'Más detalles'
clavado después del texto no podía estarse quieto. El título ahora se
limita a una línea, la descripción a tres y la tarjeta entera se convirtió
en el objetivo del clic.

<figure class="fig fig--paper fig--duo">
  <figure class="fig__tile"><img src="/work/urbiqo/urbiqo-card-design.png" alt="Una tarjeta de anuncio de Urbiqo tal como se diseñó: foto, precio, título, una fila de ubicación con pin, tipo de habitación y tamaño, comodidades, luego una descripción y un botón de Más detalles" loading="lazy" /><figcaption>Tal como se diseñó: una fila de ubicación y un botón tras una descripción de largo desconocido.</figcaption></figure>
  <figure class="fig__tile"><img src="/work/urbiqo/urbiqo-card-rebuilt.png" alt="La tarjeta de anuncio reconstruida: foto, precio, un título de una línea, tipo de habitación y tamaño y una descripción recortada, sin botón" loading="lazy" /><figcaption>Tal como se construyó: título de una línea, descripción de tres, la propia tarjeta es el objetivo.</figcaption></figure>
</figure>

<p class="note">Build 02 · Píldoras honestas</p>

## Una píldora nunca debería mentir sobre por qué está en rojo

El pensamiento de verificación sobrevivió en código como la tarjeta de
trust & safety de cada anuncio. Cada señal tiene su propio estado: un
perfil puede mostrar el email verificado mientras el teléfono y la
identidad siguen pendientes. Estados honestos, no una insignia binaria.

En el archivo de diseño los cuatro estados eran una leyenda: Active,
Pending, Attention e Issue, una píldora por señal. En código, cada píldora
necesitaba una fuente de verdad y una historia de fallo. Un usuario sin
sesión dejó de tratarse como error, y un único 'algo salió mal' se separó
en sus causas concretas, para que una píldora roja siempre signifique una
cosa específica.

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-host-dashboard.png" alt="El panel del host de Urbiqo: las señales de email, teléfono, identidad, cobros y contrato llevan cada una su propio estado, junto a una leyenda con Active, Pending, Attention e Issue" loading="lazy" />
  <figcaption>El panel del host: cinco señales, cinco estados independientes, una leyenda.</figcaption>
</figure>

<p class="note">Build 03 · La mitad de las palabras</p>

## Solo la mitad de las palabras son mías

La localización se diseñó como un modo de variables y salió como uno. Las
mismas pantallas corren en inglés y español de punta a punta.

<figure class="fig fig--paper fig--duo">
  <span class="fig__tile"><img src="/work/urbiqo/urbiqo-live-en.png" alt="El mismo anuncio de Urbiqo, en inglés" loading="lazy" /></span>
  <span class="fig__tile"><img src="/work/urbiqo/urbiqo-live-es.png" alt="El mismo anuncio de Urbiqo, en español" loading="lazy" /></span>
  <figcaption>El mismo anuncio, inglés y español, una sola build con variables.</figcaption>
</figure>

El archivo de diseño cambia cada string con un modo de variables. La
construcción me corrigió: los textos de interfaz se traducen, pero el
contenido de los anuncios vive en la base de datos, así que una página en
español puede seguir hablando inglés allí donde lo hacen los datos. Y el
español se alarga lo bastante como para recortar tarjetas que el inglés
nunca puso a prueba.

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-card-es-truncated.png" alt="Una tarjeta de anuncio de Urbiqo en español con el título recortado con puntos suspensivos donde el título inglés, más corto, sí cabía" loading="lazy" />
  <figcaption>El español se alarga: el mismo componente de tarjeta, recortado donde el título inglés cabía.</figcaption>
</figure>

## Lo que aprendí

Diseñado de punta a punta y luego construido de punta a punta, por una
persona, en Next.js. Ese es el resultado: una plataforma de dos lados
corriendo en staging en dos idiomas, de la búsqueda a la solicitud. Sin
métricas de usuarios todavía, el lanzamiento aún no ha llegado, así que lo
que sigue es lo que me enseñó construirlo, no lo que dijo el mercado.

Tres cosas que Urbiqo me enseñó:

- La confianza de dos lados es una disciplina propia. Todo lo que quita
  fricción a los inquilinos, menos documentos, comprobaciones más rápidas,
  añade riesgo percibido para los hosts. Equilibrar esa tensión dio forma
  a toda la estructura del producto.
- La distancia entre el concepto de un founder y un producto construible
  es mayor de lo que parece. La visión estaba clara. El trabajo de diseño
  fue convertirla en lógica condicional de verificación, estados de
  sistema y casos límite.
- La capa visual carga más confianza de la que yo le reconocía. Aquí la
  gente entrega documentos personales; cada color, interacción y línea de
  texto construye confianza o la erosiona. La próxima vez le reservaría
  más tiempo a esa capa.

<p class="note">Siendo honestos</p>

## Estado y siguientes pasos

Staging se puso en marcha el 6 de julio de 2026 y la plataforma corre en
staging.urbiqo.com, en inglés y español. Ahora está en QA activa; el día a
día es corregir lo que las pantallas, los estados y el contenido reales
destapan antes del lanzamiento. La apuesta: poner señales de confianza
verificables junto a los requisitos rígidos de contrato y el mercado se
abre por los dos lados. Sin demostrar hasta el lanzamiento, pero la lógica
se sostiene. Si puedes verificar fiabilidad sin exigir un contrato
indefinido, los hosts ganan seguridad y los inquilinos ganan acceso.

<div class="stats">
  <div><span>Construido</span><span>vivo en staging, por mí, en Next.js</span></div>
  <div><span>6 jul 2026</span><span>salió a staging, ahora en QA</span></div>
  <div><span>Q3 2026</span><span>lanzamiento previsto</span></div>
</div>
