import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateTrashThunk } from '../../redux/actions/actions';
import './gameBins.css';

function GameBins() {
  const dispatch = useDispatch();
  const trashBins = useSelector((state) => state.trashGenerate?.trashCans);
  // useEffect(() => {
  //   console.log('MUUUUSOOOOOOOOOR', trashes);
  //   dispatch(generateTrashThunk());
  // }, []);

  return (
    <div className="GameBins">
      <div className="gameBins">
        {trashBins.map((el) => <img alt="" trashCanId={el.id} src={el.trash_can_img_src} />)}
      </div>
    </div>
  );
}

export default GameBins;
