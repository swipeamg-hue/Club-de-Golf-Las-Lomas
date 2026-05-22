/**
 * Lógica de interacción principal y flujos de usuario (SPA)
 * para la presentación de químicos de Club de Golf Las Lomas.
 */

// Estado global de la aplicación
const AppState = {
  activeArea: null,
  quoteCart: [], // Array de objetos { id, name, area, qty }
  isClickLocked: false, // Bloqueo permanente al hacer clic para evitar pérdidas por mouseleave accidental
};

// Variable para controlar el retraso (debounce) en las transiciones de hover y evitar el "hover storm"
let hoverTimeout = null;

document.addEventListener("DOMContentLoaded", () => {
  initColumnTransitions();
  initProductDrawer();
  initQuoteSystem();
  renderCatalogProducts();
});

/**
 * 1. TRANSICIONES DE COLUMNAS (SPA)
 */
function initColumnTransitions() {
  const columns = document.querySelectorAll(".area-column");
  const container = document.querySelector(".columns-container");

  columns.forEach((column) => {
    // Evento de hover para computadoras (menú de inicio vertical)
    column.addEventListener("mouseenter", function () {
      // CRÍTICO: Si ya estamos en vista expandida o de pestañas superiores, ignorar por completo
      // el mouseenter directo en el cuerpo de las columnas. Las transiciones en modo horizontal
      // solo deben ser provocadas por los triggers estáticos (.tab-trigger) a z-index 150.
      if (container.classList.contains("has-hover-active") || container.classList.contains("has-active-column")) {
        return;
      }

      const areaId = this.getAttribute("data-area");
      
      // Limpiar cualquier transición pendiente anterior
      if (hoverTimeout) clearTimeout(hoverTimeout);

      // Debounce de 50ms en la primera apertura vertical para asegurar estabilidad
      hoverTimeout = setTimeout(() => {
        activateColumnHover(this, areaId, container);
      }, 50);
    });

    // Evento de click para bloquear vista y soporte táctil
    column.addEventListener("click", function (e) {
      if (e.target.closest("button") || e.target.closest(".close-section-btn") || e.target.closest(".product-actions")) return;

      // Limpiar cualquier transición por hover pendiente al hacer clic
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }

      const areaId = this.getAttribute("data-area");
      activateColumnClick(this, areaId, container);
    });
  });

  // Triggers estáticos para las pestañas superiores (evita el "hover storm" o "flickering" al deslizar por el menú horizontal)
  const tabTriggers = document.querySelectorAll(".tab-trigger");
  tabTriggers.forEach((trigger) => {
    const areaId = trigger.getAttribute("data-area");
    const targetCol = document.getElementById(`col-${areaId}`);

    trigger.addEventListener("mouseenter", function () {
      if (targetCol) {
        targetCol.classList.add("tab-hovered");
        
        // Limpiar cualquier transición por hover pendiente
        if (hoverTimeout) clearTimeout(hoverTimeout);

        // Debounce estratégico de 80ms para evitar parpadeos y cambios rápidos accidentales al deslizar el cursor a través de las pestañas
        hoverTimeout = setTimeout(() => {
          activateColumnHover(targetCol, areaId, container);
        }, 80);
      }
    });

    trigger.addEventListener("mouseleave", function () {
      if (targetCol) {
        targetCol.classList.remove("tab-hovered");
      }
      
      // Limpiar timeout si el cursor sale de la pestaña antes de cumplirse el debounce
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }
    });

    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      
      // Limpiar cualquier transición por hover pendiente al hacer clic
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }

      if (targetCol) {
        activateColumnClick(targetCol, areaId, container);
      }
    });
  });

  // Evento de salida del contenedor general (restablece al menú si no está bloqueado por clic)
  container.addEventListener("mouseleave", function () {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      hoverTimeout = null;
    }
    if (!AppState.isClickLocked) {
      deactivateHoverTransitions(container);
    }
  });

  // Botones de cierre de sección
  const closeBtns = document.querySelectorAll(".close-section-btn");
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation(); // Detener propagación
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }
      deactivateAllColumns(container);
    });
  });
}

function activateColumnHover(columnElem, areaId, containerElem) {
  // Si ya es la columna hover-active actual, no hacer nada
  if (columnElem.classList.contains("hover-active")) return;

  AppState.activeArea = areaId;
  
  // Agregar clases para activar layouts y ocultar encabezado general
  document.body.classList.add("section-active");
  containerElem.classList.add("has-hover-active");
  
  // Limpiar hover activo y clase active de las demás para evitar superposiciones
  const allCols = containerElem.querySelectorAll(".area-column");
  allCols.forEach(c => {
    c.classList.remove("hover-active");
    if (c !== columnElem) {
      c.classList.remove("active");
    }
  });
  
  columnElem.classList.add("hover-active");
  
  // Si está bloqueado por clic, transferir la clase active a la columna actual
  if (AppState.isClickLocked) {
    columnElem.classList.add("active");
    containerElem.classList.add("has-active-column");
  }

  // Renderizar la calculadora correspondiente
  if (CALCULATORS[areaId]) {
    CALCULATORS[areaId].render(`calc-container-${areaId}`);
  }
}

