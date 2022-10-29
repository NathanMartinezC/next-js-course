import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function About() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className={'title'}>
        Ir a <Link href="/">Contact</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.jsx</code>
      </p>
    </MainLayout>
  )
}