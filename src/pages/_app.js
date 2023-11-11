import '../styles/global.css'
import MainComponentLayout from '../components/MainComponentLayout'

export default function App({ Component, pageProps }) {
  return (
    <MainComponentLayout>
      <Component {...pageProps} />
    </MainComponentLayout>
  )
}
