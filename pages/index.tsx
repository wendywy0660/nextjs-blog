import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

import styles from '../styles/Home.module.css'
import { InferGetStaticPropsType } from 'next';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BlogTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const List = styled.ul`
  list-style: square;
`;

const ListItem = styled.li`
  padding: 10px;
  text-transform: capitalize;
  margin: 10px 0;
  cursor: pointer;
  color: #252525;
  &:hover {
    background: #f0f0f0;
  }
`;
const PostTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const title: string = 'Nextjs blog'
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main className={styles.main}>
        <BlogTitle className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </BlogTitle>
        <Link href="/about">About us</Link>
        <List>
          {posts.map((post) => (
            <Link key={post.id} passHref href="/posts/[id]" as={`/posts/${post.id}`}>
              <ListItem >
                <PostTitle>{post.title}</PostTitle>
              </ListItem>
            </Link>
          ))}
        </List>
      </Main>
    </Container >
  )
}

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}

