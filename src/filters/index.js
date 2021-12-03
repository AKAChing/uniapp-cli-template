export const getNormalDateTimeByTimeStamp = (timeStamp = new Date().getTime()) => {
	const year = getFullYearByTimeStamp(timeStamp)
	const month = getMonthByTimeStamp(timeStamp)
	const date = getDateByTimeStamp(timeStamp)
	const hours = getHoursByTimeStamp(timeStamp)
	const minutes = getMinutesByTimeStamp(timeStamp)
	const seconds = getSecondsByTimeStamp(timeStamp)
	return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
}

export const getYMDByTimeStamp = (timeStamp = new Date().getTime()) => {
	const year = getFullYearByTimeStamp(timeStamp)
	const month = getMonthByTimeStamp(timeStamp)
	const date = getDateByTimeStamp(timeStamp)
	const hours = getHoursByTimeStamp(timeStamp)
	const minutes = getMinutesByTimeStamp(timeStamp)
	const seconds = getSecondsByTimeStamp(timeStamp)
	return `${year}-${month}-${date}`
}

export const getFullYearByTimeStamp = (timeStamp = new Date().getTime()) => {
	const year = new Date(timeStamp).getFullYear()
	return year
}

export const getShortYearByTimeStamp = (timeStamp = new Date().getTime()) => {
	let fullYear = new Date(timeStamp).getFullYear()
	const year = String(fullYear).slice(2,4)
	return Number(year)
}

export const getMonthByTimeStamp = (timeStamp = new Date().getTime()) => {
	let month = new Date(timeStamp).getMonth() + 1
	if (String(month).length === 1) {
		month = '0' + month
	}
	return month
}

export const getDateByTimeStamp = (timeStamp = new Date().getTime()) => {
	let date = new Date(timeStamp).getDate()
	if (String(date).length === 1) {
		date = '0' + date
	}
	return date
}

export const getHoursByTimeStamp = (timeStamp = new Date().getTime()) => {
	let hours = new Date(timeStamp).getHours()
	if (String(hours).length === 1) {
		hours = '0' + hours
	}
	return hours
}

export const getMinutesByTimeStamp = (timeStamp = new Date().getTime()) => {
	let minutes = new Date(timeStamp).getMinutes()
	if (String(minutes).length === 1) {
		minutes = '0' + minutes
	}
	return minutes
}

export const getSecondsByTimeStamp = (timeStamp = new Date().getTime()) => {
	let seconds = new Date(timeStamp).getSeconds()
	if (String(seconds).length === 1) {
		seconds = '0' + seconds
	}
	return seconds
}

// 千位分隔符
export const milliFormat = str => {
	let s = str.toString()
	if (/[^0-9\.]/.test(s)) return "-"
	s = s.replace(/^(\d*)$/,"$1.")
	s = (s + "00").replace(/(\d*\.\d\d)\d*/,"$1")
	s = s.replace(".",",")
	const re = /(\d)(\d{3},)/
	while(re.test(s)){
		s = s.replace(re,"$1,$2")
	}
	s = s.replace(/,(\d\d)$/,".$1")
	return s.replace(/^\./,"0.")
}