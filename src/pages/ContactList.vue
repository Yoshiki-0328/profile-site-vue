<template>
    <section class="section contact" id="contact">
      <div class="wrapper">
        <h2 class="section-title">Contact List</h2>
        <div class="contact-content">
            <base-button @click="getData">Get New Data</base-button>
            <ul>
                <li v-for="contact in contacts" :key="contact.key">
                    <base-card>
                    <p>date  :  {{ contact.date }}</p>
                    <p>email :  {{ contact.email }}</p>
                    <p>Name  :  {{ contact.name }}</p>
                    <p>Message  :  {{ contact.message }}</p>
                </base-card>
                </li>
            </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contacts:""
      };
    },
    created(){
        this.getData()
    },
    methods: {
      getData() {
        fetch(
          "https://profile-site-a91ed-default-rtdb.firebaseio.com/contact.json",
          {
            method: "GET",
          }
        ).then((response)=>{
          if(!response.ok){
            throw new Error('サーバーへの受信に失敗しました')
          }else{
            return response.json();
          }
        }).then((data)=>{
            console.log(data)
            const contacts =[]

            for(const key in data){
                const contact ={
                    id:key,
                    date:data[key].date,
                    name:data[key].name,
                    email:data[key].email,
                    message:data[key].message
                }
                contacts.unshift(contact);
            }
            this.contacts=contacts
        }).catch((e)=>{
          alert(e.message)
        })
  
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