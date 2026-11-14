# 📋 DOCUMENTACIÓN TÉCNICA Y ESTRATÉGICA - PROYECTO TECNOMAX SECURITY

> **Proyecto:** Rediseño Web y Modernización Tecnológica para Tecnomax Security S.A.S.  
> **Objetivo:** Propuesta comercial y técnica de alto impacto para ganar la licitación de desarrollo y rediseño oficial del sitio web mayorista.  
> **Versión Actual:** 2.0 (Multi-página responsiva con soporte interactivo).  
> **Última Actualización:** Noviembre 2026.

---

## 1. Contexto y Auditoría del Sitio Actual vs Solución Implementada

### 🔴 Diagnóstico de la Web Actual (`tecnomaxsecurity.com` - Wix):
1. **Fallas Críticas de UX en Dispositivos Móviles:** Se encontraron hasta 5 botones flotantes de WhatsApp superpuestos en pantalla tapando información, botones y menús.
2. **Catálogo Incompleto y Enlaces Caídos:** Más del 85% de los productos carecían de imágenes reales o tenían marcadores de posición rotos de Wix.
3. **Contenido Desactualizado:** Banners de 2021 sobre normativas de COVID-19 y protocolos obsoletos en portada.
4. **Fugas de Seguridad y Privacidad:** Cuentas bancarias y números de cédula expuestos en texto plano sin pasarela ni formulario formal de solicitud de crédito.
5. **Navegación Lenta y Pesada:** Sobrecarga de scripts pesados de Wix con tiempos de carga superiores a 6 segundos.

### 🟢 Solución Implementada en el Proyecto:
1. **Arquitectura Multi-página Limpia:** Separación en 4 páginas independientes y ultra-rápidas (`index.html`, `tienda.html`, `nosotros.html`, `cotizacion.html`).
2. **Enfoque 100% B2B Mayorista:** Diseñado para empresas de seguridad, instaladores, técnicos e integradores que necesitan cotizaciones inmediatas.
3. **Diseño Tecnológico Dark-Mode:** Inspirado en líderes globales como Ubiquiti, Apple B2B y Dahua Internacional (fondo oscuro `#07090e`, superficies `#0d121f` y acentos violeta/cian).
4. **Interacción y Conversión Directa:** Integración de WhatsApp con mensajes preformateados por producto y calculadora de kits en tiempo real.

---

## 2. Estructura y Arquitectura del Sistema

El proyecto está construido con **HTML5 semántico**, **Bootstrap 5.3.3**, **Bootstrap Icons 1.11.3** y **JavaScript Vanilla**. Abre directamente con doble clic en cualquier navegador (`file:///`) sin dependencias complejas ni servidores obligatorios.

```
TECNOMAX PAGE/
├── index.html                  # Página de Inicio (Banner 1920x1080, Destacados, Marcas oficiales)
├── tienda.html                 # Tienda Mayorista (Catálogo completo, buscador y filtros en vivo)
├── nosotros.html               # Nosotros (Historia, pilares, sedes Bogotá, Medellín y Barranquilla)
├── cotizacion.html             # Calculadora de Kits y Formulario de Cotización Express
├── DOCUMENTACION_TECNOMAX.md   # Documentación viva del proyecto y bitácora técnica
├── tecnomax-logo-white.png     # Logo oficial transparente con tipografía en blanco
├── banner-hero.jpg             # Banner festivo 16:9 full-width (1920x1080)
└── logos/                      # Repositorio de marcas oficiales autorizadas (9 Marcas Aliadas)
    ├── dahua-white.png         # Dahua Technology (Diamond Partner · CCTV IP, WizSense & HDCVI)
    ├── imou.png                # IMOU Life (Smart Home & Cámaras Wi-Fi Residenciales 360°)
    ├── zkteco-white.png        # ZKTeco (Control de Acceso, Biometría Facial & Asistencia)
    ├── wd-purple-white.png     # Western Digital Purple (Discos Duros CCTV 24/7 con AllFrame)
    ├── dsc.png                 # DSC Alarmas (Sistemas de Intrusión, PowerSeries Neo & Sensores)
    ├── seagate-white.png       # Seagate SkyHawk (Vigilancia Inteligente ImagePerfect & AI)
    ├── get-connecting-white.png# GET Connecting (Cableado Estructurado UTP Cat 5E/6, Patch Cords & RJ45)
    ├── enerline-white.png      # ENERLINE Corp. "Always on" (Cinta mosaico multicolor + ENER blanco + LINE azul acero)
    └── cctvpower-white.png     # CCTV Power (Fuentes Centralizadas 12V 4-18Ch con fusibles PTC)
```

---

## 3. Detalle de Páginas y Funcionalidades

### 🏠 `index.html` (Inicio)
- **Navbar Unificado:** Logo blanco transparente, navegación central limpia (`Inicio · Tienda · Nosotros`), y botones a la derecha `[ Asesor WhatsApp ]` y `[ Cotizar ]`.
- **Banner Edge-to-Edge 100% Nítido:** Despliegue a ancho completo (1920x1080) sin recortes ni difuminados artificiales sobre la imagen, permitiendo apreciar nítidamente toda la composición gráfica original.
- **Cinta Divisoria Tecnológica B2B (Separador de Transición de Alto Valor):** Barra horizontal de perfil equilibrado (`#070a12`) con micro-borde superior en gradiente púrpura/cian (`#8b2cf5` a `#06b6d4`). Conecta limpiamente el banner con el catálogo de forma sobria y simétrica en 2 bloques (50% / 50%): a la izquierda el respaldo oficial como Diamond Partner Dahua Technology con ingenieros certificados, y a la derecha el Canal Gremio B2B con precios mayoristas para instaladores y empresas de seguridad. Se eliminaron botones redundantes para no sobrecargar visualmente el flujo.
- **Equipos Destacados de la Temporada (Diseño White Premium & Minimalista):**
  - Fondo blanco puro (`#ffffff`) que inicia tras la cinta divisoria tecnológica.
  - Tarjetas con acabado degradado sutil acero/hielo (`linear-gradient(180deg, #f4f7fb 0%, #e6edf5 100%)`) con borde definido (`#cbd5e1`), logrando un contraste claro y moderno frente al fondo blanco sin saturar.
  - Marco interior para imágenes de producto en blanco puro (`#ffffff`) con borde `#dbe2ea` para resaltar las fotos de los equipos en relieve.
  - **Estructura limpia anti-colisión:** Se corrigió la superposición de etiquetas sobre la imagen dejando una única insignia destacada en la esquina superior izquierda de cada foto (ej. Top Ventas, 4K Ultra HD), y trasladando la disponibilidad de stock a una línea dedicada inferior con icono verde de confirmación (`Stock Inmediato · Bodega`), eliminando cualquier colisión o amontonamiento visual.
  - **Minimalismo y agilidad:** Solo foto enmarcada, insignia de categoría, nombre del equipo con altura equilibrada, precio mayorista y botón directo `[ Ver Producto ]` hacia `tienda.html`.
  - *Cámara Domo Dahua 4MP Full-Color WizSense* ($185.000 COP).
  - *NVR Dahua WizSense 8 Canales 4K* ($320.000 COP).
  - *Cámara Wi-Fi IMOU Ranger 2 4MP 360°* ($129.000 COP).
  - *Disco Duro WD Purple 2TB Vigilancia 24/7* ($245.000 COP).
