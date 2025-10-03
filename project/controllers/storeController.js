const Home = require("../models/homes");
const User = require("../models/user");

exports.getHome = (req, res) => {
  Home.find()
    .then((registeredHome) => {
      res.render("store/landingPage", {
        registeredHome,
        isLoggedIn: req.isLoggedIn,
        user: req.session.user,
      });
    })
    .catch((err) => {
      console.error("Database fetch error:", err);
      res.status(500).send("Something went wrong while loading homes.");
    });
};

exports.getBooking = (req, res) => {
  res.render("store/booking", {
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};

exports.getFavourite = async (req, res) => {
  const userId = req.session.user._id;
  const user = await User.findById(userId).populate("favourites");
  // const FavRegisteredHome = user.favourites.map((favHome) => favHome.id);
  res.render("store/favourite", {
    favouriteWithDetails: user.favourites,
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};

exports.postAddFavourite = async (req, res) => {
  const { id } = req.body;
  const userId = req.session.user._id;
  const user = await User.findById(userId);
  if (!user.favourites.includes(id)) {
    user.favourites.push(id);
    await user.save();
  }
  res.redirect("/favourite");
};

exports.getHomeDetail = (req, res) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("home not found");
      res.redirect("/");
    } else {
      res.render("store/homeDetail", {
        id: home.id,
        homename: home.homename,
        price: home.price,
        location: home.location,
        img: home.img,
        description: home.description,
        isLoggedIn: req.isLoggedIn,
        user: req.session.user,
      });
    }
  });
};

exports.deleteFavourite = async (req, res) => {
  const id = req.params.id;
  const userId = req.session.user._id;
  const user = await User.findById(userId);
  user.favourites.pull(id);
  await user.save();
  res.redirect("/favourite");
};
