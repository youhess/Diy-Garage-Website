<script setup lang="ts">
import { ref } from "vue";
import {
  Menu,
  Search,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  ChevronDown,
} from "lucide-vue-next";

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const isMobileMenuOpen = ref(false);
const isLoginPopupOpen = ref(false);
const openMenus = ref<Record<string, boolean>>({});

const toggleMenu = (label: string) => {
  openMenus.value[label] = !openMenus.value[label];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "https://www.example.com/" },
  {
    label: "Shop",
    href: "https://www.example.com/",
    children: [
      {
        label: "Kits",
        href: "https://www.example.com/",
      },
      {
        label: "Individual Products",
        href: "https://www.example.com/",
      },
    ],
  },
  {
    label: "Instructions",
    href: "https://www.example.com/",
    children: [
      {
        label: "Project Gallery",
        href: "https://www.example.com/",
      },
    ],
  },
  {
    label: "Which Floor?",
    href: "https://www.example.com/",
  },
  { label: "Blog", href: "https://www.example.com/" },
  { label: "Contact Us", href: "https://www.example.com/" },
];
</script>

<template>
  <header id="header" class="header">
    <div id="top-bar" class="header-top">
      <div class="top-bar__inner">
        <div class="top-bar__left">
          <a href="https://www.example.com/" class="top-bar__phone"
            >(425) 906-4694</a
          >
        </div>
        <div class="top-bar__center">
          <a href="https://www.example.com/" class="top-bar__phone mobile-phone"
            >(425) 906-4694</a
          >
        </div>
        <div class="top-bar__right">
          <a href="https://www.example.com/" class="top-bar__link">About Us</a>
          <span class="top-bar__divider" aria-hidden="true"></span>
          <div class="top-bar__socials">
            <a
              href="https://www.example.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Facebook"
            >
              <Facebook class="icon-16" />
            </a>
            <a
              href="https://www.example.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
            >
              <Instagram class="icon-16" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="masthead" class="header-main">
      <div class="header-inner">
        <!-- Mobile Menu Button (Left) -->
        <div class="header-mobile-left">
          <button
            class="icon-btn"
            aria-label="Menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <Menu class="icon-20" />
          </button>
        </div>

        <div id="logo" class="logo">
          <a
            href="https://www.example.com/"
            title="DIY Garage Floors - Professional Quality Epoxies for the Weekend Warrior"
            rel="home"
          >
            <img
              src="https://diygaragefloors.com/wp-content/uploads/2020/09/square-logo.jpg"
              alt="DIY Garage Floors"
            />
          </a>
        </div>

        <div class="header-left">
          <button class="icon-btn icon-btn--search" aria-label="Search">
            <Search class="icon-16" />
          </button>
          <nav class="main-nav" aria-label="Primary">
            <ul>
              <li
                v-for="link in navLinks"
                :key="link.label"
                class="nav-item"
                :class="{ 'has-dropdown': link.children }"
              >
                <a :href="link.href" class="nav-link">
                  {{ link.label }}
                  <ChevronDown v-if="link.children" class="icon-12" />
                </a>
                <ul v-if="link.children" class="nav-dropdown">
                  <li v-for="child in link.children" :key="child.label">
                    <a :href="child.href">{{ child.label }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div class="header-right">
          <a
            href="https://www.example.com/"
            @click.prevent="isLoginPopupOpen = true"
            class="account-link"
            >Login / Register</a
          >
          <span class="header-divider" aria-hidden="true"></span>
          <div class="header-socials">
            <a
              href="https://www.example.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Facebook"
            >
              <Facebook class="icon-16" />
            </a>
            <a
              href="https://www.example.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Twitter"
            >
              <Twitter class="icon-16" />
            </a>
            <a
              href="https://www.example.com/"
              rel="nofollow"
              aria-label="Send us an email"
            >
              <Mail class="icon-16" />
            </a>
          </div>
        </div>

        <!-- Mobile Socials (Right) -->
        <div class="header-mobile-right">
          <div class="header-socials">
            <a
              href="https://www.example.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Facebook"
            >
              <Facebook class="icon-16" />
            </a>
            <a
              href="https://www.example.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Twitter"
            >
              <Twitter class="icon-16" />
            </a>
            <a
              href="https://www.example.com/"
              rel="nofollow"
              aria-label="Send us an email"
            >
              <Mail class="icon-16" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Transition name="slide">
      <div v-if="isMobileMenuOpen" class="mobile-drawer">
        <div class="mobile-drawer__header">
          <button class="icon-btn" @click="isMobileMenuOpen = false">
            <!-- Close Icon or just reuse Menu icon or X -->
            <span style="font-size: 24px">&times;</span>
          </button>
        </div>
        <div class="mobile-drawer__content">
          <!-- Search -->
          <div class="mobile-search">
            <form
              action="https://diygaragefloors.com/"
              method="get"
              class="search-form"
            >
              <input
                type="search"
                name="s"
                placeholder="Search..."
                class="search-input"
              />
              <button type="submit" class="search-button">
                <Search class="icon-16" />
              </button>
            </form>
          </div>

          <nav class="mobile-nav">
            <ul>
              <li
                v-for="link in navLinks"
                :key="link.label"
                :class="{ 'has-child': link.children }"
              >
                <div class="mobile-nav-item-row">
                  <a :href="link.href" class="mobile-nav-link">{{
                    link.label
                  }}</a>
                  <button
                    v-if="link.children"
                    class="toggle-btn"
                    @click.prevent="toggleMenu(link.label)"
                  >
                    <ChevronDown
                      class="icon-16 transition-transform"
                      :class="{ 'rotate-180': openMenus[link.label] }"
                    />
                  </button>
                </div>

                <ul
                  v-if="link.children"
                  v-show="openMenus[link.label]"
                  class="mobile-sub-nav"
                >
                  <li v-for="child in link.children" :key="child.label">
                    <a :href="child.href">{{ child.label }}</a>
                  </li>
                </ul>
              </li>

              <!-- Login -->
              <li>
                <a
                  href="https://www.example.com/"
                  @click.prevent="isLoginPopupOpen = true"
                  class="mobile-nav-link"
                  >Login</a
                >
              </li>

              <!-- Socials -->
              <li class="mobile-socials-item">
                <div class="mobile-socials-icons">
                  <a
                    href="https://www.example.com/"
                    target="_blank"
                    class="social-icon-link"
                    ><Facebook class="icon-16"
                  /></a>
                  <a
                    href="https://www.example.com/"
                    target="_blank"
                    class="social-icon-link"
                    ><Instagram class="icon-16"
                  /></a>
                </div>
              </li>

              <!-- About Us -->
              <li>
                <a href="https://www.example.com/" class="mobile-nav-link"
                  >About Us</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Transition>

    <!-- Overlay -->
    <Transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="mobile-overlay"
        @click="isMobileMenuOpen = false"
      ></div>
    </Transition>
    <!-- Login Popup -->
    <Transition name="fade">
      <div
        v-if="isLoginPopupOpen"
        class="login-popup-overlay"
        @click.self="isLoginPopupOpen = false"
      >
        <div class="login-popup-content">
          <button class="close-popup-btn" @click="isLoginPopupOpen = false">
            &times;
          </button>
          <div class="account-container">
            <div class="col2-set">
              <!-- Login Column -->
              <div class="col-1">
                <h3>LOGIN</h3>
                <form>
                  <label
                    >Username or email address
                    <span class="required">*</span></label
                  >
                  <input type="text" class="input-text" />
                  <label>Password <span class="required">*</span></label>
                  <input type="password" class="input-text" />
                  <label class="checkbox-label">
                    <input type="checkbox" /> Remember me
                  </label>
                  <button type="submit" class="btn-primary">LOG IN</button>
                  <a href="https://www.example.com/" class="lost-password"
                    >Lost your password?</a
                  >
                </form>
              </div>
              <!-- Register Column -->
              <div class="col-2">
                <h3>REGISTER</h3>
                <form>
                  <label>Email address <span class="required">*</span></label>
                  <input type="email" class="input-text" />
                  <p class="hint-text">
                    A password will be sent to your email address.
                  </p>
                  <label class="checkbox-label">
                    <input type="checkbox" checked /> Subscribe to our
                    newsletter
                  </label>
                  <p class="privacy-text">
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our
                    <a href="https://www.example.com/">privacy policy</a>.
                  </p>
                  <button type="submit" class="btn-primary">REGISTER</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: -49px;
  z-index: 50;
  font-family: "Inter", sans-serif;
  color: #111827;
}

