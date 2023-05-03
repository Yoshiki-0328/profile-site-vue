export default {
  //FIREBASE通信（コンタクトデータ送信）
  async submitData(_, payload) {
    const response = await fetch(
      "https://profile-site-a91ed-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    if (response.ok) {
      console.log(response);
      alert("送信完了しました。");
    } else {
      const error = new Error("サーバーへの送信に失敗しました")
      throw error;
    }
  },

  //FIREBASE通信（コンタクトリスト取得）
  async getData(context) {
    const token =context.rootGetters['auth/token']
    // const token=localStorage.getItem('token');
    const response = await fetch(
      "https://profile-site-a91ed-default-rtdb.firebaseio.com/contact.json?auth="+token,
      { method: "GET" }
    );
    const responseData = await response.json();
    console.log('Fetchしました。')
    
    if (!response.ok) {
      throw new Error("サーバーへの受信に失敗しました");
    }
    console.log(responseData);

    const contacts = [];
    for (const key in responseData) {
      const contact = {
        id: key,
        date: responseData[key].date,
        name: responseData[key].name,
        email: responseData[key].email,
        message: responseData[key].message,
      };
      contacts.unshift(contact);
    }
    context.commit("setData", contacts);
  },

  //FIREBASE通信（コンタクトリスト削除）
  async deleteData(_, payload) {
    const response = await fetch(
      `https://profile-site-a91ed-default-rtdb.firebaseio.com/contact/${payload}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("1");
    if (!response.ok) {
      throw new Error("サーバーへの通信に失敗しました");
    }
  },

  resetData(context){
    context.commit('resetData');
  }
};
