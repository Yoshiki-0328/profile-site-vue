<template>
  <div>
    <div class="wrapper">
      <h2 class="section-title">{{ submitCaption }}</h2>
      <div class="auth-content">
        <p v-if="!!error">{{ error }}</p>
        <base-spinner v-if="isLoading"></base-spinner>
        <base-card>
          <form @submit.prevent="submitData" class="form-flex">
            <dt>E-mail</dt>
            <dd>
              <input
                type="email"
                name="email"
                id="email"
                v-model.trim="email"
              />
            </dd>
            <dt>Password</dt>
            <dd>
              <input
                type="password"
                name="password"
                id="password"
                v-model.trim="password"
              />
            </dd>
            <p v-if="!formInvalid" style="width: 100%">
              入力値が正しくありません。
            </p>
            <br />
            <base-button> {{ submitCaption }} </base-button>
            <base-button type="button" @click="switchMode" mode="flat">
              {{ switchCaption }}
            </base-button>
          </form>
        </base-card>
        <base-button @click="token">aaa</base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formInvalid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitCaption() {
      if (this.mode == "login") {
        return "Login";
      } else {
        return "Signup";
      }
    },
    switchCaption() {
      if (this.mode == "login") {
        return "Signup";
      } else {
        return "Login";
      }
    },
    a() {
      return this.$store.getters["userauth/mege"];
    },
  },
  methods: {
    async submitData() {
      this.formInvalid = true;
      if (
        this.email == "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formInvalid = false;
        return;
      }
      this.isLoading = true;
      this.error =null

      const inputData = {
        email: this.email,
        password: this.password,
      };

      try {
        if (this.mode == "login") {
          await this.$store.dispatch("auth/login", inputData);
          console.log("logmode");
        } else {
          await this.$store.dispatch("auth/signup", inputData);
        }
      } catch (err) {
        this.error = err.message || "サインアップに失敗しました";
      }
      this.isLoading = false;
      this.$router.replace('/contact')
    },
    switchMode() {
      if (this.mode == "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
    token() {
      console.log(this.$store.getters['auth/isAuthenticated']);
    },
  },
};
</script>

<style scoped>
.form-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
  font-size: 1.25rem;
  text-align: center;
}
button {
  margin: 20px 10px;
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
.auth-content input,
.auth-content textarea {
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
.auth-list {
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
  .auth-content input,
  .auth-content textarea {
    width: 100%;
    margin: 0;
  }
}
</style>
