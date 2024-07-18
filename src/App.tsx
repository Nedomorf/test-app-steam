import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { listActions } from './redux/list/slice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

import './App.css';

function App() {
  const dispatch = useAppDispatch();

  const { list } = useAppSelector((state) => state.list);

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={() => dispatch(listActions.addItem())}>Add</button>
        <button onClick={() => dispatch(listActions.removeItem())}>Remove</button>
      </div>
      <TransitionGroup className="list">
        {list.map((item) => (
          <CSSTransition key={item.id} timeout={300} classNames="list-item">
            <div className="list-item" style={{ backgroundColor: item.color }}>
              {item.id}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default App;
