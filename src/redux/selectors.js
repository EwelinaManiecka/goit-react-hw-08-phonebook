import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filters.filter;

export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, statusFilter) => {
    if (!statusFilter) return contacts;
    return contacts.filter(contact => contact.name.includes(statusFilter));
  }
);
