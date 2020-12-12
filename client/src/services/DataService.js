import http from '../http-common';

class DataService {
  getAll(items, page) {
    return http.get(`/${items}${page ? `?page=${page}` : ''}`);
  }

  getById(id, items, page) {
    return http.get(`/${items}/${id}`);
  }

  create(data, items) {
    return http.post(`/${items}`, data);
  }

  update(id, data, items) {
    return http.put(`/${items}/${id}`, data);
  }

  findByName(name, items) {
    return http.get(`/${items}?name=${name}`);
  }
}

export default new DataService();