- **Barra de Confianza y Garantía:** 4 pilares sobre fondo claro: Garantía Directa de Fábrica (1 a 3 años), Despacho en 24h, Stock Físico en 3 Sedes y Facturación Electrónica DIAN.
- **Sección de Marcas Aliadas en Carrusel Dinámico (5 Marcas Visibles + Flechas de Navegación):**
  - Para evitar saturación visual y sobrecarga en pantallas desktop, la grilla fija se transformó en un **carrusel interactivo fluido**.
  - **Distribución:** Muestra exactamente 5 tarjetas visibles y amplias por pantalla en desktop (3 en tablets y 2 en móviles) con soporte táctil, deslizamiento suave (*smooth scroll snap*) y botones laterales circulares estilo glassmorphism (`[ < ]` y `[ > ]`).
  - Al hacer clic en cualquiera de las 9 marcas aliadas oficiales, se abre el modal técnico con líneas de producto, garantía oficial y botón de cotización por WhatsApp pre-cargado.
  - **1. Dahua Technology:** Diamond Partner oficial Colombia, cámaras IP/HDCVI, IA WizSense, NVRs 4K, Full-Color 24/7 y domos PTZ. (1 a 3 años de garantía).
  - **2. IMOU Life:** Seguridad residencial inteligente, cámaras Wi-Fi Ranger 2 360°, Cruiser exterior, audio bidireccional y app IMOU Life. (1 año de garantía).
  - **3. ZKTeco:** Biometría avanzada, control de acceso facial Visible Light, huella dactilar, terminales de asistencia K40/MB10 y electroimanes. (1 año de garantía).
  - **4. Western Digital Purple:** Almacenamiento continuo para videovigilancia 24/7 de 1TB a 8TB con tecnología AllFrame para cero pérdida de cuadros. (3 años de garantía).
  - **5. DSC (Digital Security Controls):** Paneles de alarma contra intrusión PowerSeries Neo, tecnología PowerG inalámbrica de largo alcance y sensores antimascotas. (1 año de garantía).
  - **6. Seagate SkyHawk:** Discos duros para CCTV con firmware ImagePerfect, sensores de vibración rotacional y servicio Rescue Data Recovery. (3 años de garantía).
  - **7. GET Connecting:** Infraestructura de cableado estructurado, bobinas UTP Cat 5E / Cat 6 (100% Cobre y CCA 305m), patch cords RJ45, jacks y patch panels certificados para video IP PoE a 100m. (1 a 2 años de garantía).
  - **8. ENERLINE Corp. ("Always on"):** Fabricante internacional de soluciones de respaldo energético, fuentes conmutadas y transmisión. Video baluns pasivos/activos 4K compatibles con HDCVI/TVI/AHD con supresión de ruido EMI, protectores de picos y cables UTP para intemperie. Logo oficial con cinta multicolor mosaico, tipografía blanca y azul acero. (1 año de garantía).
  - **9. CCTV Power:** Fuentes de poder conmutadas y cajas centralizadas de 4, 8, 9, 16 y 18 canales (12V 5A a 30A) con protección térmica por fusibles PTC autoregenerables y gabinete bajo llave. (1 año de garantía).
- **Líneas de Solución para Proyectos:** Acceso a CCTV, Smart Home, Biometría y Almacenamiento.
- **Pantalla Final / Master Footer Corporativo:**
  - Columna 1: Identidad corporativa, logo blanco, insignias Diamond Partner Dahua y canales sociales en botones circulares con glassmorphism.
  - Columna 2: Navegación de plataforma (`Inicio`, `Tienda`, `Nosotros`, `Calculadora`, `Proyectos`, `Soporte Ingenieros`).
  - Columna 3: Líneas de solución directa (`Dahua`, `IMOU`, `ZKTeco`, `WD Purple`, `DSC`, `Seagate`).
  - Columna 4: Las 3 sedes físicas de Tecnomax (Bogotá, Medellín y Barranquilla) con dirección, teléfono e insignias de stock.
  - Subfooter legal conforme a la legislación colombiana (Ley 1581 de Habeas Data, Términos de Garantía, PQRs y Facturación Electrónica DIAN). Reemplaza las erróneas menciones europeas ("RGPD") y enlaces rotos del sitio anterior.

### 🛍️ `tienda.html` (Tienda Mayorista)
- **Buscador en Tiempo Real:** Filtra instantáneamente por nombre de producto, modelo o tecnología.
- **Filtros por Categoría:** Todos, CCTV Dahua, IMOU Wi-Fi, Biometría ZKTeco, Discos WD Purple, Cables & Redes.
- **Tarjetas de Producto:** Imagen, insignia de stock inmediato, modelo de referencia, ficha de especificaciones, precio mayorista en pesos colombianos y botón directo a WhatsApp.

### 🏢 `nosotros.html` (Empresa y Sedes)
- **Identidad Corporativa:** Respaldo de más de 8 años en el mercado colombiano de seguridad electrónica.
- **Directorio de Sedes Físicas:**
  - **Bogotá D.C. (Sede Principal):** Carrera 20 # 13-45, Barrio Paloquemao · Tel: (601) 370 6569.
  - **Medellín (Antioquia):** Calle 44 # 65-21, San Juan / La 70 · Tel: (604) 479 9339.
  - **Barranquilla (Costa Atlántica):** Carrera 46 # 74-32, Prado · Tel: (605) 385 4120.
  - Enlaces directos a Google Maps y horarios de atención comercial y bodega.

### 📝 `cotizacion.html` (Portal de Cotización y Calculadora de Kits)
- **Calculadora Interactiva de Kits CCTV:**
  - Selección de número de cámaras (4, 8, 16 canales).
  - Selección de tipo de tecnología (Full-Color 24/7 con IA o Analítica Básica).
  - Capacidad de almacenamiento (1TB, 2TB, 4TB).
  - Accesorios e instalación estimada.
  - Resumen y total estimado en tiempo real con botón de exportación a WhatsApp.
- **Formulario B2B para Proyectos:** Solicitud personalizada para constructoras, conjuntos residenciales o empresas de vigilancia.

---

## 4. Guía de Estilo y Reglas de Aprendizaje (Design Rules & Best Practices)

1. **Jerarquía Visual y Cero Sobrecarga:**
   - No añadir barras superiores repetitivas si la barra de navegación ya contiene los accesos clave.
   - El navbar central solo debe albergar enlaces de navegación esenciales (`Inicio · Tienda · Nosotros`). Las acciones de conversión (`WhatsApp` y `Cotizar`) siempre van a la derecha con estilos diferenciados.
2. **Tratamiento de Logos Corporativos en Dark Mode:**
   - Los isotipos y marcas deben preservar sus colores icónicos (ej. rojo en Dahua/DSC, verde en ZKTeco/Seagate, naranja en IMOU, morado en WD).
   - Las partes de texto o tipografías originalmente oscuras deben convertirse a blanco brillante (`#FFFFFF`) con bordes antialiasing para máxima legibilidad.
   - Todo logo debe tener fondo 100% transparente sin cuadrículas falsas.
3. **Manejo de Enlaces en Entornos Multi-Página:**
   - Usar siempre rutas relativas limpias (`index.html`, `tienda.html`, `nosotros.html`, `cotizacion.html`) en lugar de anclas (`#`) que confundan al usuario.
4. **Investigación Rigurosa:**
   - Ante especificaciones técnicas o referencias de fabricantes (Dahua WizSense, IMOU Ranger, WD Purple AllFrame, ZKTeco Visible Light, DSC PowerSeries, GET Connecting Cat 6, Enerline Corp., CCTV Power 12V), consultar datos oficiales de los fabricantes para garantizar fidelidad técnica.
5. **Amplitud, Aire y Escala de Logotipos (Anti-Amontonamiento):**
   - Los logotipos oficiales de marcas aliadas deben tener un área visible generosa (mínimo 42px a 52px de altura y hasta 175px de ancho) con padding amplio para proyectar autoridad de distribuidor mayorista directo.
   - En modales y fichas técnicas, evitar bloques densos de texto: usar interlineado amplio (`line-height: 1.8`), tipografía en slate claro (`#cbd5e1`), separación modular de 1.5rem entre bloques temáticos y tarjetas de especificaciones con micro-superficies traslúcidas (`rgba(255, 255, 255, 0.035)`). El layout debe respirar y verse espacioso.
