<template>
      <section class="section contact" id="contact">
        <div class="wrapper">
          <h2 class="section-title">Contact</h2>
          <div class="contact-content">
            <form action="#" class="form-flex">
                <dt>NAME</dt>
                <dd><input type="text" name="name" id="name"></dd>
                <dt>E-mail</dt>
                <dd><input type="email" name="email" id="email"></dd>
                <dt>MESSAGE</dt>
                <dd><textarea name="message" id="message" cols="30" rows="10"></textarea></dd>
            </form>
            <base-button> SEND </base-button>
          </div>
        </div>
      </section>
</template>

<style scoped>
.form-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  font-size: 1.25rem;
}
.form-flex dt {
  width: 20%;
  margin-bottom: 10px;
}
.form-flex dd {
  text-align: left;
  width: 70%;
  margin-bottom: 15px;
}
.contact-content input,
.contact-content textarea {
  border: 1px solid #999;
  width: 100%;
  padding: 10px;
  border-radius: 3px;
}

</style>