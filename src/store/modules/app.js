const LOGOINFOPREFIX = '[STORE/MODULES/APP]'
import global from "@/utils/global"
// 应用状态
const app = {
	state: {
		platform: '',
		provider: '',
	},

	mutations: {
		SET_SYSTEM_INFO: (state, platform) => {
			state.platform = platform
		},
		SET_PROVIDER: (state, provider) => {
			state.provider = provider
		},
	},

	actions: {
		// 获取系统信息
		setSystemInfo: ({ commit }) => {
			return new Promise(async (resolve, reject) => {
				try {
					const systemInfo = uni.getSystemInfoSync()
					commit('SET_SYSTEM_INFO', systemInfo)
					console.log(LOGOINFOPREFIX, 'SYSTEM_INFO', systemInfo)
					resolve()
				} catch (error) {
					reject(error)
				}
			})
		},

		// 获取提供商, 根据这个来判断是在钉钉小程序还是在浏览器
		setProvider: ({ commit }) => {
			return new Promise(async (resolve, reject) => {
				try {
					uni.getProvider({
						service: 'oauth',
						success: (res) => {
							const provider = res.provider[0] || 'browser'
							commit('SET_PROVIDER', provider)
							console.log(LOGOINFOPREFIX, 'PROVIDER', provider)
							resolve()
						}
					})
				} catch (error) {
					reject(error)
				}
			})
		},
	},
}

export default app