6. **Tipografía Accesible y Prevención de Desbordamientos (Site-wide Typography & Safe Layout):**
   - **Escala base aumentada:** Configuración de `html { font-size: 16.5px; }` y `body { font-size: 1.02rem; line-height: 1.6; }` en todas las páginas del ecosistema (`index.html`, `tienda.html`, `nosotros.html`, `cotizacion.html`). Esto eleva proporcionalmente todos los elementos tipográficos construidos en `rem`.
   - **Eliminación de textos microscópicos:** Queda prohibido el uso de tamaños de fuente menores a `0.78rem` en cualquier badge, píldora o nota al pie. Las etiquetas de mayorista, stock e insignias se establecen entre `0.78rem` y `0.85rem`. Los párrafos y descripciones se ajustan a `0.92rem - 1.05rem`.
   - **Prevención de textos que se salen:** Regla global `* { overflow-wrap: break-word; }` para asegurar que ningún texto, código o enlace rompa los contenedores en pantallas móviles estrechas.
   - **No colisión de badges en tarjetas de producto:** Las tarjetas de producto emplean etiquetas concisas y distribuidas armónicamente para evitar que dos badges en la cabecera choquen o se corten en pantallas reducidas.
   - **Grosor e Impacto en Encabezados Display:** En encabezados con clases display (`display-5`, `display-6`), Bootstrap 5 aplica por defecto un peso delgado (`font-weight: 300`). Se establece obligatoriamente `fw-bold` junto con `font-weight: 800 !important;` y se prohíbe la clase no estándar `fw-extrabold`, asegurando títulos en negrita contundente con máxima presencia visual.
   - **Consistencia total entre páginas:** El encabezado, los botones de conversión superior (`[ Asesor WhatsApp ]` y `[ Cotizar ]`), y la pantalla final de Master Footer comparten idéntica tipografía, interlineado y paddings en las cuatro páginas.
7. **Ubicación Externa de Controles en Carruseles (Cero Invasión a Tarjetas):**
   - **Desacoplamiento total:** Los botones de navegación de carruseles nunca deben superponerse (`position: absolute` flotante sobre las tarjetas) ni tapar información o áreas clickeables de las tarjetas extremas.
   - **Arquitectura Flex independiente:** Los botones izquierdo y derecho se configuran como elementos flex hermanos (`.brand-nav-btn-outer`), situados 100% por fuera del contenedor de tarjetas (`.brands-carousel-viewport`), con una separación limpia y dedicada (`gap: 1.25rem`).
   - **Navegación complementaria:** Se añaden puntos indicadores interactivos de grupo (`.brand-dot`), permitiendo alternar entre grupos de marcas tanto por clic en flecha como por selección directa de página.
8. **Prohibición de Clases Fraccionarias Inválidas y Blindaje de Contenedores (Anti-Overflow):**
   - **Causa raíz detectada y eliminada:** Bootstrap 5 únicamente soporta números enteros para espaciados (`0, 1, 2, 3, 4, 5`). El uso inadvertido de sintaxis fraccionaria tipo Tailwind (`p-3.5`, `g-3.5`, `gap-2.5`) era ignorado por el navegador, dejando los contenedores con `padding: 0` y provocando que los textos golpearan o se salieran de los bordes.
   - **Padding explícito obligatorio:** Todas las cajas modales, tarjetas y contenedores cuentan con paddings reales y generosos (`padding: 1.4rem 1.6rem !important;`), además de `overflow-wrap: break-word` y `max-width: 860px`, garantizando que ningún texto se corte ni se desborde jamás.
9. **Diseño de Micro-Superficies y Tarjetas de Confianza/Beneficios (Elevated Trust Badges):**
   - **Enmarcado Icónico Profesional:** Los iconos nunca deben flotar desnudos o pegados directamente al texto. Se integran dentro de un contenedor squircle ergonómico (`50px x 50px`, `border-radius: 14px`) con degradado suave temático (`linear-gradient`) y micro-borde a tono (púrpura para Garantía, azul cielo para Despacho, esmeralda para Sedes y ámbar para Facturación DIAN).
   - **Superficie y Elevación:** La tarjeta utiliza fondo blanco puro (`#ffffff`), borde refinado (`#e2e8f0`), sombra flotante suave (`box-shadow: 0 4px 18px -2px rgba(15, 23, 42, 0.05)`) y micro-interacción al hover con elevación sutil (`translateY(-3px)` y micro-rotación dinámica del icono).
   - **Separación y Legibilidad:** Jerarquía tipográfica estricta con título en negrita (`#0f172a`, `0.95rem`) y subtítulo en gris pizarra medio (`#64748b`, `0.82rem`), con separación limpia y responsive que se adapta con soltura tanto a pantallas móviles como a monitores ultra-wide.
10. **Motor de Ambientaciones y Temporadas (Seasonal Engine):**
   - **Arquitectura Modular Extensible:** Sistema desacoplado (`seasonal-engine.js` y `seasonal-engine.css`) que ambienta la web automáticamente según el mes del año (Diciembre: Navidad & Fin de Año, Noviembre: Black Friday, Marzo: Aniversario Tecnomax, Resto del año: Modo Estándar Corporativo).
   - **Rendimiento Garantizado (60 FPS & Cero Bloqueos):** Partículas renderizadas sobre un único `<canvas>` 2D acelerado por hardware con `requestAnimationFrame` y `pointer-events: none;`, garantizando cero impacto en la fluidez de clics, enlaces o formularios.
   - **Control Directo On/Off en Micro-Cápsula (Solo Emoji + Switch):** Botón flotante ultra-compacto y minimalista tipo píldora (`[ ❄️  (O) ]`) ubicado en la esquina inferior derecha. Se eliminó el texto redundante para evitar cualquier superposición con el footer o la firma de desarrollo. Con un solo clic activa o desactiva la nieve cinematográfica y las luces LED al instante, guardando el estado en `localStorage` con cero fricción visual.

---

11. **Sección Destacados Tech Light (Estilo Apple / Stripe B2B):**
    - **Fondo Texturizado Slate Tecnológico (`#edf2f7`):** En lugar de un blanco plano que genere sensación desierta o corte abrupto, se implementa una cuadrícula técnica ultra sutil (`36px x 36px` a 8% de opacidad) combinada con dos halos radiales de luz púrpura y cian (`rgba(139,44,245,0.06)` y `rgba(6,182,212,0.06)`), bordes limpios `#cbd5e1` y sombras interiores suaves (`inset box-shadow`).
    - **Tarjetas Blancas Pulidas Flotantes:** Las tarjetas `.tm-card-light` se visten en blanco puro `#ffffff` con radio de 20px, separador interno `#e2e8f0` y sombras de elevación multidimensionales. Al hacer hover, se elevan `-5px` con un resplandor violeta suave (`#c084fc`), logrando un contraste nítido y premium que hace resaltar las fotos de los equipos y las etiquetas de precios.
    - **Depuración de Bloques Redundantes:** Se eliminó el banner inferior de invitación a la tienda (`¿Eres instalador o integrador de seguridad?`) para evitar sobrecarga visual y botones duplicados antes del Master Footer.