.header-top {
  background: #00416b;
  color: #fff;
  font-size: 14px;
}

.top-bar__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 16px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top-bar__left,
.top-bar__center,
.top-bar__right {
  flex: 1;
  display: flex;
  align-items: center;
}

.top-bar__center {
  justify-content: center;
}

.top-bar__right {
  justify-content: flex-end;
  gap: 12px;
}

.top-bar__phone {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.mobile-phone {
  display: none;
}

.top-bar__link {
  color: #fff;
  text-decoration: none;
}

.top-bar__divider {
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.5);
}

.top-bar__socials {
  display: flex;
  gap: 10px;
}

.header-main {
  position: relative;
  left: 0;
  right: 0;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  height: 100px;
  width: 100%;
  z-index: 40;
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 16px;
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
}

.logo img {
  width: 74px;
  height: auto;
  display: block;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 18px;
  flex: 1;
}

.main-nav ul {
  display: flex;
  align-items: center;
  gap: 18px;
  list-style: none;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #111827;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.nav-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  left: -50px;
  background: #fff;
  border: 1px solid #e5e7eb;
  padding: 10px 0;
  list-style: none;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px);
  transition: 0.2s ease;
  z-index: 20;
  display: flex;
  flex-direction: column;
}

.nav-dropdown li a {
  display: block;
  padding: 8px 16px;
  color: #111827;
  text-decoration: none;
  font-size: 13px;
  text-transform: none;
}

