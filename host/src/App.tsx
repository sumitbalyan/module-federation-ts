import { Suspense, lazy } from 'react';
import './App.css';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
const MyApp = lazy(()=> import('mfe/MyApp'));

function App() {
  return (
    <div className="App">
      <div> Micro Frontend application HOST</div>
        <Suspense fallback={<div>Loading...</div>}>
        <MyApp/>
      </Suspense>
     
    </div>
  );
}

export default App;
