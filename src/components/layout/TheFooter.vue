<template>
    <footer class="footer">
        <div class="wrapper">
          <div>
            <base-button mode="flat" link to="/profile">Home</base-button>
            <base-button mode="flat" link to="/about">About/Skills</base-button>
            <base-button mode="flat" link to="/works">Works</base-button>
            <base-button mode="flat" link to="/contact">Contact</base-button>
          </div>
        <small>&copy;2022 Yoshiki</small>
    </div>

    <div class="back-scroll hidden" id="js-topBtn"></div>

    </footer>
</template>

<style scoped>
.footer{
  margin-top: 40px;
}
a.flat{
  font-size: .9rem;
  padding: 7.5px 15px;
}
@media (max-width:610px){
  a.flat{
    font-size: .75rem;
    margin: 0;
  }
}
</style>