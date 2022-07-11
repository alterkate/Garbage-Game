import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateTrashThunk } from '../../redux/actions/actions';
import { getProgressThunk } from '../../redux/actions/progress.action';
import GameBomzh from '../GameBomzh/GameBomzh';
import Container from '../GameLogic/Container';
import GameNav from '../GameNav/GameNav';
import GameRat from '../GameRat/GameRat';
import './game.css';

function Game() {
  // получаем мусорные баки
  const trashBinsFromDB = useSelector(
    (state) => state.trashGenerate?.trashCans,
  );
  const trashWithoutMan = trashBinsFromDB?.slice(0, trashBinsFromDB.length - 1);

  // получаем мусор
  const [bagPic, setBagPic] = useState('/trashbag/trashbag.png');
  // для обращения к бэку
  const dispatch = useDispatch();
  const trashes = useSelector((state) => state.trashGenerate?.trashes);
  useEffect(() => {
    // console.log('MUUUUSOOOOOOOOOR', trashes);
    dispatch(generateTrashThunk());
  }, []);

  // функция которая вытаскивает ШЕСТЬ рандомных мусоров из неотгаданных
  function getTrashes(arr) {
    const trashesFromDB = trashes?.length;
    let trashesNum = 0;
    if (trashesFromDB > 10) {
      trashesNum = 10;
    } else {
      trashesNum = trashesFromDB;
    }
    const justSomeArr = [];
    const randomTrashes = [];
    const indexArr = [];
    for (let i = 0; i < trashesFromDB; i += 1) {
      justSomeArr.push(i);
    }
    for (let y = 0; y < trashesNum; y += 1) {
      indexArr.push(justSomeArr.splice(Math.random() * justSomeArr.length, 1));
    }
    for (let x = 0; x < indexArr.length; x += 1) {
      randomTrashes.push(arr[indexArr[x]]);
    }
    return randomTrashes;
  }

  const randomTrashes = getTrashes(trashes);
  console.log('RANDOOOOOOM', getTrashes(trashes));

  const [flag, setFlag] = useState(false);
  const showTrash = () => {
    setFlag(!flag);
    // setBagPic('/trashBins/dangerous.png');
  };

  const progress = useSelector((state) => state.progress);
  useEffect(() => {
    dispatch(getProgressThunk());
  }, []);
  const { background } = progress;

  return (
    <div className={background}>
      <div>
        <GameNav />
      </div>
      <div>
        {/* <GameRat /> */}
        <Container trash={randomTrashes} trashBin={trashWithoutMan} />
      </div>
      <div>
        <GameBomzh />
      </div>
    </div>
  );
}

export default Game;
