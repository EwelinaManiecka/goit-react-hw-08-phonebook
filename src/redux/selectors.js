import { createSelector } from '@reduxjs/toolkit';
// import { statusFilter } from './constants';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filters.status;

export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, statusFilter) => {
    if (!statusFilter) return contacts;
    return contacts.filter(contact => contact.name.includes(statusFilter));
  }
);
