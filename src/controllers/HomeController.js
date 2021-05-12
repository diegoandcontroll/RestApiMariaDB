class HomeController {
  index(req, res) {
    res.json({
      hellow: 'World2',
    });
  }
}

export default new HomeController();