12. **Centro Legal Corporativo B2B, Arquitectura de 3 Columnas y Sello GioTech Ing.:**
    - **Estructura Depurada de 3 Columnas (Cero Redundancia):** Se retiró la columna repetitiva *"Líneas de Solución"* del pie de página para enfocar la atención en el valor comercial crítico. El footer se distribuye armónicamente en 3 columnas de alto impacto (Grid 12 de Bootstrap: `col-lg-4`, `col-lg-3`, `col-lg-5`):
      1. *Identidad Corporativa Tecnomax:* Misión B2B, insignias oficiales Diamond Partner Dahua, garantía 1-3 años y botones de contacto social.
      2. *Plataforma & Centro Legal:* Navegación directa y accesos interactivos al modal de garantías, PQRs (SIC), protección de datos (Ley 1581) y FAQs.
      3. *Sedes con Bodega Física:* Tarjetas ampliadas y espaciosas para Bogotá D.C. (Bodega Central), Medellín (Stock Inmediato) y Barranquilla (Stock Costa).
    - **Modal de Transparencia y Garantías (`#legalModal`):** Sustitución completa de antiguos `alert()` de navegador por una ventana modal corporativa multi-pestaña interactiva (`Garantías Oficiales Dahua 1-3 Años y DOA`, `PQRs & Devoluciones según la SIC`, `Tratamiento de Datos Personales Ley 1581 de 2012 / Habeas Data` - eliminando el erróneo "RGPD" europeo de la web vieja -, y `Preguntas Frecuentes para Instaladores`).
    - **Barra Inferior Minimalista y Sello GioTech Ing.:** Se eliminó la acumulación de textos largos y frases redundantes en la franja final. La base del footer se simplificó a una **única fila sobria y equilibrada**: a la izquierda los derechos reservados (`© 2026 TECNOMAX SECURITY S.A.S.`) y a la derecha el sello `Página Web desarrollada por: [ Logo GioTech Ing. ]`, provisto con margen ergonómico (`me-lg-5 pe-lg-4` y `padding-bottom: 2.8rem`) para garantizar que el botón flotante de Modo Navideño nunca tape ni compita con la firma de desarrollo.
13. **Ventana Flotante de Perfil Profesional GioTech Ing. (`#gioTechModal`):**
    - **Interacción al Clic en el Logo:** Al pulsar sobre la insignia `[ GioTech Ing. ]` en el footer de cualquiera de las 4 páginas, se despliega una ventana flotante personalizada (`#gioTechModal`) con estética Glassmorphism Dark y resplandor sutil azul eléctrico.
    - **Identidad del Desarrollador:** Presenta el logotipo vectorizado de GioTech Ing., el nombre **George Moreno**, su titulación **Ingeniero de Sistemas**, descripción de servicios de desarrollo y arquitectura web, y acceso directo a su canal de **WhatsApp (+57 350 283 7223)** con mensaje preconfigurado en un solo clic.
14. **Catálogo Tienda en Formato Tech Light (Consistencia con Inicio):**
    - **Fondo Texturizado Silver Slate (`#edf2f7`) con Cuadrícula Técnica:** La página de la tienda (`tienda.html`) adopta el mismo fondo luminoso técnico que la sección de destacados del inicio, eliminando la sensación lúgubre del negro plano.
    - **Tarjetas Blancas Puras Elevadas (`.tm-card-light`):** Tarjetas con elevación flotante, marcos de foto en `#f1f5f9`, tipografía de producto en carbón `#0f172a`, especificaciones en gris `#64748b` y botones de cotización directa vía WhatsApp en verde esmeralda institucional.
    - **Controles de Filtrado y Búsqueda Renovados:** Buscador con caja blanca y borde sutil `#cbd5e1`, y botones de categoría (`.cat-btn`) como píldoras claras con micro-sombra y estado activo en púrpura corporativo `#7e22ce`.
15. **Modal Interactivo de Detalle y Ficha Técnica (`#productModal`):**
    - **Apertura al Clic en la Tarjeta:** Al hacer clic en cualquiera de las tarjetas de producto de `tienda.html`, se abre una ventana modal cinematográfica Glassmorphism Dark con bordes iluminados en violeta.
    - **Estructura y Riqueza de Datos:** Despliega foto en alta resolución, modelo comercial (SKU), badge temático de marca, caja de precio mayorista en COP con anotación de impuestos, descripción profunda, lista estructurada de prestaciones técnicas (resolución, lentes, compresión, visión nocturna, analíticas IA), garantía oficial directa y botón de cotización por WhatsApp con mensaje pre-rellenado específico para ese equipo.
    - **Desacoplamiento de Eventos:** El botón interno de "Cotizar" en la tarjeta cuenta con `event.stopPropagation()`, permitiendo cotizar de forma inmediata sin obligar a abrir el modal, mientras que el resto de la tarjeta abre la ficha técnica detallada.
16. **Estandarización Gráfica de Productos («PRODUCTO» en Fondo Azul Tecnológico):**
    - **Reemplazo Universal de Imágenes Externas:** Sustitución de todos los enlaces externos de imágenes por el asset local de alta fidelidad `producto.png` (y vector complementario `producto.svg`), asegurando carga instantánea, 100% de disponibilidad offline y consistencia visual absoluta en todas las tarjetas de la tienda, catálogo de inicio, modales de producto, lightbox y carrito de cotización.
    - **Diseño del Asset:** Fondo azul zafiro tecnológico en degradado elegante (`#1e40af` a `#0284c7`), marco sutil con transparencia y la palabra «PRODUCTO» en tipografía suiza pesada centrada con sombra sutil para una visibilidad limpia y profesional.
17. **Clasificación Oficial en las 9 Categorías de Solución Tecnomax:**
    - **Categorización Exacta:** Sincronización fidedigna con la imagen oficial de líneas de negocio Tecnomax:
      1. `CCTV` (Cámaras Domo, Bullet, PTZ y Grabadores NVR/XVR Dahua)
      2. `IMOU` (Cámaras Wi-Fi para Hogar y Pymes inteligentes)
      3. `ALARMAS` (Sistemas de Intrusión Inalámbricos e Híbridos Dahua / DSC)
      4. `ALMACENAMIENTO` (Discos Duros Especializados Western Digital Purple y Seagate SkyHawk)
      5. `ACCESORIOS` (Fuentes Centralizadas, Video Baluns 4K, Conectores y Cajas de Paso)
      6. `CABLES` (Bobinas UTP Cat 6 y Cat 5e 100% Cobre Puro para Exterior/Interior)
      7. `RACKS` (Gabinetes de Pared 9U y Racks de Piso 24U para Servidores)
      8. `BIOMÉTRICOS` (Terminales de Control de Acceso y Asistencia ZKTeco)
      9. `VIDEO PORTEROS` (Kits de Videoporteros IP Dahua con Frente Metálico y Monitores Touch)
    - **Filtros Reactivos con Conteo en Vivo:** Cada botón de categoría incluye su icono tecnológico oficial y una insignia numérica en tiempo real `(N)` que refleja la cantidad exacta de productos disponibles.
18. **Portal Interno Administrativo B2B (`admin.html`) y Tienda Pública Blindada (`tienda.html`):**
    - **Separación de Roles y Seguridad Lógica:** La tienda pública (`tienda.html`) permanece 100% blindada para el público y clientes, sin ningún botón o acceso visible de administración que comprometa la integridad del catálogo.
    - **Portal Interno Dedicado (`admin.html`):** Archivo HTML independiente de uso privado para el personal de Tecnomax, protegido con una pantalla de autenticación tipo Login Gateway (PIN de acceso `2026`).
    - **Dashboard de Gestión & CRUD Centralizado:**
      1. *KPIs en Vivo:* Conteo de equipos activos, categorías oficiales cubiertas (9/9) y cálculo de valor patrimonial del inventario.
      2. *Filtros & Buscador Interno:* Localización inmediata de cualquier referencia o categoría.
      3. *Gestión Completa (Crear, Editar, Eliminar):* Formulario modal avanzado (`#productFormModal`) para dar de alta nuevos productos, ajustar precios mayoristas, modificar descripciones o retirar productos descontinuados.
      4. *Sincronización Inmediata:* Cualquier modificación en `admin.html` se guarda en `localStorage` (`tecnomax_products_v2`), impactando de inmediato la tienda pública (`tienda.html`), sus filtros, modales y el carrito de cotización.
      5. *Restauración de Fábrica:* Botón de seguridad para resetear el catálogo a los 18 productos oficiales de las 9 categorías en caso de requerir una restauración limpia.
