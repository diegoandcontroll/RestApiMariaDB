import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Diego',
      lastname: 'Lucas',
      email: 'lukasxdp@gmail.com',
      age: 23,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
