import axios from "axios";

const KEY = "AIzaSyA1ix817qvZEWH0UR88sgmyc_qriSypsEo";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});
