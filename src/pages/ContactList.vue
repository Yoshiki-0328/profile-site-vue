<template>
  <section class="section contact" id="contact">
    <div class="wrapper">
      <h2 class="section-title">Contact List</h2>
      <div class="contact-content">
        <base-button @click="getData">Get New Data</base-button>
        <ul>
          <li v-for="contact in contacts" :key="contact.key">
            <base-card>
              <p>date : {{ contact.date }}</p>
              <p>email : {{ contact.email }}</p>
              <p>Name : {{ contact.name }}</p>
              <p>Message : {{ contact.message }}</p>
              <base-button
                mode="flat"
                class="deleteBtn"
                @click="deleteData(contact.id)"
                >Delete</base-button
              >
            </base-card>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  computed: {
    contacts() {
      return this.$store.getters["contacts/contacts"];
    },
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch("contacts/getData");
      console.log("2");
    },
    async deleteData(id) {
      await this.$store.dispatch("contacts/deleteData", id);
      this.getData();
      console.log(this.$store.getters["contacts/contacts"]);
    },
  },
};
</script>
  
  <style scoped>
li {
  text-align: left;
  position: relative;
}

.deleteBtn {
  margin: 0px auto;
  position: absolute;
  right: 20px;
  top: 20px;
}

@media (max-width: 660px) {
  li {
    font-size: 0.75rem;
  }
  .deleteBtn {
    font-size: 0.75rem;
    margin: 0px auto;
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
</style>