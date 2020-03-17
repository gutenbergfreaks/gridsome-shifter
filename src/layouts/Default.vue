<template>
  <div class="layout">
    <header class="header">
      <h1>
        <g-link to="/">Gutenberg Freaks</g-link>
      </h1>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <a
          class="nav__link"
          href="https://www.notion.so/cf9e7cf8bdf2459795d27b7b5e2c3b29?v=4d0c55a8efeb47c590d7152b9af51b67"
        >Note (Notion)</a>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot />
    <footer class="footer">
      <address>gutenbergfreaks.jp is powered by WordPress, Shifter, Gridsome, and Netlify.</address>
    </footer>
  </div>
</template>

<style>
:root {
  --color-body: #000;
  --color-primary: #ba0000;
  --color-bg: #f8f8f8;
}
body {
  font-family: "Noto Serif JP", serif;
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
p {
  line-height: 1.75em;
}
ul {
  margin: 0;
  padding-left: 1em;
}
li {
  line-height: 1.4em;
  padding-bottom: 0.3em;
}
img {
  max-width: 100%;
}
h2 {
  margin-top: 2em;
  font-size: 1.4em;
  line-height: 1.4em;
}

nav[role="navigation"] {
  text-align: center;
}
nav[role="navigation"] a {
  display: inline-block;
  margin: 1em 0.75em 2em;
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
  font-family: "Girassol", "Noto Serif JP", serif;
  /* margin-bottom: 20px; */
}
.header h1 {
  font-size: 3rem;
  font-weight: 400;
}
.header h1 a {
  text-decoration: none;
}
.nav {
  margin-top: 1em;
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
.footer {
  margin-top: 5em;
  margin-bottom: 1em;
  font-family: "Girassol", "Noto Serif JP", serif;
}
address {
  font-style: normal;
  font-size: 0.8em;
}
</style>