.nav-item:hover .nav-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.account-link {
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  color: #111827;
  text-decoration: none;
}

.header-divider {
  width: 1px;
  height: 18px;
  background: #d1d5db;
}

.header-socials {
  display: flex;
  gap: 10px;
}

.header-socials a {
  width: 28px;
  height: 28px;
  border: 1px solid #d1d5db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111827;
  text-decoration: none;
}

.icon-btn {
  background: none;
  border: none;
  padding: 0;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #111827;
}

.icon-btn--search {
  color: #6b7280;
}

.icon-12 {
  width: 12px;
  height: 12px;
}

.icon-16 {
  width: 16px;
  height: 16px;
}

.icon-20 {
  width: 20px;
  height: 20px;
}

.header-mobile-left,
.header-mobile-right {
  display: none;
}

/* Drawer Styles */
.mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
  z-index: 100;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.mobile-drawer__header {
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
}

.mobile-drawer__content {
  padding: 16px;
  overflow-y: auto;
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav-item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f3f4f6;
}

.mobile-nav-link {
  display: block;
  padding: 12px 0;
  font-weight: 600;
  color: #111827;
  text-decoration: none;
  text-transform: uppercase;
  flex: 1;
}

.toggle-btn {
  background: none;
  border: none;
  padding: 12px;
  cursor: pointer;
  color: #4b5563;
  display: flex;
  align-items: center;
  justify-content: center;
}

.transition-transform {
  transition: transform 0.3s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}

.mobile-sub-nav {
  padding-left: 16px;
  background: #f9fafb;
  border-bottom: 1px solid #f3f4f6;
}

.mobile-sub-nav a {
  display: block;
  padding: 10px 0;
  color: #4b5563;
  text-decoration: none;
  font-size: 14px;
}

/* Mobile Search */
.mobile-search {
  margin-bottom: 16px;
}

.search-form {
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.search-input {
  flex: 1;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  outline: none;
}

.search-button {
  background: #f3f4f6;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  color: #6b7280;
  display: flex;
  align-items: center;
}

/* Mobile Socials */
.mobile-socials-item {
  padding: 16px 0;
  border-bottom: 1px solid #f3f4f6;
}

.mobile-socials-icons {
  display: flex;
  gap: 12px;
}

.social-icon-link {
  width: 32px;
  height: 32px;
  border: 1px solid #d1d5db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111827;
  text-decoration: none;
}

/* Overlay Styles */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .main-nav,
  .header-right,
  .icon-btn--search {
    display: none;
  }

  .header-mobile-left,
  .header-mobile-right {
    display: flex;
    align-items: center;
  }

  .header-mobile-left {
    flex: 1;
    justify-content: flex-start;
  }

  .header-mobile-right {
    flex: 1;
    justify-content: flex-end;
  }

  .logo {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .top-bar__left,
  .top-bar__right {
    display: none;
  }

  .top-bar__center {
    justify-content: center;
  }

  .mobile-phone {
    display: inline;
  }
}

/* Login Popup Styles */
.login-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-popup-content {
  background: #fff;
  width: 100%;
  max-width: 800px;
  position: relative;
  padding: 40px;
  max-height: 90vh;
  overflow-y: auto;
}

.close-popup-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #666;
  line-height: 1;
}

.col2-set {
  display: flex;
  gap: 40px;
}

.col-1,
.col-2 {
  flex: 1;
}

.col-1 {
  border-right: 1px solid #ececec;
  padding-right: 40px;
}

h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #555;
  letter-spacing: 0.05em;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 14px;
  color: #222;
}

.required {
  color: red;
}

.input-text {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 14px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  margin-bottom: 15px;
}

.btn-primary {
  background-color: #00416b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #002a45;
}

.lost-password {
  display: block;
  margin-top: 10px;
  font-size: 14px;
  color: #00416b;
  text-decoration: none;
}

.hint-text,
.privacy-text {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.privacy-text a {
  color: #00416b;
  text-decoration: none;
}

@media (max-width: 768px) {
  .col2-set {
    flex-direction: column;
    gap: 30px;
  }

  .col-1 {
    border-right: none;
    border-bottom: 1px solid #ececec;
    padding-right: 0;
    padding-bottom: 30px;
  }
}
</style>
