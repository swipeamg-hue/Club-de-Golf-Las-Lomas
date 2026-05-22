/**
 * Base de datos de productos químicos especializados por área
 * para el Club de Golf Las Lomas.
 */
const PRODUCTS_DATA = {
  alberca: {
    title: "Alberca & Acuáticos",
    accentColor: "var(--color-alberca)",
    slogan: "Agua 100% cristalina, segura y balanceada para una experiencia de natación de campeonato.",
    products: [
      {
        id: "shock_cloro",
        name: "Cloro Shock Premium",
        tagline: "Dicloro granulado al 60% de disolución rápida",
        description: "Sanitizante de choque altamente concentrado formulado para la eliminación inmediata de materia orgánica, cloraminas y algas. Se disuelve instantáneamente sin dejar residuos calcáreos ni alterar drásticamente el pH del agua.",
        benefits: [
          "Disolución instantánea sin sedimentos en el fondo.",
          "Estabilizado contra la degradación solar por rayos UV.",
          "Elimina eficazmente cloraminas (causantes de olor a cloro e irritación ocular)."
        ],
        usage: "Supercloración semanal o después de lluvias fuertes y alta afluencia de bañistas.",
        dosage: "Añadir 150 gramos por cada 10 m³ de agua. Para tratamiento de choque (algas o turbidez), duplicar la dosis.",
        dilution: "Directo al agua, preferentemente al atardecer frente a las boquillas de retorno con el filtro operando.",
        phImpact: "Prácticamente neutro, reduce la necesidad de ajustar el pH constantemente.",
        safety: "Evitar contacto directo con la piel y ojos. Almacenar en lugar seco y ventilado.",
        badge: "Sanitizante de Choque"
      },
      {
        id: "alguicida_max",
        name: "Swipol",
        tagline: "Alguicida, fungicida y viricida de amplio espectro",
        description: "Swipol está formulado para el control efectivo de algas en piscinas y en sistemas de recirculación de aguas. Las pruebas de eficiencia bacteriológica lo respaldan como un alguicida, fungicida y viricida de amplio espectro. Compuesto por cuaternario de amonio de última generación, es incoloro, inoloro y de grado quirúrgico y alimenticio.",
        benefits: [
          "Seguridad para los socios: compuesto por cuaternario de amonio de última generación (cero irritación cutánea).",
          "Completamente incoloro e inoloro: no altera la pureza visual ni sensorial del área.",
          "Estabilidad térmica total en temperaturas altas y bajas (albercas techadas o al aire libre).",
          "Alta tolerancia a las aguas duras, garantizando su eficacia continua en sistemas hidráulicos.",
          "Desinfección perimetral total: inhibición de hongos en baños de pies, vestidores, pisos y tapetes sanitarios."
        ],
        usage: "Control e inhibición de hongos en vestidores y desinfección perimetral de albercas, además de control de algas en piscina.",
        dosage: "Dosificación recomendada según el área a desinfectar y volumen de recirculación.",
        dilution: "Dilución de uso general y perimetral de grado quirúrgico y alimenticio.",
        phImpact: "Completamente neutro y estable ante aguas duras.",
        safety: "No irritante para la piel en dilución. Totalmente incoloro e inoloro.",
        badge: "Alguicida Especializado"
      },
      {
        id: "clarificador_gold",
        name: "Clarificador Floculante Gold",
        tagline: "Coagulante polimérico de alta velocidad",
        description: "Agente clarificador concentrado que agrupa las micropartículas suspendidas coloidales que enturbian el agua, formando flóculos de mayor peso que se depositan en el fondo de la alberca para su fácil aspirado al drenaje o filtración.",
        benefits: [
          "Resultados visibles en menos de 12 horas.",
          "Mejora drásticamente la eficiencia de los filtros de arena o cartucho.",
          "No altera los niveles de cloro activo ni el pH."
        ],
        usage: "Tratamiento semanal para brillo extra o correctivo de agua turbia.",
        dosage: "Preventivo: 50 ml por cada 10 m³ a la semana. Correctivo: 150 ml por cada 10 m³.",
        dilution: "Verter directamente sobre el canal perimetral o boquillas de retorno con el filtro en posición de recirculación por 2 horas, luego apagar y dejar reposar 8 horas antes de aspirar.",
        phImpact: "Neutro.",
        safety: "No tóxico en diluciones recomendadas. Evitar congelamiento.",
        badge: "Claridad Espejo"
      },
      {
        id: "ph_balance",
        name: "Ajustadores de pH (Sube pH / Baja pH)",
        tagline: "Estabilidad química y comodidad para el usuario",
        description: "Productos formulados para mantener el pH del agua en el rango ideal de 7.2 a 7.6. Un pH correcto maximiza el poder desinfectante del cloro y previene irritaciones en la piel y ojos de los socios del club, además de evitar la corrosión de equipos.",
        benefits: [
          "Baja pH: Bisulfato de sodio de grado alimenticio altamente seguro (evita uso de ácido clorhídrico nocivo).",
          "Sube pH: Carbonato de sodio denso de disolución rápida sin turbidez.",
          "Previene incrustaciones de sarro (pH alto) o corrosión de calentadores (pH bajo)."
        ],
        usage: "Ajuste diario posterior a la lectura con el colorímetro.",
        dosage: "Para modificar 0.2 unidades de pH en 10 m³: Añadir 100g de Baja pH para disminuir, o 80g de Sube pH para aumentar.",
        dilution: "Disolver en agua antes de dosificar frente a las boquillas de retorno.",
        phImpact: "Modificación controlada del balance químico.",
        safety: "Manejar con guantes y protección ocular. No mezclar los dos productos concentrados.",
        badge: "Control de Balance"
      }
    ]
  },
  spa: {
    title: "Spa & Wellness",
    accentColor: "var(--color-spa)",
    slogan: "Santuarios de relajación absoluta con los más altos estándares de higiene y aromas cautivadores.",
    products: [
      {
        id: "swipe_concentrado_spa",
        name: "Swipe Limpiador Líquido Concentrado",
        tagline: "Desengrasante industrial de grado alimentario NSF A1",
        description: "Es un desengrasante industrial líquido de uso general, altamente concentrado y con una biodegradabilidad superior al 99%. Destaca por ser grado alimenticio, avalado por el registro NSF (Categoría A1) y SAGARPA, lo que lo hace completamente seguro para las áreas de preparación de alimentos y comedores del club.",
        benefits: [
          "Biodegradabilidad superior al 99%: sustentabilidad y cuidado ecológico.",
          "Grado alimenticio avalado por NSF (Categoría A1) y SAGARPA.",
          "Seguridad total: sin cáusticos libres, no quema ni maltrata la piel, no inflamable y no corrosivo.",
          "Versiones adaptadas: versión Low Foam para restregadoras y versión pH Neutro (pH 7) para plantas tratadoras.",
          "No daña, no despinta ni corroe los metales y superficies tratadas."
        ],
        usage: "Desengrase industrial y limpieza multiusos en comedores, Casa Club, cocinas y mantenimiento.",
        dosage: "Liviana (1:100) para mantenimiento estético diario | Normal (1:12) para zonas operativas | Pesada (1:4) para taller y motores.",
        dilution: "Dilución variable según la carga de suciedad. Rinde hasta 100 litros de limpiador útil.",
        phImpact: "pH Neutro (pH 7) disponible para proteger plantas tratadoras de agua del club.",
        safety: "No tóxico, no inflamable, sin cáusticos libres. Seguro para la piel y metales.",
        badge: "Grado Alimenticio & Eco-Friendly",
        image: "images/swipe_concentrado.png"
      },
      {
        id: "eucalyptus_vapor",
        name: "Esencia de Eucalipto & Menta Steam",
        tagline: "Concentrado hidrosoluble para vapor y saunas",
        description: "Formulación premium a base de aceites esenciales puros de eucalipto globulus y menta piperita. Especialmente diseñada para dosificarse en sistemas de inyección de vapor o saunas secas, liberando notas refrescantes, descongestionantes y relajantes.",
        benefits: [
          "100% soluble en agua (no obstruye las boquillas de los generadores de vapor).",
          "Efecto descongestionante y tonificante natural de larga duración.",
          "Libre de solventes químicos nocivos o alcoholes inflamables."
        ],
        usage: "Aromaterapia en cuartos de vapor, saunas y jacuzzis.",
        dosage: "Sistemas automáticos: Regular a 1-2 ml por ciclo. Manual: Rociar 10 ml directamente sobre las rocas de la sauna disueltos en agua.",
        dilution: "1 parte de esencia por 10 partes de agua para uso manual.",
        phImpact: "Neutro.",
        safety: "Uso ambiental únicamente. No ingerir ni aplicar concentrado en los ojos.",
        badge: "Aromaterapia de Lujo"
      },
      {
        id: "organic_sanitizer",
        name: "Sanitizante Orgánico Cítrico",
        tagline: "Desinfectante hipoalergénico sin enjuague para superficies",
        description: "Poderoso desinfectante botánico de amplio espectro derivado de extracto de semilla de toronja y ácidos orgánicos. Ideal para camillas de masaje, cabinas, vestidores y áreas de relajación. Libre de cloro, alcohol y fragancias sintéticas.",
        benefits: [
          "Hipoalergénico y 100% seguro para contacto dermatológico inmediato.",
          "Elimina el 99.999% de hongos, bacterias y virus en 30 segundos.",
          "No mancha, no reseca el vinil ni la piel sintética de las camillas de masaje."
        ],
        usage: "Sanitización rápida entre servicios de masajes y tratamientos faciales.",
        dosage: "Listo para usar. Rociar y dejar secar o pasar un paño de microfibra.",
        dilution: "Listo para usar (RTU - Ready To Use).",
        phImpact: "Ligeramente ácido (compatible con el pH natural de la piel).",
        safety: "Ecológico y biodegradable. No requiere equipo de protección especial.",
        badge: "100% Botánico & Seguro"
      },
      {
        id: "jacuzzi_clear",
        name: "Spa Clear & Sanitizer",
        tagline: "Sanitizante activo libre de cloro para tinas de hidromasaje",
        description: "Tratamiento desinfectante a base de oxígeno activo y polímeros desinfectantes suaves. Específicamente formulado para jacuzzis, tinas calientes y circuitos de hidroterapia donde las altas temperaturas evaporan el cloro común y causan molestias respiratorias.",
        benefits: [
          "Sin molestos olores a cloro en espacios cerrados de spa.",
          "Estable a temperaturas de hasta 42°C sin perder poder bactericida.",
          "Previene la acumulación de biofilm biológico en las tuberías internas de los hidromasajes."
        ],
        usage: "Sanitización y clarificación continua de tinas de spa e hidroterapia.",
        dosage: "Añadir 20 ml por cada 1 m³ de agua cada 2 días o después de uso intenso.",
        dilution: "Verter directamente en el agua con las bombas de hidromasaje encendidas.",
        phImpact: "Neutro.",
        safety: "Hipoalergénico a dilución de uso. No irrita ojos ni mucosas.",
        badge: "Higiene en Hidroterapia"
      },
      {
        id: "swipe_brite_spa",
        name: "Swipe Brite",
        tagline: "Limpiador desincrustante ácido y biodegradable para inodoros",
        description: "Es un limpiador líquido de tipo ácido y biodegradable, diseñado específicamente para desincrustar, desinfectar y desodorizar los inodoros. Elimina eficazmente las manchas y el sarro formados por los residuos calcáreos del agua depositados en la porcelana.",
        benefits: [
          "Eliminación de olores: Inhibe el desarrollo de bacterias provenientes del agua y las materias fecales, impidiendo los olores desagradables.",
          "Seguro para cualquier color de porcelana y totalmente inofensivo para las tuberías y fosas sépticas.",
          "Doble acción: Limpieza profunda y desincrustación o mantenimiento diario.",
          "100% biodegradable: Respetuoso con el medio ambiente y los sistemas biológicos."
        ],
        usage: "Desincrustación, desinfección y desodorización en sanitarios y vestidores del club.",
        dosage: "Concentrado para sarro incrustado | Dilución 1:4 para mantenimiento de rutina.",
        dilution: "Uso Concentrado (Restauración Profunda): directo sin diluir. | Mantenimiento Diario: 1 parte de producto por 4 partes de agua.",
        phImpact: "Ácido activo.",
        safety: "Debido a su naturaleza ácida y nivel de corrosividad, NUNCA debe mezclarse con cloro o cualquier otro producto. Si su uso es continuo por parte del personal de limpieza, se recomienda estrictamente el uso de guantes.",
        badge: "Desincrustante Ácido",
        image: "images/swipe_brite.png"
      }
    ]
  },
  gimnasio: {
    title: "Gimnasio & Fitness",
    accentColor: "var(--color-gimnasio)",
    slogan: "Máxima higiene deportiva que protege la salud de los atletas y preserva los equipos de entrenamiento.",
    products: [
      {
        id: "gym_spray",
        name: "Swipe Gym Sanitizante Equipos",
        tagline: "Desinfectante anticorrosivo de acción rápida",
        description: "Desinfectante de grado profesional formulado con sales de amonio cuaternario de quinta generación y agentes acondicionadores. Específicamente diseñado para la limpieza y sanitización de tapices de cuero sintético, consolas táctiles, pantallas de caminadoras, mancuernas y agarres metálicos.",
        benefits: [
          "Fórmula anticorrosiva probada que no oxida metales ni reseca vinilos.",
          "Eficacia virucida y bactericida total en solo 15 segundos.",
          "Secado rápido sin residuos grasosos o pegajosos para comodidad del usuario."
        ],
        usage: "Limpieza y desinfección de equipos de gimnasio por parte del personal o de los mismos socios.",
        dosage: "Atomizar sobre la superficie y limpiar con un paño de microfibra limpio.",
        dilution: "Concentrado para dilución 1:20 (rinde 20 litros por cada litro) o presentación lista para usar.",
        phImpact: "Neutro.",
        safety: "Seguro para uso frecuente sobre plásticos, hule, metal y pantallas LCD.",
        badge: "Protección de Equipos"
      },
      {
        id: "odor_kill",
        name: "Odor-Kill Sport Enzimático",
        tagline: "Destructor biológico de malos olores",
        description: "Biocatalizador enzimático concentrado que degrada las bacterias causantes del mal olor por sudoración, humedad y desechos orgánicos en vestidores, casilleros, calzado, alfombras y áreas de spinning. No disfraza el olor con perfume pesado, lo elimina de raíz.",
        benefits: [
          "Las enzimas digieren la fuente orgánica del olor eliminándola definitivamente.",
          "Deja una fresca fragancia cítrica-deportiva de larga duración.",
          "Seguro para rociar directamente en casilleros y áreas de alfombra o tapetes de yoga."
        ],
        usage: "Control ambiental y de superficies en vestidores, casilleros y baños de gimnasio.",
        dosage: "Diluir 100 ml en 1 litro de agua y aplicar con atomizador en áreas afectadas.",
        dilution: "Dilución normal 1:10 en agua limpia.",
        phImpact: "Neutro.",
        safety: "Ecológico, no tóxico para humanos ni mascotas. 100% biodegradable.",
        badge: "Control de Olores Extremo"
      },
      {
        id: "floor_active",
        name: "Floor-Active Sanitizer Antiderrapante",
        tagline: "Limpiador desinfectante para pisos deportivos",
        description: "Fórmula de limpieza profunda y desinfección para pisos de caucho, hule amortiguante, pistas interiores y duela de madera tratada. Su fórmula especial elimina grasa de sudoración sin dejar residuos cerosos o resbalosos, garantizando un piso de alta tracción y seguro para los socios.",
        benefits: [
          "Mantiene las propiedades antiderrapantes originales del piso de gimnasio.",
          "Fórmula libre de cloro que no decolora el caucho negro o losetas de color.",
          "Acción bactericida que elimina hongos causantes de pie de atleta en vestidores."
        ],
        usage: "Trapeado diario y limpieza con máquina restregadora de los pisos del gimnasio y áreas comunes.",
        dosage: "Diluir 50 ml por cubeta de agua (10 litros) para trapeado manual. 100 ml para máquina restregadora.",
        dilution: "Dilución 1:200 en trapeado diario. Rinde hasta 200 cubetas por litro.",
        phImpact: "Ligeramente alcalino (pH 8.5) para remover grasas corporales de forma eficiente.",
        safety: "Usar guantes para el manejo del producto concentrado. No mezclar con ácidos.",
        badge: "Pisos Seguros y Sanitizados"
      },
      {
        id: "dermo_wash",
        name: "Dermo-Soap Premium Té Verde",
        tagline: "Gel de ducha corporal y capilar hidratante",
        description: "Exclusivo jabón líquido corporal y champú premium para las regaderas de los casilleros de socios. Enriquecido con extracto de té verde, aloe vera y notas de verbena. Ofrece una espuma rica que remueve el sudor e hidrata la piel dejándola fresca y revitalizada.",
        benefits: [
          "Fórmula 2 en 1 (cuerpo y cabello) de grado dermatológico.",
          "Fragancia energizante y premium de Té Verde y Verbena muy apreciada por socios.",
          "Libre de parabenos y siliconas pesadas. Fácil enjuague sin tapar drenajes."
        ],
        usage: "Dosificadores automáticos en regaderas de caballeros, damas y spa.",
        dosage: "Llenar los dispensadores del gimnasio directamente con el bidón.",
        dilution: "Directo sin diluir.",
        phImpact: "5.5 (pH balanceado idéntico a la piel).",
        safety: "Seguro para todo tipo de pieles y cabello. Probado dermatológicamente.",
        badge: "Cuidado Personal Premium"
      }
    ]
  },
  gastronomia: {
    title: "Gastronomía & Cocinas",
    accentColor: "var(--color-gastronomia)",
    slogan: "Cocinas de clase mundial impecables. Seguridad alimentaria total y vajillas resplandecientes.",
    products: [
      {
        id: "grease_remover",
        name: "Super Degreaser Plus",
        tagline: "Desengrasante alcalino pesado biodegradable",
        description: "Formulación cáustica-solvente concentrada de alto rendimiento diseñada para penetrar, emulsionar y disolver de forma inmediata las grasas más difíciles, cochambre carbonizado y aceites quemados en campanas de extracción, hornos, freidoras, planchas y parrillas del restaurante del club.",
        benefits: [
          "Fórmula de rápida acción que ahorra horas de tallado manual pesado.",
          "Contiene agentes inhibidores de corrosión para proteger acero inoxidable de grado alimenticio.",
          "Acción espumante activa que se adhiere a superficies verticales para mayor tiempo de contacto."
        ],
        usage: "Limpieza profunda al cierre de turnos en cocinas calientes de restaurantes y snacks del club.",
        dosage: "Suciedad extrema: Dilución 1:3 en agua. Limpieza general: Dilución 1:10.",
        dilution: "Aplicar con atomizador espumador, dejar actuar 5-10 minutos, tallar levemente y enjuagar con agua abundante.",
        phImpact: "Fuertemente alcalino (pH > 12) - requiere manejo cuidadoso.",
        safety: "Obligatorio uso de guantes de nitrilo, lentes de seguridad y pechera protectora en su aplicación.",
        badge: "Poder Desengrasante Extremo"
      },
      {
        id: "dish_auto",
        name: "Auto-Dish Liquid Premium",
        tagline: "Detergente concentrado para lavavajillas automáticas",
        description: "Detergente líquido de baja espuma formulado especialmente para máquinas automáticas lavavajillas y lavacristales del club de golf. Su alta concentración remueve manchas de lápiz labial, almidón, café y grasa seca en vajillas y cristalería fina en un solo ciclo, incluso en condiciones de agua dura.",
        benefits: [
          "Previene incrustaciones de calcio y sarro en los inyectores de la máquina.",
          "Brillo cristalino sin manchas de agua en copas y cubertería fina.",
          "Biodegradable y libre de fosfatos nocivos para el medio ambiente."
        ],
        usage: "Lavado automatizado de vajillas en la cocina central del club.",
        dosage: "Dosificar de 2 a 4 ml por litro de agua mediante dosificador electrónico de la máquina.",
        dilution: "Inyección automática directa al ciclo de lavado.",
        phImpact: "Fuertemente alcalino.",
        safety: "Usar equipo de protección al reponer la garrafa de producto. No apto para lavado manual.",
        badge: "Brillo Espejo Automatizado"
      },
      {
        id: "fruit_wash",
        name: "Fruit & Veggie Sanitizer",
        tagline: "Desinfectante de alimentos base cítrica sin cloro",
        description: "Desinfectante de grado alimentario derivado de extractos de semillas cítricas y ácidos orgánicos. Especialmente desarrollado para la sanitización de frutas, verduras, hortalizas y hielo en las barras y cocinas. No altera el sabor, color, olor ni textura de los ingredientes frescos.",
        benefits: [
          "100% natural, biodegradable y libre de cloro (sin olor ni sabor químico residual).",
          "No requiere enjuague posterior, manteniendo la frescura y vida de anaquel del vegetal.",
          "Elimina bacterias patógenas (E. Coli, Salmonella) y virus en solo 2 minutos."
        ],
        usage: "Lavado y desinfección de ensaladas, hierbas, frutas y vegetales en áreas de preparación fría.",
        dosage: "Diluir 10 ml de producto por cada 5 litros de agua limpia.",
        dilution: "Dilución recomendada 1:500. Sumergir vegetales por 2 minutos y escurrir.",
        phImpact: "Ligeramente ácido.",
        safety: "Totalmente seguro para consumo humano. No tóxico en su manejo diario.",
        badge: "Seguridad en Alimentos"
      },
      {
        id: "surface_food",
        name: "Swipe Surface Sanitizer RTU",
        tagline: "Sanitizante de superficies en contacto con alimentos sin enjuague",
        description: "Sanitizante de evaporación rápida a base de alcohol isopropílico e ingredientes activos cuaternarios de grado alimenticio. Diseñado para sanitizar tablas de corte, cuchillos, rebanadoras, mesas de trabajo y barras de servicio. Cumple con la norma internacional de desinfección sin enjuague.",
        benefits: [
          "Secado ultra rápido por evaporación: la superficie queda lista en segundos.",
          "No requiere enjuague con agua potable, evitando la recontaminación de superficies limpias.",
          "Ideal para la sanitización rápida y constante durante las horas de servicio."
        ],
        usage: "Sanitización rápida de utensilios, barras, mesas y equipos de cocina entre preparaciones.",
        dosage: "Rociar directamente a una distancia de 20 cm cubriendo la superficie y dejar evaporar.",
        dilution: "Listo para usar sin dilución previa.",
        phImpact: "Neutro.",
        safety: "Inflamable en estado concentrado. Mantener alejado de flamas abiertas o pilotos de estufas.",
        badge: "Higiene Inmediata en Servicio"
      }
    ]
  },
  mantenimiento: {
    title: "Mantenimiento General",
    accentColor: "var(--color-mantenimiento)",
    slogan: "Cuidado impecable y preservación duradera para cada rincón de las exclusivas instalaciones del club.",
    products: [
      {
        id: "swipe_concentrate",
        name: "Limpiador Multiusos Swipe Concentrado",
        tagline: "Fórmula emblemática de dilución variable",
        description: "El limpiador multiusos concentrado por excelencia. Su exclusiva fórmula biodegradable penetra y emulsiona la grasa y suciedad. Permite crear soluciones a la medida mediante tres diluciones básicas (Liviana, Normal, Pesada) para limpiar desde vidrios hasta motores.",
        benefits: [
          "Súper concentrado: 1 litro puede rendir hasta 100 litros de limpiador útil.",
          "Elimina la necesidad de comprar decenas de productos especializados.",
          "100% biodegradable, libre de fosfatos y seguro para cualquier superficie lavable."
        ],
        usage: "Limpieza de oficinas, vestíbulos, muebles de exterior, carritos de golf y barandales.",
        dosage: "Liviana (vidrios/espejos): 1:100. Normal (paredes, plástico, vinil): 1:10. Pesada (motores, grasa pesada): 1:4.",
        dilution: "Mezclar con agua corriente en botellas atomizadoras codificadas por color.",
        phImpact: "Neutro (pH 7.0 a 7.5 en dilución normal) - seguro para pinturas y acabados delicados.",
        safety: "Seguro y noble con las manos en dilución normal. Evitar contacto de concentrado con ojos.",
        badge: "El Multiusos Definitivo"
      },
      {
        id: "glass_glow",
        name: "Glass-Glow Auto-Secante",
        tagline: "Limpiador de cristales de evaporación ultra rápida",
        description: "Limpiador profesional para ventanas, ventanales panorámicos de la casa club, espejos y puertas de cristal. Formulado con agentes tensoactivos especiales y disolventes de secado rápido que disuelven depósitos de polvo, huellas dactilares y brisa salina sin dejar marcas.",
        benefits: [
          "Efecto antiestático que repele el polvo y mantiene cristales limpios más tiempo.",
          "Secado inmediato libre de vetas, rayas o el molesto empañamiento.",
          "Seguro para película de control solar tintada de las ventanas del club."
        ],
        usage: "Mantenimiento diario de ventanales en restaurantes, casa club y oficinas del personal.",
        dosage: "Atomizar directamente y limpiar con un jalador de vidrios o paño que no suelte pelusa.",
        dilution: "Listo para usar en atomizador.",
        phImpact: "Ligeramente alcalino para remover grasas dactilares y suciedad atmosférica.",
        safety: "Evitar la inhalación prolongada de vapores en espacios muy cerrados.",
        badge: "Transparencia Total"
      },
      {
        id: "cart_wash",
        name: "Champú Cera Golf Cart",
        tagline: "Lavado protector con cera carnauba para vehículos de golf",
        description: "Fórmula de lavado premium concentrada con cera natural de Carnauba para la flota de carritos de golf y vehículos utilitarios del club. Remueve lodo, restos de pasto y polvo del campo mientras deposita una película protectora brillante contra los rayos solares UV y la humedad.",
        benefits: [
          "Ahorra tiempo al lavar y encerar en una sola operación.",
          "Protege la pintura y los plásticos del carrito del envejecimiento prematuro por el sol.",
          "Facilita los lavados posteriores al crear una capa repelente al agua y al lodo."
        ],
        usage: "Lavado periódico de la flota de carritos de golf y maquinaria de mantenimiento del campo.",
        dosage: "Mezclar 50 ml de champú en una cubeta con 10 litros de agua limpia.",
        dilution: "Dilución 1:200 en agua. Aplicar con esponja o cepillo suave y enjuagar.",
        phImpact: "Neutro, no remueve ceras previamente aplicadas ni reseca empaques de hule.",
        safety: "Biodegradable. Puede desecharse en alcantarillado pluvial seguro del club.",
        badge: "Protección UV para Vehículos"
      },
      {
        id: "floor_shine",
        name: "Floor-Shine Autobrillante Mármol",
        tagline: "Cera acrílica y sellador de alto brillo y tráfico pesado",
        description: "Emulsión acrílica metálica formulada para el sellado y abrillantado de pisos duros (mármol, terrazo, granito, loseta vinílica) en el lobby y pasillos principales del club. Crea una película de alta resistencia al tráfico peatonal que resiste rayones y marcas de tacones.",
        benefits: [
          "Brillo espejo de alta reflectividad tipo 'wet look' (aspecto húmedo).",
          "Propiedades antideslizantes que garantizan la seguridad de los socios al caminar.",
          "Resistente a los trapeados diarios con limpiadores neutros."
        ],
        usage: "Protección y embellecimiento de pisos principales en casa club y oficinas.",
        dosage: "1 litro rinde aproximadamente de 40 a 50 metros cuadrados por capa.",
        dilution: "Aplicar directo con mopa de microfibra limpia sobre piso seco y libre de polvo. Aplicar 2 a 3 capas.",
        phImpact: "Neutro una vez seco.",
        safety: "Dejar secar por completo antes de abrir el tráfico. No congelar el producto líquido.",
        badge: "Pisos Espejo Antiderrapantes"
      }
    ]
  },
  ahorro: {
    title: "Ahorro & Ecología",
    accentColor: "var(--color-ahorro)",
    slogan: "Sustentabilidad financiera y ambiental para el Club de Golf Las Lomas con inyección de alta concentración.",
    products: [
      {
        id: "eco_doser",
        name: "Sistema Eco-Doser Swipe",
        tagline: "Dispensadores automáticos de precisión",
        description: "Equipo de dosificación en comodato que inyecta la cantidad exacta de producto Swipe concentrado diluido en agua corriente. Garantiza control total de inventarios y costo por litro inigualable.",
        benefits: [
          "Elimina el desperdicio por error manual.",
          "Instalación sin costo sujeta a volumen contractual.",
          "Llave de seguridad y calibración por personal técnico de Swipe."
        ],
        usage: "Control de dosificación en lavandería, mantenimiento y cocinas.",
        dosage: "Precalibrado según el producto químico a dispensar.",
        dilution: "Diluciones automáticas reguladas por venturi.",
        phImpact: "No aplica.",
        safety: "Previene salpicaduras del producto concentrado, 100% seguro para el operador.",
        badge: "Control de Insumos"
      },
      {
        id: "audit_service",
        name: "Auditoría de Costo-Beneficio",
        tagline: "Análisis y plan de optimización de presupuesto en sitio",
        description: "Estudio técnico personalizado para el Club de Golf Las Lomas. Analizamos tus procesos de limpieza actuales para proponer el sistema de diluciones Swipe adecuado, reduciendo costos drásticamente.",
        benefits: [
          "Ahorro inmediato comprobado de hasta un 45% del gasto mensual.",
          "Capacitación presencial al personal y entrega de guías de uso visuales.",
          "Soporte técnico continuo con reportes de consumo bimensuales."
        ],
        usage: "Estudio inicial de operaciones en sitio sin costo ni compromiso.",
        dosage: "Reunión técnica de diagnóstico de 2 horas en el Club.",
        dilution: "Personalizado por nuestro Ingeniero de Ventas Swipe.",
        phImpact: "No aplica.",
        safety: "Protocolo de visitas bajo estrictas normas de seguridad del club.",
        badge: "Servicio Sin Costo"
      }
    ]
  },
  demo: {
    title: "Demos & Pruebas en Sitio",
    accentColor: "var(--color-demo)",
    slogan: "Comprueba el rendimiento y resultados espectaculares de Swipe directamente en tus instalaciones.",
    products: [
      {
        id: "demo_alberca",
        name: "Demo: Clarificación Express",
        tagline: "Prueba de floculación instantánea en tu alberca",
        description: "Programamos una prueba en vivo del Clarificador Gold en la alberca de tu elección. Observa el brillo espejo y la aglutinación de turbidez en tiempo récord ante tu personal.",
        benefits: [
          "Demostración física sin costo con resultados en 12 horas.",
          "Medición y análisis digital de parámetros químicos del agua sin costo.",
          "Capacitación express al operador de la alberca durante la prueba."
        ],
        usage: "Albercas principales o jacuzzis con problemas de turbidez.",
        dosage: "Aplicado de forma controlada por nuestro especialista técnico.",
        dilution: "Directo en la succión o retorno seleccionado de prueba.",
        phImpact: "Neutro.",
        safety: "Seguro. No altera el balance de desinfección existente.",
        badge: "Prueba Sin Compromiso"
      },
      {
        id: "demo_cocina",
        name: "Demo: Desengrase Extremo",
        tagline: "Remoción de cochambre carbonizado en vivo",
        description: "Llevamos nuestro Super Degreaser Plus a tu cocina y lo probamos en tu campana, plancha o freidora más sucia. Observa cómo disuelve el cochambre más denso sin esfuerzo.",
        benefits: [
          "Demostración inmediata de la reducción de horas-hombre de tallado.",
          "Prueba de no corrosión en tu acero inoxidable de grado alimenticio.",
          "Entrega de muestra física para que tu personal continúe la prueba."
        ],
        usage: "Cocina caliente del restaurante principal o snack del club.",
        dosage: "Cuadrante de prueba de 50x50 cm aplicado en sitio.",
        dilution: "Dilución activa 1:3 a 1:5 según el nivel de cochambre.",
        phImpact: "Altamente alcalino, manejado por nuestro Ingeniero técnico.",
        safety: "Aplicación segura con equipo de protección industrial Swipe.",
        badge: "Garantía de Resultados"
      }
    ]
  }
};