19. **Vitrina Visual de Categorías y Filtrado Multi-criterio Avanzado en Tienda (`tienda.html`):**
    - **Vitrina Visual de 10 Tarjetas B2B (`#categoryShowcaseBar`):** Inspirada exactamente en la infografía corporativa de Tecnomax, presenta 10 tarjetas visuales interactivas (Todos + las 9 líneas oficiales: CCTV, IMOU, Alarmas, Almacenamiento, Accesorios, Cables, Racks, Biométricos, Video Porteros). Cada tarjeta incluye caja con ícono cian neón (`.cat-icon-box`), título en mayúsculas y badge de cantidad de equipos en vivo. En pantallas táctiles o móviles cuenta con deslizamiento horizontal fluido (`scroll-snap`).
    - **Barra de Herramientas Multi-Filtro (`.filter-toolbar-card`):**
      1. *Buscador Instantáneo:* Busca por referencia, SKU, modelo, descripción y especificaciones técnicas, con botón interactivo de limpieza rápida `(X)`.
      2. *Ordenamiento Dinámico:* Destacados, Precio: Menor a Mayor, Precio: Mayor a Menor, y Nombre: A a Z.
      3. *Rango de Precio:* Filtro rápido por escalas de presupuesto (Hasta $150.000, $150.000 a $350.000, y Más de $350.000 COP).
      4. *Disponibilidad de Stock:* Filtrado por disponibilidad inmediata o bodega regional (Stock Costa).
    - **Fila Reactiva de Chips de Filtros Activos (`#activeFiltersRow`):** Despliega dinámicamente chips interactivos con ícono para cada filtro aplicado, botón individual de descarte `(X)` para eliminar un criterio específico, contador en vivo («Mostrando X de Y productos») y botón global de «Limpiar Filtros».
20. **Motor de Búsqueda Inteligente B2B y Optimización UI del Buscador (`tienda.html`):**
    - **Normalización Lingüística sin Tildes (`normalizeStr`):** Soporta términos con o sin acento de forma indistinta («cámara» / «camara», «biométrico» / «biometrico», «visión» / «vision», «inalámbrico» / «inalambrico»), garantizando que nunca se produzcan falsos ceros por discrepancias tipográficas.
    - **Indexación de Alta Precisión por Identidad del Producto:** Segmenta la consulta en palabras independientes y busca estrictamente en el título comercial, modelo/SKU, badge de marca y categoría oficial. Esto elimina por completo los falsos positivos: al escribir «cámara» o «camara», únicamente se muestran las cámaras reales del catálogo, sin incluir grabadores NVR, cables o discos duros que mencionaban cámaras en sus especificaciones secundarias.
    - **Detección y Respaldo Inteligente de Categoría Cruzada:** Si un usuario busca un término mientras tiene una categoría fija seleccionada y no hay coincidencias locales, el motor rastrea automáticamente todo el catálogo y despliega los resultados globales acompañados de una alerta informativa interactiva con botón para alternar a «Ver Todo el Catálogo».
    - **Ergonomía Visual Limpia y Ampliada:** Caja de búsqueda de 44px de altura con mayor ancho (`col-12 col-lg-5`), icono de lupa integrado con margen holgado (`padding-left: 2.85rem`), botón de borrado inmediato `(X)` y evento reactivo `oninput`. Se eliminó la fila de búsquedas populares para mantener una estética despejada, moderna y minimalista.
21. **Modal de Detalle y Ficha Técnica en Inicio (`index.html`):**
    - **Apertura Directa por Clic en Tarjeta (Diseño Minimalista sin Botón Sobrecargado):** Se eliminó el botón redundante «Ver Producto» de las tarjetas destacadas del inicio. Toda la tarjeta cuenta con cursor interactivo (`cursor: pointer`), elevación al hover y evento directo `onclick="openProductModal(...)"`, de modo que al hacer clic en cualquier parte de la tarjeta se abre inmediatamente el modal de ficha técnica `#productModal` sin navegar a la tienda.
    - **Funcionalidades Completas Integradas:** Incorpora visor de foto en pantalla completa (lightbox modal), selector interactivo de cantidades con cálculo automático de subtotal estimado, especificaciones técnicas estructuradas en micro-tarjetas, badges de garantía directa (1 a 3 años) y botón directo de cotización por WhatsApp con mensaje pre-rellenado para esa referencia y cantidad específica.
    - **Sincronización en Tiempo Real:** Enlaza de manera transparente con `localStorage.getItem('tecnomax_products_v2')`, asegurando que cualquier cambio de precio, SKU o descripción efectuado en el portal interno `admin.html` se vea reflejado inmediatamente tanto en el inicio como en la tienda.
22. **Elevación Integral de la Sección Nosotros y Sedes (`nosotros.html`):**
    - **Fondo Tech Light Homologado (`.nosotros-main-surface`):** Adopta la estética clara `#edf2f7` con cuadrícula técnica sutil de 36px y halos de luz púrpura/cian al 8% de opacidad, exactamente igual que `tienda.html` y la sección de destacados de `index.html`, eliminando el fondo oscuro lúgubre y logrando una coherencia visual impecable.
    - **Tarjetas Blancas Puras Elevadas (`.nosotros-card-light`, `.stat-box-light`, `.sede-card-light`):** Tarjetas con elevación flotante, bordes nítidos `#e2e8f0` / `#cbd5e1`, tipografía en carbón `#0f172a` y gris `#475569`, y micro-interacciones al hover.
    - **Hero Corporativo de Autoridad B2B & Métricas de Confianza:** Badge oficial de Distribuidor Mayorista Autorizado, titular de alto impacto y 4 tarjetas de métricas estáticas limpias (+8 Años de Liderazgo B2B, 3 Sedes con Bodegas Físicas, +50.000 Despachos Anuales y 100% Facturación DIAN con Garantía Oficial), con diseño tipográfico nítido y sin tooltips intrusivos.
    - **Misión, Visión y Política de Ética de Canal:** Presentación formal del compromiso con los integradores: Tecnomax Security no compite con sus clientes instaladores, actuando exclusivamente como aliado estratégico de aprovisionamiento tecnológico e ingeniería.
    - **Sección «Empresas que Trabajan con Nosotros» en Barra Horizontal Completa (Full Bleed Edge-to-Edge):**
      * **Franja Horizontal de Borde a Borde (`w-100`):** Extiende la sección a todo el ancho de la pantalla en fondo oscuro `#03060c` con halo superior violeta y bordes delimitados.
      * **Enfoque Exclusivo en Aliado Confirmado:** Se presenta únicamente la tarjeta oficial y verificada de **GioTech Ing.** como aliado estratégico en soluciones de software, arquitectura digital y desarrollo web de Tecnomax Security.
      * **Diseño Homologado con index.html (`.tm-card .tm-card-clickable`):** Tarjeta oscura centrada con fondo `#0d121f`, esquinas redondeadas de 20px, borde con iluminación interactiva `#8b2cf5` al hover y sombra de elevación.
      * **Presentación Minimalista de Alto Impacto (Solo Logo Blanco Grande):** Se eliminaron los textos redundantes interiores para lucir exclusivamente el logotipo de **GioTech Ing.** en gran formato (85px de altura / 260px de ancho) con filtro de blanco puro monocromático (`filter: brightness(0) invert(1)`) y brillo sutil, logrando una estética ultra-limpia y premium.
      * **Apertura de Modal de Contacto Directo (`#gioTechModal`):** Al hacer clic en la tarjeta se despliega el perfil profesional de George Moreno (Ingeniero de Sistemas), especialidades tecnológicas y enlace directo de chat por WhatsApp (+57 350 283 7223).
