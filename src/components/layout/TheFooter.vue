<template>
    <footer class="footer">
        <div class="wrapper">
        <ul class="flex footer-flex">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <small>&copy;2022 Yoshiki</small>
    </div>

    <div class="back-scroll hidden" id="js-topBtn"></div>

    </footer>
</template>

<style scoped>
.footer-flex {
  justify-content: center;
  margin: 0px;
  display: flex;
  align-items: center;
}
.footer-flex li {
  margin-left: 20px;
}
.footer-flex a {
  text-decoration: none;
  color: #333;
}
</style>