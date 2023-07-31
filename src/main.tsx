import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

// on click effect
document.addEventListener("click", function(event) {
  const effect = document.createElement("div");
  effect.className = "click-effect";
  effect.style.top = event.clientY + "px";
  effect.style.left = event.clientX + "px";
  document.body.appendChild(effect);
  effect.addEventListener("animationend", () => {effect.parentElement?.removeChild(effect)});
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
