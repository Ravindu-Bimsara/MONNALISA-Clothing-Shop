/**
 * MONNALISA — WOMEN'S FASHION (ROMA, ITALIA)
 * Master Client-Side Application Controller
 */

// Application State with LocalStorage Persistence
const MonnalisaApp = {
  lang: localStorage.getItem("monnalisa_lang") || "it",
  currency: localStorage.getItem("monnalisa_currency") || "EUR",
  cart: JSON.parse(localStorage.getItem("monnalisa_cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("monnalisa_wishlist") || "[]"),
  
  // Translation Helper
  t(key, params = {}) {
    const dict = MONNALISA_TRANSLATIONS[this.lang] || MONNALISA_TRANSLATIONS.it;
    let text = dict[key] || MONNALISA_TRANSLATIONS.it[key] || key;
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(new RegExp(`{${k}}`, "g"), v);
    }
    return text;
  },

  // Save Cart to LocalStorage
  saveCart() {
    localStorage.setItem("monnalisa_cart", JSON.stringify(this.cart));
    this.updateCartBadges();
    this.renderCartDrawer();
    // If on cart page, re-render
    if (typeof renderCartPage === "function" && document.getElementById("cart-page-container")) {
      renderCartPage();
    }
  },

  // Save Wishlist to LocalStorage
  saveWishlist() {
    localStorage.setItem("monnalisa_wishlist", JSON.stringify(this.wishlist));
    this.updateWishlistBadges();
    // If on wishlist page, re-render
    if (typeof renderWishlistPage === "function" && document.getElementById("wishlist-page-container")) {
      renderWishlistPage();
    }
  },

  // Currency Formatter
  formatPrice(amountInEUR) {
    if (amountInEUR === null || amountInEUR === undefined) return "";
    const curr = MONNALISA_CURRENCIES[this.currency] || MONNALISA_CURRENCIES.EUR;
    const converted = amountInEUR * curr.rate;
    if (this.currency === "JPY") {
      return `${curr.symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${curr.symbol}${converted.toFixed(2)}`;
  },

  // Set Language
  setLanguage(langCode) {
    if (langCode !== "it" && langCode !== "en") return;
    this.lang = langCode;
    localStorage.setItem("monnalisa_lang", langCode);
    document.documentElement.lang = langCode;
    
    // Update active class on language buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === langCode);
    });

    // Translate all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      el.innerText = this.t(key);
    });

    // Translate placeholder attributes
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      el.placeholder = this.t(key);
    });

    // Re-render components that depend on language
    this.renderCartDrawer();
    this.updateFloatingWhatsApp();

    // Trigger page-specific re-renders
    if (typeof onLanguageChange === "function") {
      onLanguageChange();
    }
  },

  // Set Currency
  setCurrency(currCode) {
    if (!MONNALISA_CURRENCIES[currCode]) return;
    this.currency = currCode;
    localStorage.setItem("monnalisa_currency", currCode);

    document.querySelectorAll(".currency-select").forEach(sel => {
      sel.value = currCode;
    });

    // Re-render components with prices
    this.renderCartDrawer();
    if (typeof onCurrencyChange === "function") {
      onCurrencyChange();
    }
  },

  // Cart Management
  addToCart(productId, size = null, color = null, qty = 1) {
    const product = MONNALISA_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const chosenSize = size || (product.sizes ? product.sizes[0] : "Standard");
    const chosenColor = color || (product.colors ? product.colors[0][`name_${this.lang}`] || product.colors[0].name_it : "Standard");

    // Check if same item with same size & color already in cart
    const existingIndex = this.cart.findIndex(
      item => item.id === productId && item.selectedSize === chosenSize && item.selectedColor === chosenColor
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].qty += qty;
    } else {
      this.cart.push({
        id: product.id,
        title_it: product.title_it,
        title_en: product.title_en,
        priceEUR: product.onSale && product.salePriceEUR ? product.salePriceEUR : product.priceEUR,
        img: product.img,
        selectedSize: chosenSize,
        selectedColor: chosenColor,
        qty: qty
      });
    }

    this.saveCart();
    this.showToast(this.t("cart_item_added"));
    this.openCart();
  },

  removeFromCart(index) {
    this.cart.splice(index, 1);
    this.saveCart();
    this.showToast(this.t("cart_item_removed"));
  },

  updateCartQty(index, delta) {
    if (!this.cart[index]) return;
    this.cart[index].qty += delta;
    if (this.cart[index].qty <= 0) {
      this.removeFromCart(index);
    } else {
      this.saveCart();
    }
  },

  clearCart() {
    this.cart = [];
    this.saveCart();
  },

  // Wishlist Management
  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    const inWishlist = index > -1;
    if (inWishlist) {
      this.wishlist.splice(index, 1);
      this.showToast(this.t("wishlist_removed"));
    } else {
      this.wishlist.push(productId);
      this.showToast(this.t("wishlist_added"));
    }
    this.saveWishlist();
    this.updateWishlistIcons();
  },

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  },

  // Badges & Counter Updates
  updateCartBadges() {
    const totalItems = this.cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll(".cart-count-badge").forEach(el => {
      el.innerText = totalItems;
    });
  },

  updateWishlistBadges() {
    const count = this.wishlist.length;
    document.querySelectorAll(".wishlist-count-badge").forEach(el => {
      el.innerText = count;
    });
  },

  updateWishlistIcons() {
    document.querySelectorAll(".wishlist-toggle-btn").forEach(btn => {
      const pid = btn.dataset.productId;
      if (this.isInWishlist(pid)) {
        btn.classList.add("active");
        btn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
      } else {
        btn.classList.remove("active");
        btn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
      }
    });
  },

  // Cart Drawer UI
  openCart() {
    const drawer = document.getElementById("cart-drawer");
    const backdrop = document.getElementById("cart-backdrop");
    if (drawer && backdrop) {
      drawer.classList.add("active");
      backdrop.classList.add("active");
    }
  },

  closeCart() {
    const drawer = document.getElementById("cart-drawer");
    const backdrop = document.getElementById("cart-backdrop");
    if (drawer && backdrop) {
      drawer.classList.remove("active");
      backdrop.classList.remove("active");
    }
  },

  renderCartDrawer() {
    const listEl = document.getElementById("cart-items-list");
    const subtotalEl = document.getElementById("cart-total-price");
    const countEl = document.getElementById("cart-items-count");
    if (!listEl) return;

    const totalQty = this.cart.reduce((sum, item) => sum + item.qty, 0);
    if (countEl) countEl.innerText = totalQty;

    if (this.cart.length === 0) {
      listEl.innerHTML = `<div class="empty-cart-msg">${this.t("cart_empty")}</div>`;
      if (subtotalEl) subtotalEl.innerText = this.formatPrice(0);
      return;
    }

    let totalEUR = 0;
    listEl.innerHTML = "";

    this.cart.forEach((item, index) => {
      const itemSubtotal = item.priceEUR * item.qty;
      totalEUR += itemSubtotal;
      const title = this.lang === "en" ? item.title_en : item.title_it;

      const itemEl = document.createElement("div");
      itemEl.className = "cart-item";
      itemEl.innerHTML = `
        <img src="${item.img}" alt="${title}" class="cart-item-img" />
        <div class="cart-item-details">
          <h4 class="cart-item-title">${title}</h4>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:4px;">
            ${item.selectedSize} | ${item.selectedColor}
          </div>
          <div class="cart-item-price">${this.formatPrice(item.priceEUR)} x ${item.qty} = ${this.formatPrice(itemSubtotal)}</div>
          <div style="display:flex; align-items:center; gap:8px; margin-top:8px;">
            <button class="qty-btn" style="padding:2px 8px; border:1px solid var(--border-subtle);" onclick="MonnalisaApp.updateCartQty(${index}, -1)">-</button>
            <span style="font-size:0.8rem;">${item.qty}</span>
            <button class="qty-btn" style="padding:2px 8px; border:1px solid var(--border-subtle);" onclick="MonnalisaApp.updateCartQty(${index}, 1)">+</button>
            <span class="remove-item-btn" style="margin-left:auto;" onclick="MonnalisaApp.removeFromCart(${index})">
              <i class="fa-solid fa-trash-can"></i>
            </span>
          </div>
        </div>
      `;
      listEl.appendChild(itemEl);
    });

    if (subtotalEl) subtotalEl.innerText = this.formatPrice(totalEUR);
  },

  // Floating WhatsApp Tooltip & Dynamic Links
  updateFloatingWhatsApp() {
    const floatBtn = document.getElementById("floating-whatsapp-btn");
    if (!floatBtn) return;
    const tooltip = floatBtn.querySelector(".floating-whatsapp-tooltip");
    if (tooltip) {
      tooltip.innerText = this.t("whatsapp_floating_tooltip");
    }
    const prefill = encodeURIComponent(this.t("whatsapp_prefill_general"));
    floatBtn.href = `${MONNALISA_INFO.whatsappUrl}?text=${prefill}`;
  },

  // WhatsApp Product Enquiry Link
  getWhatsAppProductLink(product) {
    const title = this.lang === "en" ? product.title_en : product.title_it;
    const msg = this.t("whatsapp_prefill_product", { product: title, id: product.id });
    return `${MONNALISA_INFO.whatsappUrl}?text=${encodeURIComponent(msg)}`;
  },

  // Quick View Modal
  openQuickView(productId) {
    const product = MONNALISA_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modalBackdrop = document.getElementById("quick-view-modal");
    if (!modalBackdrop) return;

    const title = this.lang === "en" ? product.title_en : product.title_it;
    const desc = this.lang === "en" ? product.desc_en : product.desc_it;
    const cat = this.lang === "en" ? product.category_en : product.category_it;
    const details = this.lang === "en" ? product.details_en : product.details_it;

    const container = document.getElementById("qv-modal-content");
    container.innerHTML = `
      <div class="quick-view-layout">
        <div class="qv-image-container">
          <img src="${product.img}" alt="${title}" id="qv-active-img" />
        </div>
        <div class="qv-details">
          <span class="qv-category">${cat}</span>
          <h2 class="qv-title">${title}</h2>
          <div class="qv-price-row">
            ${
              product.onSale && product.salePriceEUR
                ? `<span class="sale-price">${this.formatPrice(product.salePriceEUR)}</span>
                   <span class="original-price">${this.formatPrice(product.priceEUR)}</span>`
                : `<span class="product-price">${this.formatPrice(product.priceEUR)}</span>`
            }
          </div>
          <p class="qv-desc">${desc}</p>

          <!-- Size Selector -->
          <div class="selector-group">
            <label class="selector-label">${this.t("prod_size")}</label>
            <div class="size-chips" id="qv-size-chips">
              ${product.sizes.map((s, idx) => `
                <button class="size-chip ${idx === 0 ? "active" : ""}" data-size="${s}">${s}</button>
              `).join("")}
            </div>
          </div>

          <!-- Color Selector -->
          <div class="selector-group">
            <label class="selector-label">${this.t("prod_color")}: <span id="qv-selected-color-label" style="color:var(--text-primary); font-weight:600;">${product.colors[0][`name_${this.lang}`] || product.colors[0].name_it}</span></label>
            <div class="color-chips" id="qv-color-chips">
              ${product.colors.map((c, idx) => `
                <span class="color-chip ${idx === 0 ? "active" : ""}" style="background-color: ${c.hex};" data-color="${c[`name_${this.lang}`] || c.name_it}"></span>
              `).join("")}
            </div>
          </div>

          <!-- Quantity Selector -->
          <div class="selector-group">
            <label class="selector-label">${this.t("prod_qty")}</label>
            <div class="qty-control">
              <button class="qty-btn" id="qv-qty-minus">-</button>
              <span class="qty-number" id="qv-qty-val">1</span>
              <button class="qty-btn" id="qv-qty-plus">+</button>
            </div>
          </div>

          <!-- Actions -->
          <div class="qv-actions">
            <button class="solid-btn" id="qv-add-cart-btn" style="flex:1;">
              <i class="fa-solid fa-bag-shopping"></i> ${this.t("btn_add_cart")}
            </button>
            <a href="product-detail.html?id=${product.id}" class="outline-btn">
              ${this.t("btn_details")}
            </a>
          </div>

          <div style="margin-top:16px;">
            <a href="${this.getWhatsAppProductLink(product)}" target="_blank" rel="noopener" class="whatsapp-inquire-btn" style="width:100%;">
              <i class="fa-brands fa-whatsapp"></i> ${this.t("btn_whatsapp_inquire")}
            </a>
          </div>
        </div>
      </div>
    `;

    // Interactive selections in modal
    let selectedSize = product.sizes[0];
    let selectedColor = product.colors[0][`name_${this.lang}`] || product.colors[0].name_it;
    let selectedQty = 1;

    const sizeBtns = container.querySelectorAll("#qv-size-chips .size-chip");
    sizeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        sizeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedSize = btn.dataset.size;
      });
    });

    const colorChips = container.querySelectorAll("#qv-color-chips .color-chip");
    const colorLabel = container.getElementById("qv-selected-color-label");
    colorChips.forEach(chip => {
      chip.addEventListener("click", () => {
        colorChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        selectedColor = chip.dataset.color;
        if (colorLabel) colorLabel.innerText = selectedColor;
      });
    });

    const qtyVal = container.getElementById("qv-qty-val");
    container.getElementById("qv-qty-minus").addEventListener("click", () => {
      if (selectedQty > 1) {
        selectedQty--;
        qtyVal.innerText = selectedQty;
      }
    });
    container.getElementById("qv-qty-plus").addEventListener("click", () => {
      selectedQty++;
      qtyVal.innerText = selectedQty;
    });

    container.getElementById("qv-add-cart-btn").addEventListener("click", () => {
      this.addToCart(product.id, selectedSize, selectedColor, selectedQty);
      this.closeModal();
    });

    modalBackdrop.classList.add("active");
  },

  closeModal() {
    document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("active"));
  },

  // Checkout Demo Modal
  openCheckoutDemo() {
    if (this.cart.length === 0) {
      this.showToast(this.t("cart_empty"));
      return;
    }
    const modal = document.getElementById("checkout-demo-modal");
    if (!modal) return;

    let subtotalEUR = this.cart.reduce((sum, item) => sum + item.priceEUR * item.qty, 0);
    const content = document.getElementById("checkout-demo-content");
    content.innerHTML = `
      <div style="padding: 40px;">
        <span class="collab-tag" style="color:var(--accent-gold); font-size:0.75rem; letter-spacing:0.2em;">MONNALISA ROMA — CHECKOUT DEMO</span>
        <h2 style="font-family:var(--font-serif); font-size:1.8rem; margin:12px 0 20px;">${this.t("cart_checkout_btn")}</h2>
        
        <div class="demo-disclaimer" style="margin-bottom:24px;">
          <i class="fa-solid fa-circle-info"></i> ${this.t("cart_demo_alert")}
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px; margin-bottom:24px;">
          <div>
            <label class="selector-label">${this.t("form_name")}</label>
            <input type="text" id="demo-name" placeholder="Sofia Rossi" style="width:100%; border:1px solid var(--border-subtle); background:var(--bg-card); padding:10px; color:var(--text-primary);" />
          </div>
          <div>
            <label class="selector-label">${this.t("form_email")}</label>
            <input type="email" id="demo-email" placeholder="sofia@example.it" style="width:100%; border:1px solid var(--border-subtle); background:var(--bg-card); padding:10px; color:var(--text-primary);" />
          </div>
        </div>

        <div style="margin-bottom:24px;">
          <label class="selector-label">${this.t("contact_address_label")} Spedizione</label>
          <input type="text" id="demo-address" placeholder="Via del Corso 120, 00186 Roma (RM)" style="width:100%; border:1px solid var(--border-subtle); background:var(--bg-card); padding:10px; color:var(--text-primary);" />
        </div>

        <div style="background:var(--bg-card); padding:18px; border:1px solid var(--border-subtle); margin-bottom:24px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.85rem;">
            <span>${this.t("cart_subtotal")} (${this.cart.length} capi):</span>
            <span style="font-weight:600;">${this.formatPrice(subtotalEUR)}</span>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.85rem;">
            <span>${this.t("cart_shipping")}:</span>
            <span style="color:#25d366;">${this.t("cart_shipping_free")}</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:1.1rem; font-weight:700; border-top:1px solid var(--border-subtle); padding-top:10px; margin-top:10px;">
            <span>${this.t("cart_total")}:</span>
            <span style="color:var(--accent-gold);">${this.formatPrice(subtotalEUR)}</span>
          </div>
        </div>

        <button class="solid-btn" id="confirm-demo-order-btn" style="width:100%;">
          ${this.lang === "en" ? "COMPLETE SIMULATED ORDER" : "COMPLETA ORDINE DIMOSTRATIVO"}
        </button>
      </div>
    `;

    document.getElementById("confirm-demo-order-btn").addEventListener("click", () => {
      this.clearCart();
      this.closeModal();
      this.closeCart();
      this.showToast(this.lang === "en" 
        ? "Order simulated successfully! Thank you for testing Monnalisa Rome." 
        : "Ordine simulato con successo! Grazie per aver testato Monnalisa Roma.");
    });

    modal.classList.add("active");
  },

  // Toast Feedback System
  showToast(message) {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3200);
  },

  // Rome, Paris, and NYC/London Live Clocks
  initLiveClocks() {
    const update = () => {
      const now = new Date();
      const formatTime = (tz) => new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }).format(now);

      const romeEl = document.getElementById("rome-time");
      const parisEl = document.getElementById("paris-time");
      const nycEl = document.getElementById("nyc-time");

      if (romeEl) romeEl.innerText = formatTime("Europe/Rome");
      if (parisEl) parisEl.innerText = formatTime("Europe/Paris");
      if (nycEl) nycEl.innerText = formatTime("America/New_York");
    };
    update();
    setInterval(update, 1000);
  },

  // Mobile Navigation Drawer
  initMobileMenu() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const drawer = document.getElementById("mobile-nav-drawer");
    const backdrop = document.getElementById("mobile-nav-backdrop");
    const closeBtn = document.getElementById("mobile-nav-close");

    const openMenu = () => {
      if (drawer && backdrop) {
        drawer.classList.add("active");
        backdrop.classList.add("active");
      }
    };

    const closeMenu = () => {
      if (drawer && backdrop) {
        drawer.classList.remove("active");
        backdrop.classList.remove("active");
      }
    };

    if (toggleBtn) toggleBtn.addEventListener("click", openMenu);
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    if (backdrop) backdrop.addEventListener("click", closeMenu);
  },

  // Attach Global Listeners
  initGlobalListeners() {
    // Language buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.setLanguage(btn.dataset.lang);
      });
    });

    // Currency selector dropdowns
    document.querySelectorAll(".currency-select").forEach(sel => {
      sel.value = this.currency;
      sel.addEventListener("change", (e) => {
        this.setCurrency(e.target.value);
      });
    });

    // Cart trigger buttons
    document.querySelectorAll(".cart-trigger").forEach(btn => {
      btn.addEventListener("click", () => this.openCart());
    });

    const closeCartBtn = document.getElementById("close-cart-btn");
    const cartBackdrop = document.getElementById("cart-backdrop");
    if (closeCartBtn) closeCartBtn.addEventListener("click", () => this.closeCart());
    if (cartBackdrop) cartBackdrop.addEventListener("click", () => this.closeCart());

    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) checkoutBtn.addEventListener("click", () => this.openCheckoutDemo());

    // Modal close buttons
    document.querySelectorAll(".modal-close-btn").forEach(btn => {
      btn.addEventListener("click", () => this.closeModal());
    });

    document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) this.closeModal();
      });
    });

    // Newsletter subscription forms
    document.querySelectorAll(".newsletter-form").forEach(form => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = form.querySelector("input[type='email']");
        if (input && input.value) {
          this.showToast(this.t("newsletter_success"));
          form.reset();
        }
      });
    });

    // Initial sync
    this.updateCartBadges();
    this.updateWishlistBadges();
    this.renderCartDrawer();
    this.updateFloatingWhatsApp();
    this.initLiveClocks();
    this.initMobileMenu();
    this.setLanguage(this.lang);
  }
};

// Auto-run on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  MonnalisaApp.initGlobalListeners();
});
