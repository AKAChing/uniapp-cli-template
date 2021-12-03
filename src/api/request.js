import store from '../store'

export const request = (options) => {
	return new Promise(async (resolve, reject) => {
		uni.request({
			url: options.url.includes('http')
				? options.url
				: process.env.VUE_APP_BASE_API + options.url,
			header: Object.assign(
				{
					'Content-type':
						options.method === 'GET'
							? 'application/x-www-form-urlencoded'
							: 'application/json; charset=UTF-8',
					'USER-ID': store.state.user.userInfo.userId,
					'USER-NAME': encodeURIComponent(store.state.user.userInfo.userName),
					'DEPT-ID': store.state.user.userInfo.deptId,
					'DEPT-NAME': encodeURIComponent(store.state.user.userInfo.deptName),
				},
				options.header
			),
			method: options.method || 'GET',
			data: options.data,
			dataType: 'json',
			timeout: options.timeout || 30000,
			success: (res) => {
				if (SUCCESS_CODES.includes(res.data.code)) {
					return resolve(res.data)
				} else {
					return reject(res)
				}
			},
			fail: (err) => {
				uni.showToast({
					icon: 'none',
					title: '请求失败',
				})
				console.log('fail', err)
				return reject(err)
			},
			complete: (res) => {
				// console.log('complete', res)
				if (res.statusCode === 404) {
					console.log('请求路径不存在', res)
					return reject(res)
				}
			},
		})
	})
}
