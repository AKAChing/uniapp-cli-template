const LOGOINFOPREFIX = '[STORE/MODULES/USER]'
import global from "@/utils/global"
import { apiLogin, apiDepositUserAccountInfo } from '@/api'
import app from './app'
// 用户状态
const user = {
  state: {
    userInfo: {},
    token: '',
    defaultUserInfoObj: {
      zhengqingfeng: {
        deptId: '240148168',
        deptName: '前端',
        userId: '106722042636538423',
        userName: '郑清锋'
      },
      weijiazheng: {
        deptId: '240148167',
        deptName: '后端',
        userId: '304252654138875981',
        userName: '魏佳郑'
      }
    }
  },
  
  mutations: {
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    // 设置token, 目前暂时用不到
    setToken: ({ commit }, token) => {
      return new Promise(async (resolve, reject) => {
        try {
          commit('setToken', token)
          console.log(LOGOINFOPREFIX, 'SET_TOKEN', token)
          resolve()
        } catch (error) {
          console.log(LOGOINFOPREFIX, 'SET_TOKEN', '设置失败')
          reject(error)
        }
      })
    },

    // 授权登陆
    setLogin: ({ commit }) => {
			return new Promise(async (resolve, reject) => {
        if (app.state.provider === 'alipay') {
          dd.getAuthCode({
            success: async (res) => {
              try {
                const { data } = await apiLogin({ authCode: res.authCode })
                commit('SET_USER_INFO', data)
                console.log(LOGOINFOPREFIX, 'USER_INFO', data)
                resolve()
              } catch (error) {
                global.alertError(error)
                reject()
              }
            },
            fail: (err) => {
              reject(err)
            },
          })
        } else {
          commit('SET_USER_INFO', user.state.defaultUserInfoObj.weijiazheng)
          console.log(LOGOINFOPREFIX, 'USER_INFO', user.state.userInfo)
          resolve()
        }
			})
		}
  },
}

export default user