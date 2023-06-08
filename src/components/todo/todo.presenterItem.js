import { useState } from 'react';
import * as S from './todo.styles';
import fetchJson from '@/src/commons/api';
import { useRecoilState } from 'recoil';
import { AccessTokenState } from '@/src/commons/store';

const TodoEditUIItem = (pr) => {
  const [edit, setEdit] = useState(false);
  const [acessToken] = useRecoilState(AccessTokenState);

  const onClickEdit = () => {
    setEdit(true);
  };
  const onClickEditCancel = () => {
    setEdit(false);
  };
  const onClickUpdate = (selectID) => (data) => {
    const TodoData = {
      todo: data?.edittodo,
      isCompleted: true,
    };
    fetchJson({
      apiEndpoint: `/todos/${selectID}`,
      method: 'put',
      acessToken,
      body: TodoData,
    }).then(() => {
      setEdit(false);
    });
  };

  const onClickDelete = (selectID) => () => {
    fetchJson({
      apiEndpoint: `/todos/${selectID}`,
      method: 'delete',
      acessToken,
    });
  };

  return (
    <>
      {edit ? (
        <S.FlexBox onSubmit={pr.handleSubmit(onClickUpdate(pr.el.id))}>
          <input type='checkbox' />

          <S.InputBox {...pr.register('edittodo')} />
          <S.Bt>제출</S.Bt>
          <S.Bt type='submit' onClick={onClickEditCancel}>
            취소
          </S.Bt>
        </S.FlexBox>
      ) : (
        <>
          <input type='checkbox' />
          <S.List>{pr.el.todo}</S.List>
          <div style={{ display: 'flex' }}>
            <S.Bt id={pr.el.id} onClick={onClickEdit}>
              수정
            </S.Bt>
            <S.Bt id={pr.el.id} onClick={onClickDelete(pr.el.id)}>
              삭제
            </S.Bt>
          </div>
        </>
      )}
    </>
  );
};

export default TodoEditUIItem;
