<template>
  <div class="layout">
    <header class="header">
      <h1>
        <g-link to="/">Gutenberg Freaks</g-link>
      </h1>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>
:root {
  --color-body: #000;
  --color-primary: #BA0000;
}
body {
  font-family: 'Girassol','Noto Serif JP',-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  color: var(--color-body);
  font-size: 18px;
  margin: 0;
}
a {
  color: var(--color-body);
}
a:hover {
  color: var(--color-primary);
}

img {
  max-width: 100%;
}

nav[role="navigation"] {
  text-align: center;
}
nav[role="navigation"] a {
  display: inline-block;
  margin: 1.0em 0.75em 2.0em;
}

.layout {
  max-width: 640px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 20px; */
}
.header h1 {
  font-size: 3rem;
}
.header h1 a {
  text-decoration: none;
}
.nav__link {
  margin-left: 20px;
}
.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}
</style>
