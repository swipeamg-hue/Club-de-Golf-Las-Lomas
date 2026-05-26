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
      },
      {
        id: "blue_genie_spa",
        name: "Swipe Blue Genie",
        tagline: "Desinfectante y desodorizante enzimático para sanitarios",
        description: "Es un limpiador enzimático y biodegradable perfecto para los inodoros de la Casa Club y áreas de vestidores. Actúa en el tanque y la taza inhibiendo el crecimiento bacteriano, eliminando olores y evitando depósitos de sarro de forma automática en cada descarga.",
        benefits: [
          "Doble acción automática: Limpieza enzimática constante en el tanque y la taza en cada descarga.",
          "Control bacteriano y desodorización de larga duración para sanitarios de alto tráfico.",
          "Evita depósitos de sarro sin dañar ni manchar la porcelana o cerámica de los inodoros.",
          "100% biodegradable y seguro para sistemas de tuberías y fosas sépticas."
        ],
        usage: "Mantenimiento automático, desinfección y desodorización de inodoros en vestidores y Casa Club.",
        dosage: "Dosificación automática mediante descarga de agua del tanque. Rinde de 2 a 3 meses.",
        dilution: "Dispositivo de liberación lenta: 1 unidad de 250g rinde aproximadamente 900 descargas.",
        phImpact: "Ligeramente alcalino (pH balanceado y protector).",
        safety: "Seguro al tacto en su dispositivo dosificador. Biodegradable y no corrosivo.",
        badge: "Desinfectante Enzimático",
        image: "images/blue_genie.png"
      },
      {
        id: "swipol_spa",
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
        usage: "Control e inhibición de hongos en vestidores y desinfección perimetral de albercas.",
        dilution: "Dilución de uso general y perimetral de grado quirúrgico y alimenticio.",
        phImpact: "Completamente neutro y estable ante aguas duras.",
        safety: "No irritante para la piel en dilución. Totalmente incoloro e inoloro.",
        badge: "Alguicida Especializado",
        image: "images/swipol.png"
      }
    ]
  },
  gimnasio: {
    title: "Gimnasio & Fitness",
    accentColor: "var(--color-gimnasio)",
    slogan: "Máxima higiene deportiva que protege la salud de los socios y preserva las instalaciones del club.",
    products: [
      {
        id: "swipe_concentrado_gym",
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
        id: "swipol_gym",
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
        badge: "Alguicida Especializado",
        image: "images/swipol.png"
      }
    ]
  },
  gastronomia: {
    title: "Gastronomía & Cocinas",
    accentColor: "var(--color-gastronomia)",
    slogan: "Cocinas de clase mundial impecables. Seguridad alimentaria total y vajillas resplandecientes.",
    products: [
      {
        id: "swipe_concentrado_gastronomia",
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
        id: "swipol_gastronomia",
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
        usage: "Control e inhibición de hongos en vestidores y desinfección perimetral de albercas.",
        dosage: "Dosificación recomendada según el área a desinfectar y volumen de recirculación.",
        dilution: "Dilución de uso general y perimetral de grado quirúrgico y alimenticio.",
        phImpact: "Completamente neutro y estable ante aguas duras.",
        safety: "No irritante para la piel en dilución. Totalmente incoloro e inoloro.",
        badge: "Alguicida Especializado",
        image: "images/swipol.png"
      },
      {
        id: "freezer_cleaner",
        name: "Freezer Cleaner",
        tagline: "Limpiador desengrasante para congeladores y cámaras frías",
        description: "Limpiador especializado de alto rendimiento diseñado para operar en temperaturas de congelación extremas de hasta -55 °C. Permite realizar la limpieza profunda y el desengrase de cámaras de congelación y cuartos fríos sin apagar los equipos, garantizando que nunca se rompa la cadena de frío.",
        benefits: [
          "Limpieza en frío extremo: Evita el apagado de equipos y el deshielo, ahorrando energía y tiempo.",
          "Preservación de la cadena de frío: Protege la integridad y sanidad de los alimentos almacenados.",
          "Fórmula de rápida acción: Desengrasa y limpia a fondo depósitos difíciles y suciedad congelada.",
          "Seguridad operativa: No inflamable, biodegradable y totalmente inofensivo para metales."
        ],
        usage: "Limpieza profunda de cámaras de congelación extrema, cuartos fríos de almacenamiento y refrigeradores comerciales.",
        dosage: "Uso concentrado para frío extremo (-55 °C) | Solución 1:1 para frío regular (-20 °C) | Solución 1:5 para refrigeradores (-6 °C).",
        dilution: "Uso Concentrado (-55 °C): Aplicación directa. | Solución 1:1 (-20 °C): 1 parte de producto por 1 de agua. | Solución 1:5 (-6 °C): 1 parte de producto por 5 de agua.",
        phImpact: "Alcalinidad balanceada, formulado para no dañar serpentines ni superficies metálicas.",
        safety: "Seguro de aplicar en frío. Utilizar el equipo de protección adecuado para áreas congeladas. Evitar contacto con los ojos.",
        badge: "Frío Extremo hasta -55 °C",
        image: "images/freezer_cleaner.png"
      },
      {
        id: "crystal",
        name: "Crystal",
        tagline: "Detergente líquido manual lavaloza de alto rendimiento",
        description: "Detergente líquido lavaloza altamente concentrado y biodegradable. Formulado específicamente para el lavado manual de cristalería, vajillas y loza fina en cocinas y eventos de alta exigencia del club. Su tecnología de escurrimiento avanzado previene el molesto efecto de gota, logrando un brillo impecable.",
        benefits: [
          "Rendimiento extraordinario: 1 litro rinde hasta 100 litros de solución útil de lavado.",
          "Cero efecto de gota: Acabado impecable y brillante en cristalería y vajillas finas sin manchar.",
          "pH Neutro y Grado Alimenticio: Certificado para la eliminación eficaz de bacterias y hongos sin maltratar las manos del personal.",
          "Acción desengrasante superior: Remueve grasa pesada e incrustaciones difíciles en sartenes y loza."
        ],
        usage: "Lavado manual de loza fina, cristalería, vajillas, sartenes y cubiertos en eventos y cocinas del club.",
        dosage: "Normal: 10 ml/L para limpieza diaria. | Grasa Pesada: 15 ml/L para sartenes y residuos difíciles.",
        dilution: "Dilución en agua: 1 litro rinde hasta 100 litros de solución útil (1:100).",
        phImpact: "pH Neutro (7.0) - Totalmente inofensivo para la piel y superficies delicadas.",
        safety: "Grado alimenticio certificado. Dermatológicamente seguro, biodegradable y libre de fosfatos.",
        badge: "Cero Efecto Gota / Rinde 1:100",
        image: "images/crystal.png"
      },
      {
        id: "grease",
        name: "Grease",
        tagline: "Quitacochambre definitivo en gel de máxima adherencia",
        description: "Limpiador quitacochambre súper activo formulado en gel de alta viscosidad para la remoción definitiva de grasa carbonizada en hornos, planchas, parrillas y freidoras. Su formato en gel permite una adherencia superior en superficies verticales, prolongando el tiempo de acción sin escurrimientos ni desperdicios.",
        benefits: [
          "Formato en gel autoadherente: Elimina los escurrimientos y el desperdicio de producto.",
          "Acción profunda y simultánea: Remueve al mismo tiempo capas superiores y profundas de grasa carbonizada extrema.",
          "Especializado para cocinas y banquetes: Ideal para hornos, planchas y parrillas de hierro o acero inoxidable.",
          "Rápida acción: Resultados contundentes y remoción fácil en un lapso de 5 a 30 minutos."
        ],
        usage: "Quitacochambre definitivo para hornos, planchas, freidoras y parrillas de hierro/acero inoxidable.",
        dosage: "Listo para usar. Se aplica directo con brocha sobre la superficie fría.",
        dilution: "Aplicación Directa (Gel Concentrado). No se diluye.",
        phImpact: "Altamente alcalino para romper y saponificar grasas carbonizadas.",
        safety: "Obligatorio el uso de guantes de hule. NO aplicar sobre superficies calientes ni sobre aluminio.",
        badge: "Gel Adherente Quitacochambre",
        image: "images/grease.png"
      },
      {
        id: "crystal_dwm",
        name: "Crystal DWM",
        tagline: "Detergente concentrado de espuma controlada para lavalozas industriales",
        description: "Detergente líquido de espuma controlada de alta concentración, diseñado especialmente para máquinas lavalozas industriales de alta demanda. Asegura una limpieza impecable y un brillo reluciente en cristalería, vajillas y cubiertos en restaurantes y áreas de banquetes del club.",
        benefits: [
          "Ultra concentrado y económico: Requiere solo de 8 ml a 12 ml por ciclo en equipos modernos.",
          "Espuma controlada: Diseñado especialmente para optimizar la acción mecánica de lavado dentro de la máquina.",
          "Doble ventaja operativa: Limpia impecablemente la loza y al mismo tiempo desincrusta el interior de la máquina (elimina calcificaciones).",
          "Eficiencia térmica: Actúa perfectamente a menos de 50 °C, evitando el uso forzoso de calderas y reduciendo el consumo energético."
        ],
        usage: "Detergente de lavado automático para máquinas lavaloza en banquetes y restaurantes.",
        dosage: "Dosificación automática o manual de 8 ml a 12 ml de producto por cada ciclo de lavado.",
        dilution: "Inyección automatizada directa al ciclo de lavado de la máquina.",
        phImpact: "Alcalino desincrustante controlado, estable frente a aguas duras.",
        safety: "Evitar contacto directo con la piel y ojos. Diseñado exclusivamente para uso automático mecánico en lavalozas.",
        badge: "Doble Acción & Ahorro Energético",
        image: "images/crystal_dwm.png"
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
        id: "swipol_mantenimiento",
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
        usage: "Control e inhibición de hongos en vestidores y desinfección perimetral de albercas.",
        dilution: "Dilución de uso general y perimetral de grado quirúrgico y alimenticio.",
        phImpact: "Completamente neutro y estable ante aguas duras.",
        safety: "No irritante para la piel en dilución. Totalmente incoloro e inoloro.",
        badge: "Alguicida Especializado",
        image: "images/swipol.png"
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
      },
      {
        id: "rust_off",
        name: "Swipe Rust Off",
        tagline: "Desincrustante ácido industrial con inhibidores de corrosión",
        description: "Poderoso desincrustante industrial de tipo ácido, totalmente biodegradable, formulado con inhibidores de corrosión activos. Elimina de manera efectiva carbonatos de calcio y magnesio (sarro) adheridos a calderas, tuberías y maquinaria pesada, además de remover óxido, concreto y grasas incrustadas.",
        benefits: [
          "Inhibidores de corrosión: Protege las piezas metálicas activamente durante el proceso de desincrustación.",
          "Acción antioxidante: Contiene agentes que evitan que las piezas tratadas vuelvan a oxidarse rápidamente.",
          "Fórmula 100% biodegradable: Seguro para tuberías y sistemas del club una vez neutralizado y enjuagado.",
          "Remoción de sarro y concreto: Elimina incrustaciones gruesas de calcio, magnesio y restos de obra civil."
        ],
        usage: "Eliminación de sarro en calderas/tuberías, remoción de óxido en metales y sarro/grasa animal extrema en cocinas.",
        dosage: "Mantenimiento Normal (1:10) | Uso Pesado (Concentrado o dilución fuerte) según nivel de incrustación.",
        dilution: "Mantenimiento Normal (1:10): 1 parte de producto por 10 partes de agua. Uso Pesado: aplicar directo. Rociar, dejar actuar 10-15 minutos y después enjuagar (apoyarse con una fibra verde SWIPE si es necesario).",
        phImpact: "Ácido activo desincrustante (requiere enjuague completo).",
        safety: "NUNCA mezclar con cloro ni con ningún otro producto. Obligatorio utilizar guantes de hule, goggles de protección y trabajar en áreas ventiladas.",
        badge: "Desincrustante & Antioxidante",
        image: "images/rust_off.png"
      },
      {
        id: "alubrite",
        name: "Swipe Alubrite",
        tagline: "Abrillantador y limpiador desincrustante de base ácida para aluminio y acero",
        description: "Abrillantador y desincrustante altamente eficiente de base ácida diseñado para restaurar el brillo original en superficies de aluminio y acero inoxidable. Penetra la suciedad y elimina los óxidos blancos protectores sin dañar la pintura ni calcomanías.",
        benefits: [
          "Restauración total: Elimina óxidos blancos y opacidad devolviendo el brillo original de fábrica.",
          "Fórmula espumosa: Crea una capa de espuma fina y densa que se adhiere y penetra en el metal.",
          "Protección de acabados: No daña la pintura ni las calcomanías decorativas de los vehículos.",
          "Rápida acción: Remueve suciedad adherida actuando en un periodo de 3 a 5 minutos."
        ],
        usage: "Limpieza y abrillantado de cancelería, puertas de aluminio, escaleras de albercas y rines de rines de carros de golf.",
        dosage: "Dilución activa de 1:10 a 1:20 según la severidad de la incrustación.",
        dilution: "Se diluye 1 parte de producto por 10 a 20 partes de agua. Aplicar de abajo hacia arriba, dejar actuar entre 3 y 5 minutos, y enjuagar inmediatamente con abundante agua para evitar marcas.",
        phImpact: "Ácido fluorhídrico altamente activo.",
        safety: "QUÍMICO TÓXICO Y ALTAMENTE CORROSIVO (Contiene Ácido Fluorhídrico). Obligatorio el uso de goggles, guantes de neopreno y mandil especial para ácidos. No usar sobre aluminio anodizado ni metales no ferrosos distintos al aluminio. NUNCA mezclar con cloro.",
        badge: "Abrillantador & Restaurador",
        image: "images/alubrite.png"
      },
      {
        id: "steelbrite",
        name: "Swipe Steelbrite",
        tagline: "Abrillantador y desincrustante de grado alimentario para acero inoxidable",
        description: "Poderosa fórmula de grado alimenticio diseñada específicamente para eliminar incrustaciones de sales minerales (sarro) y grasas pesadas en todas las superficies de acero inoxidable del club. Está formulado con inhibidores de corrosión que protegen las valiosas piezas metálicas de la acción de los ácidos.",
        benefits: [
          "Grado Alimenticio: Perfecto para campanas, mesas de trabajo, ollas y equipos de cocina industrial.",
          "Inhibidores de corrosión: Protege las valiosas piezas metálicas de la acción ácida durante la desincrustación.",
          "Restauración total: Diseñado para eliminar de manera efectiva sarro y grasas pesadas acumuladas.",
          "Brillo espejo seguro: Devuelve el acabado brillante de fábrica aplicando exclusivamente con fibra blanca suave."
        ],
        usage: "Limpieza y desincrustación de sarro/grasa en campanas, mesas de trabajo, ollas, herramientas y cuartos fríos.",
        dosage: "Se utiliza diluido en una proporción de 1:5 a 1:10 partes de agua, dependiendo de qué tan severas sean las incrustaciones.",
        dilution: "Dilución 1:5 a 1:10 en agua. Aplicar obligatoriamente con una fibra blanca (suave), evitando estrictamente fibras verdes o negras que puedan rayar el acero.",
        phImpact: "Ácido protector controlado.",
        safety: "NUNCA mezclar con cloro bajo ninguna circunstancia. El personal debe utilizar guantes de hule y lentes de seguridad durante su manejo en áreas bien ventiladas.",
        badge: "Grado Alimenticio & Protector",
        image: "images/steelbrite.png"
      },
      {
        id: "sure_thing",
        name: "Swipe Sure Thing",
        tagline: "Desodorante, aromatizante y desinfectante ambiental biodegradable",
        description: "Líquido altamente concentrado que funciona como desodorante y desinfectante de ambiente biodegradable de acción neutralizadora absoluta. Elimina olores de raíz de origen orgánico (tabaco, humedad, comida) en vez de solo enmascararlos.",
        benefits: [
          "Neutralización real: Contiene degradadores de materia orgánica y agentes germicidas activos.",
          "Sinergia Swipol: Único aromatizante compatible con Swipol que limpia, desinfecta y aromatiza en un solo paso.",
          "Variedad premium: Disponible en aromas menta, floral, canela y vainilla para salones de Casa Club.",
          "Gran rendimiento: Concentración extrema que rinde desde gotas puras hasta aspersión de amplias áreas."
        ],
        usage: "Aromatización, desinfección y desodorización en recepciones, oficinas, baños, comedores y salones.",
        dosage: "Uso Directo (Gotas puras) | Aspersión (30 a 60 gotas en medio litro de agua) según la necesidad.",
        dilution: "Directo: aplicar gotas en ceniceros/botes, o regular inserto. Aspersión: 30-60 gotas por 500 ml de agua en atomizador. Combinable con desinfectante Swipol.",
        phImpact: "Ligeramente alcalino (aromatizante activo).",
        safety: "Producto flamable. Almacenar adecuadamente alejado de fuentes de calor. Mantener envase bien cerrado.",
        badge: "Neutralizador Aromatizante",
        image: "images/sure_thing.png"
      },
      {
        id: "biodegreaser",
        name: "Swipe Biodegreaser",
        tagline: "Cultivo biológico premium para drenajes y trampas de grasa",
        description: "Mezcla natural, no tóxica y no corrosiva de microorganismos activos diseñada específicamente para desintegrar almidones, carbohidratos, grasas y aceites. Funciona como el tratamiento preventivo ideal para trampas de grasa y drenajes del club.",
        benefits: [
          "Fórmula biológica activa: Microorganismos que digieren grasas y aceites orgánicos de forma natural.",
          "Control de malos olores: Su uso diario continuo neutraliza de raíz los aromas desagradables del drenaje.",
          "Cero daño a tuberías: Composición biológica no corrosiva ni ácida que protege la infraestructura.",
          "Automatización sencilla: Compatible con el dosificador automático BIODEGREASER para inyección precisa."
        ],
        usage: "Tratamiento biológico preventivo y correctivo en trampas de grasa, tuberías, drenajes y fosas del club.",
        dosage: "Dosificación diaria de 200 ml por cada 500 litros de capacidad de la trampa o drenaje.",
        dilution: "Uso directo concentrado. Aplicar de noche o en un horario en donde la línea de drenaje o la trampa de grasa no se encuentre en uso.",
        phImpact: "Cercano a neutro (biodegradación bacteriana activa).",
        safety: "Cultivo biológico vivo. NUNCA mezclar con desinfectantes, cloro, ni productos ácidos o alcalinos, para evitar la inactivación celular.",
        badge: "Cultivo Biológico Activo",
        image: "images/biodegreaser.png"
      },
      {
        id: "hand_soap",
        name: "Swipe Hand Soap",
        tagline: "Jabón líquido germicida antimicrobial de grado alimenticio",
        description: "Jabón líquido germicida de alto desempeño formulado con pH balanceado y grado alimentario. Elimina de manera inmediata una amplia gama de bacterias, hongos y levaduras, asegurando la máxima asepsia en las manos del personal.",
        benefits: [
          "Grado Alimenticio: Indispensable para cocineros y personal de preparación de alimentos.",
          "Espectro antimicrobial: Elimina activamente bacterias y hongos como S. aureus, E. coli y Salmonella.",
          "pH Balanceado (5 a 6): En armonía con la química de la piel para evitar resequedad por lavado frecuente.",
          "Aromas e inocuidad: Disponible en aroma almendras/frutas, y versión sin fragancia ni color."
        ],
        usage: "Higiene y desinfección rigurosa de manos en cocinas, comedores, baños generales, consultorio médico y guardería.",
        dosage: "Uso concentrado directo sin diluir mediante despachadores de jabón SWIPE.",
        dilution: "Aplicar directo una dosis en las manos frotándolas firmemente durante 1 minuto, enjuagar posteriormente con abundante agua.",
        phImpact: "pH balanceado de 5.0 a 6.0 idóneo para la piel humana.",
        safety: "Uso externo exclusivamente. Evitar contacto con los ojos. Enjuagar bien después de frotar.",
        badge: "Antimicrobial & pH Balanceado",
        image: "images/hand_soap.png"
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
