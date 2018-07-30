import axios from 'axios'

function getAvailableTicketing(axiosParams) {
  return axios.post(axiosParams.url, axiosParams.data, axiosParams.conf)
}

export { getAvailableTicketing }
