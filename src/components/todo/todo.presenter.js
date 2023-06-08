import TodoEditUIItem from './todo.presenterItem';
import * as S from './todo.styles';

const TodoUI = (pr) => {
  return (
    <S.Main>
      <S.FlexBox onSubmit={pr.handleSubmit(pr.onClickAdd)}>
        <S.InputBox {...pr.register('todo')} /> <S.Bt>추가</S.Bt>
      </S.FlexBox>
      {pr.todoList?.map((el) => (
        <S.ListBox key={el.id}>
          <TodoEditUIItem el={el} register={pr.register} handleSubmit={pr.handleSubmit} />
        </S.ListBox>
      ))}
    </S.Main>
  );
};

export default TodoUI;
