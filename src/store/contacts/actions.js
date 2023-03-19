export default{
    //FIREBASE通信（コンタクトデータ送信）
    submitData(_,payload) {
        fetch(
          "https://profile-site-a91ed-default-rtdb.firebaseio.com/contact.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        ).then((response)=>{
          if(response.ok){
            console.log(response)
            alert('送信完了しました。')
          }else{
            throw new Error('サーバーへの送信に失敗しました')
          }
        }).catch((error)=>{
          console.log(error.message)
        })
    },

    //FIREBASE通信（コンタクトリスト取得）
    getData(context) {
        fetch(
          "https://profile-site-a91ed-default-rtdb.firebaseio.com/contact.json",
          {method: "GET"}
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
            context.commit('setData',contacts)
        }).catch((e)=>{
          alert(e.message)
        })
      },

    //FIREBASE通信（コンタクトリスト削除）
    async deleteData(_,payload){
      await fetch(`https://profile-site-a91ed-default-rtdb.firebaseio.com/contact/${payload}.json`,{
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
          },
      }).then((response)=>{
        console.log("1")
        if(!response.ok){
          throw new Error('サーバーへの通信に失敗しました')
        }else{
          return response.json();
        }
      }).catch((e)=>{
        alert(e.message)
      })
    }
}