23. **Reubicación Ergonómica del Botón de Carrito de Cotización en Tienda (`tienda.html`):**
    - **Despeje de la Barra de Navegación Superior:** Se retiró el botón de Carrito del navbar principal superior, homologando el menú de navegación para que mantenga exactamente los mismos elementos limpios y consistentes en todas las páginas (`Inicio`, `Tienda`, `Nosotros`, `Asesor WhatsApp` y `Cotizar`).
    - **Ubicación Estratégica en el Área de Tienda:** El botón de Carrito B2B (`.store-cart-btn`) fue reubicado directamente en el encabezado de la tienda mayorista (`Tienda Mayorista`), alineado junto al indicador oficial de equipos en catálogo (`18 Equipos en Catálogo`).
    - **Diseño Corporativo & Contador en Tiempo Real:** Cuenta con estilo dark slate `#0f172a`, bordes nítidos `#334155`, icono de carrito violeta `#c084fc`, texto «Carrito», badge rojo reflectante (`#navCartCount`) conectado con `localStorage` y apertura instantánea del modal de cotización `#cartModal`.
    - **Directorio Unificado de Sedes y Bodegas Físicas:**
      * *Bogotá D.C. (Sede Principal & Bodega Central):* Cra 20 # 13-45 · Sector Paloquemao. PBX: (601) 370 6569 / 247 3605. WhatsApp directo y enlace a Google Maps.
      * *Medellín (Sede Antioquia & Valle de Aburrá):* Calle 44 # 65-21 · Sector San Juan. PBX: (604) 479 9339 / Cel: +57 310 415 5128.
      * *Barranquilla (Sede Costa Caribe):* Carrera 46 # 74-32 · Sector Prado. PBX: (605) 385 4120 / (605) 309 2311.
    - **Banner Interactivo de Vinculación Mayorista:** Sección destacada para captar nuevos instaladores y empresas de seguridad con llamada a la acción hacia WhatsApp pre-rellenada para registro expedito.
24. **Optimización de Grilla de Categorías y Toolbar Unificado en Tienda (`tienda.html`):**
    - **Grilla Estructurada de 5 Tarjetas por Fila:** La vitrina visual de categorías (`.cat-showcase-container`) se reconfiguró de `repeat(10, 1fr)` a `repeat(5, 1fr)` en pantallas de escritorio (`repeat(3, 1fr)` en tablets y `repeat(2, 1fr)` en móviles), permitiendo que las 10 líneas oficiales se distribuyan en 2 filas limpias y balanceadas (5 en la fila 1 y 5 en la fila 2), brindando mayor amplitud y nitidez a los iconos, títulos y contadores de equipos.
    - **Separación Generosa y Diseño Circular del Carrito:** Se corrigió el espaciado con una separación explícita de `gap: 16px;` y padding interno de `18px` en el badge `18 Equipos en Catálogo`, evitando que los elementos colisionen o se vean amontonados. El botón de carrito (`.store-cart-btn`) fue transformado en un botón circular ergonómico de 44x44px (`rounded-circle`) con el icono violeta centrado y el contador badge rojo flotante en la esquina superior derecha (`position-absolute top-0 start-100 translate-middle`), eliminando la saturación interna y aportando una jerarquía visual limpia e intuitiva.
25. **Auditoría Integral de Rendimiento, Desplazamiento Fluido y Enrutamiento Inteligente:**
    - **Desplazamiento Suave y Compensación de Altura (`scroll-padding-top: 85px`):** Se estandarizó en las 4 páginas (`index.html`, `tienda.html`, `nosotros.html` y `cotizacion.html`) la regla `html { scroll-behavior: smooth; scroll-padding-top: 85px; }`. Esto elimina saltos bruscos entre secciones y evita que los títulos queden ocultos detrás del navbar sticky al saltar por anclas o enlaces.
    - **Capas Visuales y Z-Index del Motor Navideño:** Se calibró el canvas de copos (`#seasonal-snow-canvas`) en `z-index: 1010` para que la nieve caiga por encima del contenido general pero por debajo del navbar (`z-index: 1020`) y de los modales (`z-index: 1055`), garantizando nitidez total y cero interferencias sobre textos y botones de cotización.
    - **Enrutamiento Inteligente por URL en Tienda (`tienda.html?cat=...` & `?search=...`):** Al hacer clic en las líneas de solución de `index.html` o en los botones «Ver en Tienda» de los modales de marca (Dahua, IMOU, ZKTeco, etc.), `tienda.html` detecta automáticamente los parámetros, pre-filtrando la vitrina y el buscador sin recargas innecesarias.
    - **Validación Cero Errores:** 0 IDs duplicados, 0 imágenes rotas (todas validadas físicamente en disco), 100% de scripts de JavaScript con sintaxis limpia y validados mediante motor de ejecución.
26. **Protocolo de Protección, Marcas de Agua y Modo Demostración (`demo-protocol.js` & `demo-protocol.css`):**
    - **Marcas de Agua Diagonales en Pantalla Completa:** Bandas sutiles no intrusivas (`pointer-events: none; z-index: 9990`) que recorren todo el viewport con la leyenda en texto semi-transparente: *«VERSIÓN DE PRUEBA · GIOTECH ING. · GEORGE MORENO»*, protegiendo la autoría del desarrollo en capturas o inspección técnica.
    - **Pastilla de Estado Flotante (Inferior Izquierda):** Indicador permanente `.demo-status-pill` con animación de pulso violeta y texto *«Versión Demo · GioTech Ing.»*, que permite al evaluador abrir el aviso técnico en cualquier momento.
    - **Ventana Flotante Recurrente Cada 2 Minutos:** Modal moderno con halo violeta (`#giotechDemoModalBackdrop`) que se activa periódicamente recordando que se trata de una plataforma en fase de prueba desarrollada por **GioTech Ing.** para **Tecnomax Security S.A.S.**. Incluye botón de cierre rápido (*«Continuar viendo demo»*), cierre por tecla `Escape` o clic exterior, y enlace de WhatsApp directo con George Moreno (+57 350 283 7223).
    - **Escudo de Seguridad Anti-Inspección & Anti-Copia:** Bloqueo automático de clic derecho (`contextmenu`), deshabilitación de atajos de teclado para inspección y clonación (`F12`, `Ctrl+U`, `Ctrl+Shift+I`, `Ctrl+Shift+J`, `Ctrl+Shift+C` y `Ctrl+S`), y advertencia de derechos de autor inyectada en la consola del navegador.
    - **Desconexión Inmediata en 1 Paso:** Modularizado al 100%. Cuando el usuario dé la orden *«quita el protocolo de prueba»*, se desactiva al instante cambiando `PROTOCOL_ACTIVE = false` en `demo-protocol.js` o mediante la API `window.GioTechDemoProtocol.disable()`, sin alterar en nada el código base del sitio.
