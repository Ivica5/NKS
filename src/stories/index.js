import React from 'react';
import { storiesOf } from '@storybook/react';
import '../assets/css/bootstrap.min.css';
import Star from '../assets/SVG/star-full.svg';
import Info from '../assets/SVG/info.svg';
import Plus from '../assets/SVG/plus.svg';

import GitHub from '../assets/SVG/github.svg';
import Instagram from '../assets/SVG/instagram.svg';
import Twitter from '../assets/SVG/twitter.svg';
import Facebook from '../assets/SVG/facebook.svg';

import Header  from '../components/Header';
import Icon  from '../components/Icon';
import Footer  from '../components/Footer';
import Card  from '../components/Card';

import Button  from '../components/Button';
import Table  from '../components/Table';
import Modal  from '../components/Modal';

import Nav  from '../components/Nav';
import Grid  from '../components/Grid';

storiesOf('Grid', module)
  .add('grid', () => 
    <Grid 
      items={[
        <Card
          star={Star}
          image="https://img.saveur-biere.com/img/p/1611-16087-product_img_sb3.jpg"
          info={Info}
          cart={Plus}
          title="Example"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit felis, posuere non ultrices id, interdum vel nisi. Morbi commodo commodo ante, a convallis sem ultricies ut."
        />,
        <Card
          star={Star}
          image="https://img.saveur-biere.com/img/p/1611-16087-product_img_sb3.jpg"
          info={Info}
          cart={Plus}
          title="Example"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit felis, posuere non ultrices id, interdum vel nisi. Morbi commodo commodo ante, a convallis sem ultricies ut."
        />,
        <Card
          star={Star}
          image="https://img.saveur-biere.com/img/p/1611-16087-product_img_sb3.jpg"
          info={Info}
          cart={Plus}
          title="Example"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit felis, posuere non ultrices id, interdum vel nisi. Morbi commodo commodo ante, a convallis sem ultricies utLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit felis, posuere non ultrices id, interdum vel nisi. Morbi commodo commodo ante, a convallis sem ultricies ut."
        />,
        <Card
          star={Star}
          image="https://img.saveur-biere.com/img/p/1611-16087-product_img_sb3.jpg"
          info={Info}
          cart={Plus}
          title="Example"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit felis, posuere non ultrices id, interdum vel nisi. Morbi commodo commodo ante, a convallis sem ultricies ut."
        />,
        <Card
          star={Star}
          image="https://img.saveur-biere.com/img/p/1611-16087-product_img_sb3.jpg"
          info={Info}
          cart={Plus}
          title="Example"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit felis, posuere non ultrices id, interdum vel nisi. Morbi commodo commodo ante, a convallis sem ultricies ut."
        />
      ]}
    />)

storiesOf('Nav', module)
  .add('nav', () => 
    <Nav 
      nav={[
        {
          label: "Home",
          path: "/home"
        },
        {
          label: "Favorites",
          path: "/favorites"
        },
        {
          label: "Shopping Cart",
          path: "/shopping_cart"
        },
        {
          label: "About",
          path: "/about"
        },
        {
          label: "Source Code",
          path: "/source_code"
        }
      ]}
    />)

storiesOf('Table', module)
  .add('table', () => 
    <Table 
      columns={[
        {
          header:"Image"
        },
        {
          header:"Beer name"
        },
        {
          header:"Quantity"
        }
      ]}
      data={[
        {
          image: "https://image.flaticon.com/icons/png/512/164/164232.png",
          name: "Beer1",
          quantity: 1
        },
        {
          image: "https://image.flaticon.com/icons/png/512/164/164232.png",
          name: "Beer2",
          quantity: 2
        },
        {
          image: "https://image.flaticon.com/icons/png/512/164/164232.png",
          name: "Beer3",
          quantity: 3
        }
      ]}
      />)

storiesOf('Modal', module)
  .add('modal', () => 
    <Modal 
      title="Beer info"
      open={true}
      buttons={[
        <Button text="Close"/>,
        <Button text="Add Beer to Cart"/>,
        <Button text="Favorite Beer"/>
      ]}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit felis, posuere non ultrices id,
      interdum vel nisi. Morbi commodo commodo ante, a convallis sem ultricies ut.</p>
    </Modal>)

storiesOf('Button', module)
  .add('button', () => <Button text="Click button" />)

storiesOf('Header', module)
  .add('header', () =>
    <Header 
      image="https://image.flaticon.com/icons/png/512/164/164232.png"
      title="Beer shop"/>);

storiesOf('Card', module)
  .add('card', () =>
    <Card
      star={Star}
      image="https://img.saveur-biere.com/img/p/1611-16087-product_img_sb3.jpg"
      info={Info}
      cart={Plus}
      title="Example"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit felis, posuere non ultrices id, interdum vel nisi. Morbi commodo commodo ante, a convallis sem ultricies ut."
     />);

storiesOf('Footer', module)
  .add('footer', () =>
    <Footer>
      <Icon
        href="http://twitter.com"
        img={Twitter}
        text="Twitter"
      />
      <Icon
        href="http://facebook.com"
        img={Facebook}
        text="Facebook"
      />
      <Icon
        href="http://github.com"
        img={GitHub}
        text="GitHub"
      />
      <Icon
        href="http://instagram.com"
        img={Instagram}
        text="Instagram"
        />
    </Footer>
);
