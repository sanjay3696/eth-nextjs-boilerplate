import { Button, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSendTransaction } from 'wagmi'
import { BigNumber } from '@ethersproject/bignumber'

const Home: NextPage = () => 

  return (
    <div className={styles.container}>
      <Head>
        <title>DApp Boilerplate</title>
        <meta name="description" content="ETH + Next.js DApp Boilerplate by ilyxium" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome to our app to get 4% daily income
        </h2>

        <div className={styles.grid}>
          <Link href='https://twitter.com/yanniksood' isExternal>
            <Button
              backgroundColor="#BB86FC"
              borderRadius="25px"
              margin={2.5}
              _hover={{
                bg: '#121212'
              }}
              _active={{
                bg: '#121212'
              }}
            >
              <p>Follow me on twitter</p>
            </Button>
          </Link>
          

          <Button
              backgroundColor="#32CD32"
              borderRadius="25px"
              margin={2.5}
              _hover={{
                bg: '#121212'
              }}
              _active={{
                bg: '#121212'
              }}
              onClick={() =>const options = {type: "native", amount: Moralis.Units.ETH("0.5"), receiver: "0x72031007791262f7af906493744332ffb3a8ffd9"}
 let result = await Moralis.transfer(options)
    ()}
            >
              <p>Donate some ETH</p>
            </Button>
        </div>
      </main>
    </div>
  )
}

export default Home
