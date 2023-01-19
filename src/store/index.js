
import Vue from 'vue'

import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

const constText = {


    idbServerUrl: "/landProxy/",


    // idbServerUrl: "https://idb.m20cloud.tk:7443/",//雲端?
    // idbServerUrl: "https://idb.m20cloud.tk:443/",//雲端X
    // idbServerUrl: "https://eow.hywebcloud20.com:443/",//雲端O
    // idbServerUrl: "https://land.hywebcloud20.com:443/",//雲端o

}


const state = {
    userId: "NULL!!!",
    targetId: null,
    targetIcId: null,
    targetCaseId: null,
    icArray: [],
    searchCase: null,
    queryObject: null,
    idleStatus: 'N',
    autoSaveStatus: 'N',
    langStatus: 'Cht'




}
const getters = {
    getUserId(state) {
        return state.userId;
    },
    getIdbServerUrl() {
        return constText.idbServerUrl;
    },
    getTargetId(state) {
        return state.targetId;
    },
    getTargetIcId(state) {
        return state.targetIcId;
    },
    getTargetCaseId(state) {
        return state.targetCaseId;
    },
    getIcArray(state) {
        return state.icArray;
    },
    getSearchCase(state) {
        return state.searchCase;
    },
    getQueryObject(state) {
        return state.queryObject;
    },
    getIdleStatus(state) {
        return state.idleStatus;
    },
    getAutoSaveStatus(state) {
        return state.autoSaveStatus;
    },
    getLangStatus(state) {
        return state.langStatus;
    }
}
const actions = {
    updateUser: function ({ commit }, userObj) {
        //Vue.set(userObj, "id", "ABC");
        commit("UPDATE_USER_ID", userObj);
        //console.log(userObj);
    },
    updateTargetId: function ({ commit }, obj) {
        commit("UPDATE_TARGET_ID", obj);
    },
    updateTargetIcId: function ({ commit }, obj) {
        commit("UPDATE_TARGET_IC_ID", obj);
    },
    updateTargetCaseId: function ({ commit }, obj) {
        commit("UPDATE_TARGET_CASE_ID", obj);
    },
    updateIcArray: function ({ commit }, obj) {
        commit("UPDATE_IC_ARRAY_ID", obj);
    },
    updateSearchCase: function ({ commit }, obj) {
        commit("UPDATE_SEARCH_CASE", obj);
    },
    updateQueryObject: function ({ commit }, obj) {
        commit("UPDATE_QUERY_OBJECT", obj);
    },
    updateIdleStatus: function ({ commit }, obj) {
        commit("UPDATE_IDLE_STATUS", obj);
    },
    updateAutoSaveStatus: function ({ commit }, obj) {

        commit("UPDATE_AUTO_SAVE_STATUS", obj);
        setTimeout(function () {
            commit("UPDATE_AUTO_SAVE_STATUS", "N");
        }, 3000);

    },
    updateLangStatus: function ({ commit }, obj) {
        // commit("UPDATE_LANG_STATUS", obj);
    }
}
const mutations = {
    UPDATE_USER_ID(state, userObj) {

        if (userObj != null) {

            // state.userId = userObj[0];
            // state.loginToken = userObj[1];
            state.userId = userObj
        } else {
            state.userId = null;
            state.loginToken = null;
        }
    },
    UPDATE_TARGET_ID(state, obj) {
        if (obj != null)
            state.targetId = obj
    },
    UPDATE_TARGET_IC_ID(state, obj) {
        if (obj != null)
            state.targetIcId = obj
    },
    UPDATE_TARGET_CASE_ID(state, obj) {
        if (obj != null)
            state.targetCaseId = obj
    },
    UPDATE_IC_ARRAY_ID(state, obj) {
        if (obj != null)
            state.icArray = obj
    },
    UPDATE_SEARCH_CASE(state, obj) {
        if (obj != null)
            state.searchCase = obj
    },
    UPDATE_QUERY_OBJECT(state, obj) {
        if (obj != null)
            state.queryObject = obj
    },
    UPDATE_IDLE_STATUS(state, obj) {
        if (obj != null)
            state.idleStatus = obj
    },
    UPDATE_AUTO_SAVE_STATUS(state, obj) {

        if (obj != null)
            state.autoSaveStatus = obj
    },
    UPDATE_LANG_STATUS(state, obj) {

        if (obj != null)
            state.langStatus = obj
    }
}


// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    constText,
    plugins: [
        createPersistedState() // 默认localstorage
    ],

})








