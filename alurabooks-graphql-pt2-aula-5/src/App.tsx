import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ABPolloClient from './componentes/ABApolloClient';
import CarrinhoProvider from './contextApi/carrinho';
import Rotas from './rotas';

const queryClient = new QueryClient()

// começar a criar o client...

function App() {
  return (
    <ABPolloClient>
      <CarrinhoProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Rotas />
          </BrowserRouter>
        </QueryClientProvider>
      </CarrinhoProvider>
    </ABPolloClient>
  );
}

export default App;
