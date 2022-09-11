import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/NavBar'
import { Provider } from "react-redux"
import store from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
