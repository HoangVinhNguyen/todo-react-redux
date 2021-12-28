import '@testing-library/jest-dom';
import expect from 'expect';

import { axiosInstance } from '../../utils';

describe('Todo-list', () => {

    it('passes update todo', async () => {
        try {
            const res = await axiosInstance.post('/auth/login', { username: 'vinh', password: '12345678' });
            const resTodo = await axiosInstance.get('/user/todo/all/' + res.data.id,
                { headers: { "Authorization": `Bearer ${res.data.accessToken}` } });
            let newName = resTodo.data[0].name + ' Edit'; // id =2
            await axiosInstance.post('/user/todo/update',
            {
                userId: res.data.id,
                id: 2,
                name: newName
            }, { headers: { "Authorization": `Bearer ${res.data.accessToken}` } });
            const resTodoAgain = await axiosInstance.get('/user/todo/all/' + res.data.id,
                { headers: { "Authorization": `Bearer ${res.data.accessToken}` } });
            let nameOld = resTodoAgain.data[0].name; // id =2
            expect(newName).toEqual(nameOld);
        } catch (error) {
            console.log(error.response.data);
        }
    });

    it('passes done todo', async () => {
        try {
            const res = await axiosInstance.post('/auth/login', { username: 'vinh', password: '12345678' });
            const resTodo = await axiosInstance.get('/user/todo/all/' + res.data.id,
                { headers: { "Authorization": `Bearer ${res.data.accessToken}` } });
            let item = resTodo.data[0]; // id =2
            await axiosInstance.post('/user/todo/completed',
            {
                userId: res.data.id,
                id: item.id,
                completed: true
            }, { headers: { "Authorization": `Bearer ${res.data.accessToken}` } });
            const resTodoAgain = await axiosInstance.get('/user/todo/all/' + res.data.id,
                { headers: { "Authorization": `Bearer ${res.data.accessToken}` } });
            let itemDone = resTodoAgain.data[0]; // id =2
            expect(itemDone.completed).toEqual(true);
        } catch (error) {
            console.log(error.response.data);
        }
    });
    it('passes delete todo', async () => {
        try {
            const res = await axiosInstance.post('/auth/login', { username: 'vinh', password: '12345678' });
            const resTodo = await axiosInstance.get('/user/todo/all/' + res.data.id,
                { headers: { "Authorization": `Bearer ${res.data.accessToken}` } });
            let item = resTodo.data[0]; // id =2
            let countTodo = resTodo.data.length;
            await axiosInstance.post('/user/todo/delete',
            {
                id: item.id,
            }, { headers: { "Authorization": `Bearer ${res.data.accessToken}` } });
            const resTodoAgain = await axiosInstance.get('/user/todo/all/' + res.data.id,
                { headers: { "Authorization": `Bearer ${res.data.accessToken}` } });
            let countTodoOld = resTodoAgain.data.length; // id =2
            expect(countTodo).toEqual(countTodoOld + 1);
        } catch (error) {
            console.log(error.response.data);
        }
    });
});

