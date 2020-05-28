import { storage } from '../core/utils';
export function toHTML(key) {
  const model = storage(key);
  const id = key.split(':')[1];
  return `
      <li class="db__record">
        <a href="#excel/${id}">${model.title}</a>
        <strong>${new Date(model.openingDate).toLocaleDateString()}</strong>
        <strong>${new Date(model.openingDate).toLocaleTimeString()}</strong>
      </li>
  `;
}

function getAllStorageKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes('table')) {
      continue;
    }
    keys.push(key);
  }
  return keys;
}
export function createTableList() {
  const keys = getAllStorageKeys();
  if (keys.length === 0) {
    return `<p style="margin: 10px 0 0 30px;
              font-size: 1.3rem;">
              There are no records yet.
              You can start by clicking 👆 + New Table
              </p>`;
  } else {
    return `
      <div class="db__list-header">
        <span>Table Name</span>
        <span>Last visit Date: </span>
        <span>Last visit Time: </span>
      </div>
      <ul class="db__list">
        ${keys.map(toHTML).join('')}
      </ul>
    `;
  }
}
