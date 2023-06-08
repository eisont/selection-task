import { useEffect, useState } from 'react';
import TodoUI from './todo.presenter';
import fetchJson from '@/src/commons/api';
import { useRecoilState } from 'recoil';
import { AccessTokenState } from '@/src/commons/store';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  todo: yup.string().required(''),
});

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [acessToken] = useRecoilState(AccessTokenState);

  useEffect(() => {
    fetchJson({
      apiEndpoint: '/todos',
      method: 'get',
      acessToken,
    }).then((json) => {
      setTodoList(json);
    });
  }, [todoList]);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onClickAdd = (data) => {
    const TodoData = {
      todo: data?.todo,
    };
    fetchJson({
      apiEndpoint: '/todos',
      method: 'post',
      acessToken,
      body: TodoData,
    });
  };

  return <TodoUI todoList={todoList} register={register} handleSubmit={handleSubmit} onClickAdd={onClickAdd} />;
};

export default Todo;
