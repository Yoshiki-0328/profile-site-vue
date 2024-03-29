let timer;
export default {
  async login(context, payload) {
    return context.dispatch('auth',{
        ...payload,
        mode:'login'
    })
},
  async signup(context, payload) {
    return context.dispatch('auth',{
        ...payload,
        mode:'signup'
    })
},
  async auth(context, payload) {
    const mode= payload.mode;
    let url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2E2qSUFM4EGuGaPBNBSyQzRTRvBSpYTQ";
    if(mode=='signup'){
        url ="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2E2qSUFM4EGuGaPBNBSyQzRTRvBSpYTQ";
    }
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(responseData.message || "認証に失敗しました");
      throw error;
    }

    const expiresIn = +responseData.expiresIn * 1000;
    // const expiresIn = 5000;
    const expirationDate = new Date().getTime() + expiresIn;

    timer = setTimeout(function(){
        context.dispatch('logout');
    },expiresIn)

    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);
    localStorage.setItem("tokenExpiration", expirationDate);

    console.log(responseData);
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },
  trylogin(context){
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const tokenExpiration = localStorage.getItem('tokenExpiration')

    const expiresIn = +tokenExpiration - new Date().getTime()
    
    if(expiresIn<0){
        return;
    }

    timer = setTimeout(function(){
        context.dispatch('logout');
    },expiresIn)

    if(token&&userId){
        context.commit("setUser", {
            token: token,
            userId: userId,
        });
    }
  },
  logout(context){
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('tokenExpiration')
      clearTimeout(timer);

    context.commit('setUser',{
        token: null,
        userId: null,
    })
  }
};
