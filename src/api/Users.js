import axiosInstance from './index';

export const getAll = ({count, page}) => {
    return axiosInstance.get("users", {params:{count, page}})
    .then(res => res.data)
    .then(data => data.success);
}
