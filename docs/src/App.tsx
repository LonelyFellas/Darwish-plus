import useBoolean from '@darwish-hooks/use-boolean';
function App() {
  const [state, setState] = useBoolean(false);
  return (
    <>{/* <button onClick={toggle}>{isShowing ? 'Hide' : 'Show'}</button> */}</>
  );
}

export default App;