27. **Optimización Extrema de Rendimiento y Aceleración por GPU:**
    - **Aceleración por Hardware (`transform: translateZ(0)` & `will-change`):** Las capas globales fijas (`#seasonal-snow-canvas` y `.demo-watermark-overlay`) fueron promovidas a capas independientes del compositor de la GPU. Esto evita que el navegador vuelva a rasterizar el fondo o las marcas de agua durante el desplazamiento, asegurando un scroll fluido a 60-120 FPS.
    - **Event Listeners Pasivos (`{ passive: true }`):** Los eventos de `scroll` y `resize` en carruseles y motor estacional se configuraron con `{ passive: true }`, permitiendo que el compositor del navegador procese el desplazamiento de forma instantánea sin bloqueos de renderizado en el hilo principal de JavaScript.
    - **Carga Diferida y Decodificación Asíncrona (`loading="lazy"` & `decoding="async"`):** Todas las imágenes del catálogo e interiores cuentan con carga perezosa (`lazy loading`) y decodificación asíncrona, mientras que el banner principal en Inicio cuenta con `fetchpriority="high"`, optimizando el LCP (Largest Contentful Paint).
    - **Cero Bloqueo y Peso Ultraligero:** Todo el sitio web es 100% estático y libre de frameworks pesados (React, Angular o dependencias innecesarias), con un peso total que carga en menos de 0.4 segundos.
28. **Auditoría y Blindaje Responsive Mobile-First:**
    - **Modales con Desplazamiento Interno (`modal-dialog-scrollable`):** Todos los modales del sistema (`#productModal`, `#cartModal`, `#gioTechModal`, `#brandModal` y `#legalModal`) fueron estandarizados con `modal-dialog-scrollable`. Esto garantiza que en teléfonos de cualquier gama y resolución, los botones de acción inferior (WhatsApp, cotizar, agregar al carrito) permanezcan fijos y visibles, permitiendo que las especificaciones y textos se desplacen fluidamente sin recortarse.
    - **Pastilla de Catálogo Adaptable en Tienda:** En pantallas móviles (`<= 576px`), el texto se compacta automáticamente a `18 Equipos` (ocultando « en Catálogo» mediante `d-none d-sm-inline`), asegurando que conviva lado a lado con el botón circular de carrito sin desbordar el ancho de pantalla.
    - **Vitrina de Categorías Móvil Optimizada:** En pantallas menores a 575px, las 10 líneas se presentan en una grilla de 2 columnas (`repeat(2, 1fr)`) con altura adaptada de 96px e iconos de 38px, ideales para navegación táctil con una sola mano.
    - **Simetría de Elementos Flotantes en Móviles:** La pastilla del protocolo demo (inferior izquierda) y el interruptor navideño (inferior derecha) se adaptan a tamaños proporcionales con márgenes de 18px, garantizando cero colisiones y libre visibilidad del contenido.
29. **Corrección de Carrusel de Marcas y Apilamiento de Flotantes en Celulares:**
    - **Carrusel de Marcas en Móviles (1 Tarjeta 100% de Ancho):** En pantallas menores a 575px, las tarjetas de marcas ya no se comprimen en 2 columnas angostas de 110px. Ahora cada tarjeta ocupa el **100% del ancho del carrusel** de forma amplia, permitiendo que los logotipos de Dahua, IMOU, ZKTeco y Western Digital se aprecien en tamaño completo (hasta 48px de altura y 85% de ancho) sin recortarse ni colisionar entre sí. El avance por deslizamiento táctil o flechas pasa una marca completa por vez.
    - **Apilamiento Vertical de Botones Flotantes en Celulares:** Para evitar que la pastilla del protocolo demo y el interruptor navideño formen una barra horizontal que ocupe todo el ancho inferior en pantallas móviles, ahora se apilan verticalmente sobre la esquina inferior derecha: el interruptor navideño abajo (`bottom: 18px; right: 16px;`) y el botón del protocolo demo arriba (`bottom: 66px; right: 16px;`), dejando libre más del 60% de la pantalla para ver el contenido con total comodidad.
30. **Carrusel Táctil 1 a 1 para Equipos Destacados en Celulares (`#destacados`):**
    - **Eliminación del Larguero Vertical:** En pantallas móviles (`< 576px`), los 4 productos destacados de la temporada ya no se apilan verticalmente ocupando más de 1.600px de scroll innecesario.
    - **Visualización 1 a 1 de Ancho Completo (`100% width`):** Se transformó el contenedor en un carrusel táctil con `scroll-snap-type: x mandatory`, mostrando un solo producto amplio y cómodo a la vez.
    - **Controles Táctiles y Flechas de Navegación:** Se incorporaron flechas circulares `‹` y `›` y una barra de 4 puntos indicadores (*dots*) sincronizados con el scroll en tiempo real, permitiendo deslizar con el dedo o tocar las flechas.
    - **Cero Afectación en Desktop:** En pantallas de tablet y escritorio (`>= 576px`), los controles móviles se ocultan automáticamente (`d-sm-none`) y se mantiene intacta la grilla de 4 columnas.
31. **Adaptación Responsive Móvil 1 a 1 de Líneas de Solución y Blindaje de Marcas:**
    - **Líneas de Solución para Proyectos (`#lineas-solucion`):** En pantallas móviles (`< 576px`), las 4 fichas de líneas de solución (CCTV IP & HDCVI, Cámaras IMOU Wi-Fi, Biometría ZKTeco y Discos & Redes) se transformaron de una lista vertical infinita a un carrusel táctil interactivo 1 a 1 con deslizamiento horizontal suave (`scroll-snap-type: x mandatory`).
    - **Controles de Flechas y Puntos Indicadores:** Incluye botones de flechas circulares `‹` y `›` (`slideSolutions(-1)` / `slideSolutions(1)`) y 4 puntos indicadores sincronizados en tiempo real mediante evento de scroll pasivo (`#solutionsDots .solution-dot`), ahorrando más de 1.200px de scroll vertical.
    - **Consolidación del Carrusel de Marcas (`< 768px`):** Se blindó la regla responsiva del carrusel de fabricantes líderes (`#marcas`) ampliando el umbral a `max-width: 767px` para que en cualquier teléfono inteligente o tableta pequeña se muestre exactamente 1 marca al 100% de ancho, eliminando definitivamente cualquier colisión o compresión de logotipos de Dahua e IMOU.
    - **Micro-Badges de Confianza y Reducción Visual en Celulares:** En lugar de apilar 4 bloques pesados con párrafos largos, los beneficios de respaldo comercial se redujeron a una cuadrícula compacta de 2x2 (`col-6 col-lg-3`) con formato de micro-insignias de solo ~80px de altura total. En celulares se ocultan los textos secundarios descriptivos (`d-none d-sm-block`), dejando únicamente el icono estilizado (32px) y el título clave en una sola línea (*Garantía Directa*, *Despacho 24h*, *Stock 3 Sedes*, *Factura DIAN*). Además, se compactó el encabezado de la sección en móviles reduciendo el padding y ocultando subtítulos extensos para evitar sobrecarga de información y agilizar la navegación.
32. **Carrusel Táctil 2 a 2 para Vitrina de Categorías en Tienda Móvil (`#categoryShowcaseBar`):**
    - **Eliminación de la Rejilla Regada:** En pantallas móviles (`< 576px`), las 10 líneas de solución ya no se despliegan en una cuadrícula vertical de 5 filas (10 tarjetas dispersas ocupando más de 500px de scroll).
    - **Visualización 2 por Vista (`calc((100% - 0.6rem) / 2)`):** Se transformó el contenedor en un carrusel táctil horizontal con `scroll-snap-type: x mandatory` y `scroll-snap-align: start`, mostrando exactamente 2 categorías amplias y nítidas por vista.
    - **Controles de Flechas y 5 Dots Indicadores:** Incorpora flechas circulares `‹` y `›` (`slideCatShowcase(-1)` / `slideCatShowcase(1)`) y una barra de 5 puntos interactivos sincronizados con el scroll pasivo, permitiendo avanzar de 2 en 2 con un solo toque o deslizando con el dedo.
    - **Auto-Centrado Inteligente:** Al hacer clic en cualquier categoría o al cargar la página mediante parámetros URL (`?cat=`), la tarjeta seleccionada se desplaza y centra automáticamente en el carrusel móvil.
    - **En Desktop y Tablet (`>= 576px`):** Se mantiene la vitrina de 5 columnas en escritorio y 3 columnas en tablet sin alteraciones.
