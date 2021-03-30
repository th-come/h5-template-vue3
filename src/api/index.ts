import http from '@/utils/request';
type userInfo = {
	id: number;
	name: string;
};
const getUserInfo = (id: number): Promise<any> => http.get(`/api/userInfo/xxx?id=${id}`);
const setUserInfo = (userInfo: userInfo): Promise<any> => http.post('/api/setUserInfo', userInfo);

export { getUserInfo, setUserInfo };
