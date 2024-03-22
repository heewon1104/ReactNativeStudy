import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Counter from './components/Counter';
import Form from './components/Form';
import CoinInfo from './components/Coininfo';
import { useFetch } from './hooks/useFetch';
import { useAxios } from './hooks/useAxios';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  font-size: 30px;
  color: #ff6600;
`;

export default function App() {
  const URL = 'https://api.coinlore.net/api/tickers/?limit=3';
  const { data, error, inProgress } = useAxios(URL);
  console.log(data);
  return (
    <Container>
      {inProgress && <LoadingText>Loading...</LoadingText>}
      {data?.data.map(({ symbol, name, price_usd }) => (
        <CoinInfo
          key={symbol}
          symbol={symbol}
          name={name}
          price={price_usd}
        ></CoinInfo>
      ))}
    </Container>
  );
}
