import http from '../http-common';

class DataService {
  getAll(items, page) {
    return http.get(`/${items}${page ? `?page=${page}` : ''}`);
  }

  getAllById(id, items, page) {
    return http.get(`/${items}/${id}${page ? `?page=${page}` : ''}`);
  }

  getById(uuid, items) {
    return http.get(`/${items}/single/${uuid}`);
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
