<template>
    <section>
      <div class="main-visual">
          <h1>Profile Page</h1>
            <img src="../assets/mainvisual.jpg" alt="メイン画像" />
        </div>
    </section>
</template>

<style scoped>
h1{
    position: absolute;
    /* top: 50%; */
    /* left: 50%; */
    transform: translateY(70%);
    color: white;
    font-size: 100px;
    font-weight: bold;
    width: 100%;
    text-shadow: 10px 10px 50px #999;
    z-index: 0;
}
.main-visual {
  width: 100%;
}
.main-visual img {
  width: 100%;
  height: 85vh;
  object-fit: cover;
}
</style>