function activateColumnClick(columnElem, areaId, containerElem) {
  AppState.isClickLocked = true;
  
  // Sincronizar el estado active con el estado hover para compatibilidad en estilos y touch
  containerElem.classList.add("has-active-column");
  
  const allCols = containerElem.querySelectorAll(".area-column");
  allCols.forEach(c => c.classList.remove("active"));
  columnElem.classList.add("active");
  
  activateColumnHover(columnElem, areaId, containerElem);
}

function deactivateHoverTransitions(containerElem) {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout);
    hoverTimeout = null;
  }

  containerElem.classList.remove("has-hover-active");
  const allCols = containerElem.querySelectorAll(".area-column");
  allCols.forEach(c => {
    c.classList.remove("hover-active");
    c.classList.remove("tab-hovered");
  });

  if (!AppState.isClickLocked) {
    document.body.classList.remove("section-active");
    AppState.activeArea = null;
  }
}

function deactivateAllColumns(containerElem) {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout);
    hoverTimeout = null;
  }

  AppState.isClickLocked = false;
  AppState.activeArea = null;
  
  containerElem.classList.remove("has-hover-active");
  containerElem.classList.remove("has-active-column");
  
  const allCols = containerElem.querySelectorAll(".area-column");
  allCols.forEach(c => {
    c.classList.remove("hover-active");
    c.classList.remove("active");
    c.classList.remove("tab-hovered");
  });
  
  document.body.classList.remove("section-active");
}

/**
 * 2. RENDERIZADO DEL CATÁLOGO DE PRODUCTOS
 */
function renderCatalogProducts() {
  // Recorrer cada área en la base de datos
  Object.keys(PRODUCTS_DATA).forEach((areaId) => {
    const areaData = PRODUCTS_DATA[areaId];
    const catalogGrid = document.getElementById(`catalog-grid-${areaId}`);
    if (!catalogGrid) return;

    let cardsHtml = "";
    areaData.products.forEach((product) => {
      // Determinar icono SVG adecuado
      let iconSvg = getProductIconSvg(product.id);

      cardsHtml += `
        <div class="product-card" style="color: ${areaData.accentColor}" data-product-id="${product.id}">
          <div class="product-icon-container">
            ${iconSvg}
          </div>
          <div class="product-details">
            <span class="product-badge">${product.badge}</span>
            <h4 class="product-name">${product.name}</h4>
            <span class="product-tagline">${product.tagline}</span>
            <p class="product-description">${product.description.substring(0, 120)}...</p>
            <div class="product-actions">
              <button class="btn-details" onclick="showProductDetails('${product.id}', '${areaId}')">
                <svg style="width:14px; height:14px; fill:none; stroke:currentColor; stroke-width:2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
                </svg>
                Ficha Técnica
              </button>
              <button class="btn-quote" onclick="addToQuoteCart('${product.id}', '${areaId}')">
                <svg style="width:14px; height:14px; fill:none; stroke:currentColor; stroke-width:2.5" viewBox="0 0 24 24">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
                Agregar
              </button>
            </div>
          </div>
        </div>
      `;
    });

    catalogGrid.innerHTML = cardsHtml;
  });
}

