<template>
  <section class="section contact" id="contact">
    <div class="wrapper">
      <h2 class="section-title">Contact</h2>
      <div class="contact-content">
        <form @submit.prevent="submitData" class="form-flex">
          <dt>NAME</dt>
          <dd><input type="text" name="name" id="name" v-model="name" /></dd>
          <dt>E-mail</dt>
          <dd>
            <input type="email" name="email" id="email" v-model="email" />
          </dd>
          <dt>MESSAGE</dt>
          <dd>
            <textarea name="message" id="message" cols="30" rows="5" v-model="message"></textarea>
          </dd>
          <base-button> SEND </base-button>
        </form>
        <base-button class="contact-list" mode="flat" link to="/contact-list"
          >Contact List</base-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitData() {
      const now = new Date();
      const Year = now.getFullYear();
      const Month = now.getMonth() + 1;
      const Day = now.getDate();
      const Hour = now.getHours();
      const Min = now.getMinutes();
      const nowTime =
        Year + "年" + Month + "月" + Day + "日" + Hour + ":" + Min;
      console.log(nowTime);
      const inputData = {
        date: nowTime,
        name: this.name,
        email: this.email,
        message: this.message,
      };
      this.$store.dispatch("contacts/submitData", inputData);
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.form-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  font-size: 1.25rem;
  text-align: center;
}
button {
  margin: 20px auto;
}
.form-flex dt {
  width: 20%;
  margin-bottom: 10px;
}
.form-flex dd {
  text-align: left;
  width: 80%;
  margin-bottom: 15px;
  margin-left: 0;
  padding-left: 40px;
}
.contact-content input,
.contact-content textarea {
  border: 1px solid #999;
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  font-size: 1.25rem;
  margin-left: 0 !important;
  font-family: "Crimson Text", serif;
  font-family: "Lora", serif;
  font-family: "Noto Sans JP", sans-serif;
}
.contact-list {
  margin-right: 0;
}

@media (max-width: 660px) {
  .form-flex {
    flex-direction: column;
    width: 100%;
  }
  .form-flex dt {
    width: 100%;
  }
  .form-flex dd {
    width: 80%;
    margin: 0px auto 20px;
    padding-left: 0;
  }
  .contact-content input,
  .contact-content textarea {
    width: 100%;
    margin: 0;
  }
}
</style>