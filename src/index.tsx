import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';



createServer({
  models: {
    transition: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'deposit',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('20-03-2001'),
        },

        {
          id: 2,
          title: 'outro',
          type: 'deposit',
          category: 'Dev',
          amount: 1000,
          createdAt: new Date('20-03-2001'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {

      return this.schema.all('transaction')

    })


    this.post('/transactions', (schema, request) => {

      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

