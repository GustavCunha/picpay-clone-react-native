import React, { useState } from 'react';
import {Feather, MaterialCommunityIcons, FontAwesome, AntDesign} from '@expo/vector-icons';
import { Switch } from 'react-native';

import { 
    Header, 
    HeaderContainer, 
    Title, 
    Wrapper, 
    BalanceContainer, 
    Value, 
    Bold, 
    EyeButton, 
    Info, 
    Actions, 
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle, 
    PaymentMethods, 
    PaymentMethodsTitle,
    Card, 
    CardBody,
    CardDetails, 
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicketContainer,
    UseTicketButton,
    UseTickerLabel
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet(){

    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleTogglevisibility(){
        setIsVisible((prevState)=> !prevState);
    }

    function handleToggleUseBalance(){
        setUseBalance((prevState)=> !prevState);
    }

    return (
        <Wrapper>
            <Header colors={useBalance ? ['#52E78C', '#1AB563'] : ['#D3D3D3', '#868686']}>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                        </Value>

                        <EyeButton onPress={handleTogglevisibility}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>

                    <Info>
                        Seu saldo está rendendo 100% do CDI
                    </Info>

                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={30} color="#FFF" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>
                        <Action>
                            <FontAwesome name="bank" size={20} color="#FFF" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>
                    Use saldo ao pagar
                </UseBalanceTitle>

                <Switch
                    value={useBalance}
                    onValueChange={handleToggleUseBalance}
                />
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>
                    Formas de pagamento
                </PaymentMethodsTitle>

                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>
                                Cadastre seu cartão de crédito
                            </CardTitle>

                            <CardInfo>
                                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                            </CardInfo>
                        </CardDetails>

                        <Img source={creditCard} resizeMode="contain"/>
                    </CardBody>

                    <AddButton>
                        <AntDesign name="pluscircleo" size={30} color="#0DB060"/>
                        <AddLabel>
                            Adicionar cartão de crédito
                        </AddLabel>
                    </AddButton>
                </Card>

                <UseTicketContainer>
                    <UseTicketButton>
                        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060" />
                        <UseTickerLabel>
                            Usar código promocional
                        </UseTickerLabel>
                    </UseTicketButton>
                </UseTicketContainer>
            </PaymentMethods>
        </Wrapper>
    );
}