import {Express,  Request, Response } from 'express';
import { UserService } from '../services/userService';
import express = require('express');

const userRouter = express.Router();

userRouter.post('/register', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await UserService.register(username, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error registering user' });
  }
});

userRouter.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await UserService.login(username, password);
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Error logging in' });
  }
});

export { userRouter };
