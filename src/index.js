import { h, app } from "hyperapp";
import './scss/index.scss'
const { h, app } = hyperapp;

const state = {
  rides: []
};

const actions = {
  setRides: rides => state => ({ rides })
};

const view = (state, actions) => h('div', { class: 'container mx-auto p-4' }, [
  h('h1', { class: 'text-4xl font-bold mb-4' }, 'Ride Share Board'),
  h('table', { class: 'table-auto w-full' }, [
    h('thead', {}, [
      h('tr', {}, [
        h('th', { class: 'border px-4 py-2' }, 'Date'),
        h('th', { class: 'border px-4 py-2' }, 'Name'),
        h('th', { class: 'border px-4 py-2' }, 'Email'),
        h('th', { class: 'border px-4 py-2' }, 'Phone'),
        h('th', { class: 'border px-4 py-2' }, 'Details')
      ])
    ]),
    h('tbody', {}, state.rides.map(ride => h('tr', {}, [
      h('td', { class: 'border px-4 py-2' }, ride.date),
      h('td', { class: 'border px-4 py-2' }, ride.name),
      h('td', { class: 'border px-4 py-2' }, ride.email),
      h('td', { class: 'border px-4 py-2' }, ride.phone),
      h('td', { class: 'border px-4 py-2' }, ride.details)
    ])))
  ])
]);

const main = app(state, actions, view, document.getElementById('app'));

// Fetch rides data from API or local data and update the app state
fetchRides().then(rides => main.setRides(rides));

function fetchRides() {
  // Replace this function with a real API call or use local data
  return Promise.resolve([
    { date: '2023-05-01', name: 'John Doe', email: 'johndoe@email.com', phone: '123-456-7890', details: 'Offering a ride from city A to city B.' },
    { date: '2023-05-02', name: 'Jane Smith', email: 'janesmith@email.com', phone: '234-567-8901', details: 'Looking for a ride from city C to city D.' },
    // ... more ride data
  ]);
}

export default state;