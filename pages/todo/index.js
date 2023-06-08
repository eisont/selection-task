import { withAuth } from '@/src/commons/hocs/widthAuth';
import Todo from '@/src/components/todo/todo.container';

const TodoPage = () => {
  return <Todo />;
};

export default withAuth(TodoPage);
