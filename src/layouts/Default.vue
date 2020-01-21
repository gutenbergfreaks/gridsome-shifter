<template>
  <div class="l-wrapper">
    <header class="l-global--header">
      <h1>
        <g-link to="/">Gutenberg Freaks</g-link>
      </h1>
      <nav class="m-nav">
        <g-link class="m-nav__link" to="/">Home</g-link>
        <g-link class="m-nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>
