import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { 
    Container, 
    Header, 
    Title, 
    Card, 
    CardHeader, 
    Avatar, 
    Bold, 
    Description, 
    CardBody, 
    UserName, 
    CardFooter, 
    Details, 
    Value, 
    Divider, 
    DateLabel,
    Actions,
    Option,
    OptionLabel
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities(){
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar}/>
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>Banco Inter</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Teste</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>

                        <Divider/>

                        <Feather name="lock" color="#FFF" size={14} />
                        <DateLabel>há 2 meses</DateLabel>

                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#FFF" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}