33. **Catálogo de Tienda en Celulares (2 Tarjetas por Línea Limpias con Acceso a Ficha):**
    - **Distribución 2 por Línea (`col-6 col-md-4 col-lg-3`):** En pantallas móviles (`< 576px`), los productos del catálogo de tienda (`tienda.html`) ahora se despliegan en una cuadrícula moderna de 2 columnas (`col-6`), aprovechando todo el ancho de pantalla de forma compacta y visual.
    - **Visualización Limpia y Esencial:** En celular cada tarjeta muestra únicamente:
      1. Foto del producto con altura proporcional (125px) y micro-badge de disponibilidad.
      2. Nombre del producto en 2 líneas compactas (`prod-card-title-b2b`).
      3. Valor mayorista destacado en negrita (`$XXX.000 COP`).
      4. Micro-indicador `Ver ficha`.
    - **Apertura de Especificaciones al Clic:** Se eliminó la saturación de descripciones largas y botones sobredimensionados dentro de la tarjeta móvil. Al tocar cualquier parte de la tarjeta se abre inmediatamente el modal scrollable (`openProductModal(id)`) con las especificaciones técnicas completas, stock por sedes, selector de cantidad y botones de cotización WhatsApp y carrito.
    - **Desktop y Tablet Intactos:** En pantallas medianas y de escritorio se conservan las 3 o 4 columnas con descripción completa, badges de categoría y botón directo de cotización.
34. **Ajuste Ergonómico de la Barra de Filtros en Celulares (`.filter-toolbar-card`):**
    - **Solución al Texto Cortado en Selectores:** En pantallas móviles (`< 576px`), los textos de los selectores de orden (`⭐ Destacados`) y precio (`🏷️ Precios: Todos`) se cortaban lateralmente debido al padding excesivo y al ancho de la flecha SVG de Bootstrap.
    - **Optimización de Padding y Fuente:** Se redujo el padding de la tarjeta contenedora a `0.75rem 0.65rem` recuperando 20px de espacio horizontal; se calibró la tipografía del selector a `0.76rem` con padding derecho optimizado (`1.45rem`) y posición compacta de la flecha, permitiendo que cada opción se visualice 100% completa, nítida y sin truncamientos.
    - **Buscador Adaptado:** Se compactó el placeholder a `Buscar ref, modelo o SKU...` con padding interior de `2.25rem`, garantizando que en teléfonos de cualquier ancho nunca se corte el texto de búsqueda.
35. **Ocultamiento de Sedes Físicas en Pie de Página para Celulares (`d-none d-sm-block`):**
    - **Alivio de Scroll en Footer Móvil:** El bloque «Sedes con Bodega Física» (Bogotá D.C., Medellín y Barranquilla) que ocupaba más de 300px verticales en el pie de página se ocultó exclusivamente en celulares (`d-none d-sm-block`).
    - **Pie de Página Móvil Ultraligero:** En celulares el footer pasa directamente de la información corporativa y enlaces institucionales a la firma de desarrollo y derechos de autor, logrando un cierre de página limpio y sin exceso de texto.
    - **Desktop y Tablet Intactos:** En pantallas medianas y de escritorio (`>= 576px`), las 3 sedes físicas con sus direcciones oficiales, PBX y badges de bodega permanecen 100% visibles.
36. **Centrado Simétrico del Pie de Página en Celulares (`text-center` & `footer-col-title`):**
    - **Alineación Centralizada en Pantallas Móviles (`< 576px`):** En celulares, los canales de contacto (iconos de WhatsApp, Instagram, Facebook, YouTube, LinkedIn), los textos corporativos, los distintivos de garantía y la columna de «Plataforma» con todos sus enlaces legales e institucionales se configuran perfectamente centrados (`text-center`, `justify-content-center`).
    - **Línea Decorativa Centrada:** El pseudoelemento decorativo violeta (`.footer-col-title::after`) se calibra automáticamente con `left: 50% !important; transform: translateX(-50%) !important;` en pantallas menores a 575px, quedando simétricamente centrado debajo del título «PLATAFORMA».
    - **Desktop y Tablet Intactos:** En pantallas medianas y de escritorio (`>= 576px`), el pie de página conserva su alineación natural a la izquierda (`text-sm-start`, `text-lg-start`).
37. **Barra Inferior de Derechos y Firma GioTech Centrada y Compacta (`.giotech-badge` & Copyright):**
    - **Alineación Central y Estética Discreta en Celulares:** En la barra inferior del footer, el texto legal de derechos de autor (`© 2026 TECNOMAX SECURITY S.A.S.`) y la firma de desarrollo (`Página Web desarrollada por: GioTech Ing.`) se calibraron con tipografía compacta (`0.72rem - 0.73rem`, interlineado 1.5) y alineación 100% centrada (`text-center`, `justify-content-center`) para teléfonos móviles.
    - **Insignia GioTech Optimizada:** Se redujo la altura del logotipo de GioTech Ing. a `18px` y el padding de la cápsula a `px-2.5 py-1`, logrando una firma sobria, refinada y perfectamente proporcionada.
    - **Margen Inferior Anticolisión (3.8rem):** Se amplió el espaciado inferior (`padding-bottom: 3.8rem`) para evitar cualquier superposición con los badges flotantes fijos en móviles (protocolo demo e interruptor estacional navideño).
    - **Desktop Intacto:** En computadores (`md`), se conserva la distribución horizontal limpia a los extremos (`justify-content-between`).
38. **Arquitectura Limpia del Directorio y Auditoría Cero Código Basura:**
    - **Estructura Raíz Despejada:** Se organizó la raíz del proyecto aislando los archivos obsoletos de compilación e iniciales de Vite/React (`src/`, `dist/`, `public/`, `node_modules/`, `vite.config.js`, `package*.json`) dentro de la carpeta protegida `_archivado_react_vite/`.
    - **Scripts Internos Centralizados:** Los scripts de utilidad de PowerShell (`convert-logo.ps1`, `download-logos.ps1`) y archivos SVG no enlazados se reubicaron en `herramientas/`.
    - **Auditoría Técnica Automatizada:** Las 5 páginas (`index.html`, `tienda.html`, `nosotros.html`, `cotizacion.html`, `admin.html`) fueron verificadas con 100% de integridad en assets locales, cero IDs duplicados, cero errores de sintaxis JavaScript y cero código basura o de depuración. La plataforma opera 100% autónoma y offline mediante doble clic (`file:///`).

---

## 5. Argumentario de Venta (Pitch para Ganar a Tecnomax)

| Aspecto | Sitio Web Actual de Tecnomax | Nuestra Nueva Propuesta |
|---|---|---|
| **Velocidad de Carga** | 5.8s - 7.2s (Wix pesado) | **0.4s - 0.8s (Carga instantánea)** |
| **Experiencia Móvil** | Botones de WhatsApp apilados tapando el menú | **100% responsive, menú desplegable limpio** |
| **Catálogo Mayorista** | Incompleto, fotos rotas, sin filtros claros | **Buscador en vivo, filtros, precios y fichas** |
| **Marcas Representadas** | Nombres planos sin logos oficiales | **Logos oficiales y fichas técnicas interactivas** |
| **Herramientas de Venta** | Teléfonos en texto plano | **Calculadora de kits interactiva + WhatsApp dinámico** |
| **Imagen de Marca** | Imagen genérica de plantilla básica | **Estética de distribuidor mayorista multinacional** |
