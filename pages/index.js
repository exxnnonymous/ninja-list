import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List</title>
    </Head>
    <div className="">
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut enim deserunt asperiores doloremque eos laudantium dicta inventore aliquam, facere repellat molestias, animi a natus, mollitia minima voluptates beatae nesciunt tempore iure dolor quod! Odio delectus molestias iste sed vel illum reprehenderit repudiandae consectetur vero. Porro officia id officiis magnam cumque.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut enim deserunt asperiores doloremque eos laudantium dicta inventore aliquam, facere repellat molestias, animi a natus, mollitia minima voluptates beatae nesciunt tempore iure dolor quod! Odio delectus molestias iste sed vel illum reprehenderit repudiandae consectetur vero. Porro officia id officiis magnam cumque.</p>
      <Link href="/ninjas/">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  )
}
