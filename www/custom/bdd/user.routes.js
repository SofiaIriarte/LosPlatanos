import { Router } from "express";
import User from "User.js";
import fs from "fs-extra";
import path from "path";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort("-_id");
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { nombreHuesped, habitacionHuesped, contraseñaHuesped } = req.body;

    if (!nombreHuesped || !habitacionHuesped || !contraseñaHuesped)
      return res.status(400).json({ message: "Please, provide all fields" });

    const newUser = new User({ nombreHuesped, habitacionHuesped, contraseñaHuesped });

    /*if (req.file) {
      newBook.imagePath = "/uploads/" + req.file.filename;
    }*/

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await Book.findByIdAndDelete(req.params.id);
    await fs.unlink(path.resolve("./backend/public/"));// + user.imagePath));
    res.json({ message: "User Deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
