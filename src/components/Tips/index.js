import React from 'react';

import { Container, Img, Option, Title } from './styles';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const items = [
    {
        key: String(Math.random()),
        img: img8,
        title: 'Universitário! Cadastre-se e ganhe mais cashback',
        bgColor: '#172c4a',
    },
    {
        key: String(Math.random()),
        img: img9,
        title: 'Compre o que quiser sem sair de casa',
        bgColor: '#6a0159',
    },
    {
        key: String(Math.random()),
        img: img10,
        title: 'Pague um amigo à distância',
        bgColor: '#4139c8',
    },
    {
        key: String(Math.random()),
        img: img11,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#00ab4b',
    },
    {
        key: String(Math.random()),
        img: img12,
        title: 'Praticididade, tenha tudo bem na palma da sua mão',
        bgColor: '#ba2f76',
    },
]

export default function Tips(){
    return (
        <Container>
            {items.map((item) => (
                <Option key={item.key} bgColor={item.bgColor}>
                    <Title>{item.title}</Title>
                    <Img source={item.img} />
                </Option>
            ))}
        </Container>
    );
}