function getProductIconSvg(productId) {
  // Iconos SVG personalizados según el producto
  const icons = {
    shock_cloro: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    alguicida_max: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" stroke-linecap="round"/><path d="M12 6c-2.5 0-4 1.5-4 4 0 4 3 5 3 7.5S9.5 20 7 20" stroke-linecap="round"/></svg>`,
    clarificador_gold: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    ph_balance: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76zM16 8l3 3M9.5 14.5l-1.5 1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    eucalyptus_vapor: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" stroke-linecap="round"/></svg>`,
    organic_sanitizer: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    linen_relax: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    jacuzzi_clear: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" stroke-linecap="round"/><path d="M8 12h8" stroke-linecap="round"/></svg>`,
    gym_spray: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5h20c0-2-1-4-2.5-5.5" stroke-linecap="round"/><path d="M12 2v14M8 5l4-3 4 3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    odor_kill: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" stroke-linecap="round"/><path d="M12 8v4l3 3" stroke-linecap="round"/></svg>`,
    floor_active: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zM9 9h6v6H9V9z" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    dermo_wash: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    grease_remover: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1.5-3-1 1-1.5 1.62-1.5 3a2.5 2.5 0 0 0 .5 2.5zM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    dish_auto: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    fruit_wash: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke-linecap="round"/><path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    surface_food: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    swipe_concentrate: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    glass_glow: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    cart_wash: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7c0 .6.4 1 1 1h2M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    floor_shine: `<svg class="product-icon-svg" viewBox="0 0 24 24"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" stroke-linecap="round"/><path d="M12 18v-6" stroke-linecap="round"/><circle cx="12" cy="8" r="1"/></svg>`,
    eco_doser: `<svg class="product-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M12 8v8M8 12h8"/></svg>`,
    audit_service: `<svg class="product-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20V10M18 20V4M6 20v-4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    demo_alberca: `<svg class="product-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" stroke-linecap="round"/></svg>`,
    demo_cocina: `<svg class="product-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1.5-3-1 1-1.5 1.62-1.5 3a2.5 2.5 0 0 0 .5 2.5zM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  };
  
  return icons[productId] || icons.swipe_concentrate;
}

/**
 * 3. CAJÓN DE DETALLES (DRAWER DE PRODUCTO)
 */
function initProductDrawer() {
  const overlay = document.getElementById("drawer-overlay");
  const closeBtn = document.getElementById("drawer-close");

  const closeDrawer = () => {
    overlay.classList.remove("open");
  };

  closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeDrawer();
  });
}

window.showProductDetails = function (productId, areaId) {
  AppState.isClickLocked = true; // Bloquear colapso durante visualización de ficha técnica
  const product = PRODUCTS_DATA[areaId].products.find((p) => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById("drawer-overlay");
  const content = document.getElementById("drawer-content-body");

  // Inyectar el color de acento de la sección al drawer
  const accentColor = PRODUCTS_DATA[areaId].accentColor;
  const drawerEl = document.querySelector(".product-drawer");
  drawerEl.style.borderColor = accentColor;
  drawerEl.style.color = accentColor;

  // Construir HTML del cajón
  let benefitsHtml = product.benefits.map((b) => `<li class="drawer-list-item">${b}</li>`).join("");

  content.innerHTML = `
    <div class="drawer-header-info">
      <span class="product-badge" style="color: ${accentColor}; border-color: ${accentColor}">${product.badge}</span>
      <h2 class="product-name" style="font-size: 2.2rem; color: #fff; margin-top:0.5rem; font-family: var(--font-title); font-weight:800;">${product.name}</h2>
      <p class="product-tagline" style="color: ${accentColor}; font-weight:600; font-size:1rem; margin-top:0.2rem;">${product.tagline}</p>
    </div>
    
    <div class="drawer-content">
      <div class="drawer-section">
        <h4 class="drawer-sec-title" style="color: ${accentColor}">Descripción</h4>
        <p class="drawer-sec-content">${product.description}</p>
      </div>

      <div class="drawer-section">
        <h4 class="drawer-sec-title" style="color: ${accentColor}">Beneficios Clave</h4>
        <ul class="drawer-list" style="color: var(--color-glass-text)">
          ${benefitsHtml}
        </ul>
      </div>

      <div class="drawer-section" style="background: rgba(255,255,255,0.02); padding: 1.2rem; border-radius:12px; border: 1px solid rgba(255,255,255,0.04)">
        <h4 class="drawer-sec-title" style="color: ${accentColor}; margin-bottom: 0.5rem">Guía de Dosificación</h4>
        <div style="font-size: 0.85rem; line-height:1.5;">
          <p style="margin-bottom:0.4rem;"><strong>Aplicación:</strong> ${product.usage}</p>
          <p style="margin-bottom:0.4rem;"><strong>Dosificación:</strong> ${product.dosage}</p>
          <p><strong>Dilución / Método:</strong> ${product.dilution}</p>
        </div>
      </div>

      <div class="safety-alert-box">
        <span class="safety-icon">⚠️</span>
        <div class="safety-text">
          <strong>Seguridad y Manejo:</strong> ${product.safety}
        </div>
      </div>
    </div>
  `;

  // Abrir Drawer
  overlay.classList.add("open");
};

/**
 * 4. SISTEMA DE COTIZACIÓN (CARRITO Y FORMULARIO)
 */
function initQuoteSystem() {
  const floatingBar = document.getElementById("quotes-floating-bar-container");
  const openModalBtn = document.getElementById("btn-open-quotes");
  const modalOverlay = document.getElementById("quotes-modal-overlay");
  const closeModalBtn = document.getElementById("quotes-close-modal");
  const quoteForm = document.getElementById("quotes-form-submit");

  // Abrir Modal
  floatingBar.addEventListener("click", (e) => {
    // Si se hace click en el botón o en la barra en general
    openQuotesModal();
  });

  // Cerrar Modal
  const closeQuotesModal = () => {
    modalOverlay.classList.remove("open");
  };

  closeModalBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeQuotesModal();
  });
  
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeQuotesModal();
  });

  // Envío de Formulario
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitQuoteRequest();
  });
}

window.addToQuoteCart = function (productId, areaId) {
  AppState.isClickLocked = true; // Bloquear colapso al añadir productos
  const product = PRODUCTS_DATA[areaId].products.find((p) => p.id === productId);
  if (!product) return;

  // Buscar si ya existe en el carrito
  const existingItem = AppState.quoteCart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    AppState.quoteCart.push({
      id: productId,
      name: product.name,
      area: areaId,
      areaTitle: PRODUCTS_DATA[areaId].title,
      qty: 1,
    });
  }

  updateQuoteUI();
  
  // Pequeño efecto visual en la tarjeta
  const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
  if (card) {
    card.style.transform = "scale(0.98)";
    setTimeout(() => {
      card.style.transform = "";
    }, 150);
  }
};

function updateQuoteUI() {
  const floatingBar = document.getElementById("quotes-floating-bar-container");
  const badgeCount = document.getElementById("quotes-badge-count");
  
  const totalItems = AppState.quoteCart.reduce((sum, item) => sum + item.qty, 0);

  if (totalItems > 0) {
    badgeCount.innerText = totalItems;
    floatingBar.classList.add("visible");
  } else {
    floatingBar.classList.remove("visible");
    const modalOverlay = document.getElementById("quotes-modal-overlay");
    modalOverlay.classList.remove("open");
  }
}

function openQuotesModal() {
  AppState.isClickLocked = true; // Bloquear colapso al abrir el cotizador principal
  const modalOverlay = document.getElementById("quotes-modal-overlay");
  const itemsContainer = document.getElementById("quotes-items-container");
  
  // Limpiar vista de éxito previo si lo hubiera y restaurar formulario
  const formPanel = document.querySelector(".quotes-form-panel");
  const successPanel = document.getElementById("quotes-success-panel");
  formPanel.style.display = "flex";
  successPanel.style.display = "none";
  
  renderQuoteItems();
  modalOverlay.classList.add("open");
}

function renderQuoteItems() {
  const itemsContainer = document.getElementById("quotes-items-container");
  
  if (AppState.quoteCart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-quote-msg">
        <svg style="width: 48px; height: 48px; stroke: var(--color-text-muted); stroke-width: 1.5; fill:none;" viewBox="0 0 24 24">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>No has seleccionado ningún producto aún.</span>
      </div>
    `;
    return;
  }

  let html = "";
  AppState.quoteCart.forEach((item) => {
    const areaColor = PRODUCTS_DATA[item.area].accentColor;
    html += `
      <div class="quote-item-row" style="border-left: 3px solid ${areaColor}">
        <div class="quote-item-info">
          <span class="quote-item-name">${item.name}</span>
          <span class="quote-item-area" style="color: ${areaColor}">${item.areaTitle}</span>
        </div>
        <div class="quote-item-controls">
          <button class="quote-qty-btn" onclick="adjustQuoteQty('${item.id}', -1)">-</button>
          <span class="quote-qty-val">${item.qty}</span>
          <button class="quote-qty-btn" onclick="adjustQuoteQty('${item.id}', 1)">+</button>
          <button class="quote-remove-btn" onclick="removeQuoteItem('${item.id}')">
            <svg style="width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width:2" viewBox="0 0 24 24">
              <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          </button>
        </div>
      </div>
    `;
  });

  itemsContainer.innerHTML = html;
}

window.adjustQuoteQty = function (productId, delta) {
  const item = AppState.quoteCart.find((i) => i.id === productId);
  if (!item) return;

  item.qty += delta;
  
  if (item.qty <= 0) {
    removeQuoteItem(productId);
  } else {
    updateQuoteUI();
    renderQuoteItems();
  }
};

window.removeQuoteItem = function (productId) {
  AppState.quoteCart = AppState.quoteCart.filter((item) => item.id !== productId);
  updateQuoteUI();
  renderQuoteItems();
};

function submitQuoteRequest() {
  const formPanel = document.querySelector(".quotes-form-panel");
  const successPanel = document.getElementById("quotes-success-panel");
  
  // Obtener valores de campos
  const name = document.getElementById("client-name").value;
  const dept = document.getElementById("client-dept").value;
  const email = document.getElementById("client-email").value;
  
  // Simulador de envío premium de cotización
  formPanel.style.display = "none";
  successPanel.style.display = "flex";
  
  // Vaciar carrito
  AppState.quoteCart = [];
  setTimeout(() => {
    updateQuoteUI();
  }, 3000);
}
