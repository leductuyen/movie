import axiosClient from './axiosClient';

const movieApi = {
    getAll(params) {
        const url = '/?s=man&apikey=4a3b711b';
        return axiosClient.get(url, { params: params });
    },
    get(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/categories';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/categories/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/categories/${id}`;
        return axiosClient.delete(url);
    },
};
export default movieApi;
