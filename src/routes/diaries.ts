import express from 'express';
import { toNewDiaryEntry } from '../../utils/utils';
import diaryService from '../services/diaryService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const diary = diaryService.findById(Number(id))

  if (diary) {
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
})

router.post('/', (req, res) => {

  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedEntry = diaryService.addEntry(newDiaryEntry);
    res.json(addedEntry);
  } catch (e) {
    console.log(e, "error post vamo arriba")
    res.status(400).send(e);
  }

});

export default router;