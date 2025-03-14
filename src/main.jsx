import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// style
import './assets/Css/Style.css'

// app
import App from './App.jsx'

// context api
import MyState from './context/Data/MyState.jsx'

// redux
import { Provider } from 'react-redux'
import { store } from './redux/Store.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <MyState>
        <App />
      </MyState>
    </Provider>
  </StrictMode>
);
