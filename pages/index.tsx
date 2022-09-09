import { NextPage } from 'next';
import { Button } from '@nextui-org/react';
import { MainLayout } from '../components/layouts';

const Home: NextPage = () => {
  return (
    <MainLayout title={"Listado Pokémons"}>
      <Button>Hola mundo</Button>
    </MainLayout>
  )
}

export default Home
