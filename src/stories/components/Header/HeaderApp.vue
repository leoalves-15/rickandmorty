<template>
<div class="container">
  <div class="header-container">
    <header class="header">
      <div class="header-logo-container">
        <router-link to="/">
          <img src="../../assets/logo.svg" alt="">
        </router-link>
      </div>
      <div class="header-list-container">
        <nav>
          <ul>
            <li>
              <router-link to="/Character">Personagens</router-link>
            </li>
            <li>
              <router-link to="/Episodes">Episódios</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</div>
</template>

<script>
import './Header.scss';

export default {
  name: 'HeaderApp'
};
</script>
