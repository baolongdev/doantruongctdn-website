import axiosClient from "./axiosClient"

class AnalyticsVercelApi {
    vercelToken = "Bearer CjeMvx9Rgv3VVp9TamJy337o";
    getAll(params) {
        const url = '/stats'
        return axiosClient.get(url, {
            baseURL:"https://vercel.com/api/web/insights/",
            headers: {
                "Authorization": this.vercelToken,
            },
            params,
        });
    }
    getOverview(params) {
        const url = '/overview'
        return axiosClient.get(url, {
            baseURL:"https://vercel.com/api/web/insights/",
            headers: {
                "Authorization": this.vercelToken,
            },
            params,
        });
    }
    getTimeseries(params) {
        const url = '/timeseries'
        return axiosClient.get(url, {
            baseURL:"https://vercel.com/api/web/insights/",
            headers: {
                "Authorization": this.vercelToken,
            },
            params,
        });
    }
    getStats(params) {
        const url = '/stats'
        return axiosClient.get(url, {
            baseURL:"https://vercel.com/api/web/insights/",
            headers: {
                "Authorization": this.vercelToken,
            },
            params,
        });
    }
}

const analyticsVercelApi = new AnalyticsVercelApi();
export default analyticsVercelApi;