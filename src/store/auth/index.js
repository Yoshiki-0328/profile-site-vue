import getters from "../auth/getters";
import mutations from '../auth/mutations'
import actions from "../auth/actions";

export default {
  namespaced: true,
  state() {
    return {
      message: "OK",
      token: "",
      userId: "",
      tokenExpiration:''
      // didAutoLogout: false,
    };
  },
  getters,
  mutations,
  actions
};
