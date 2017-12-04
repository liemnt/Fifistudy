import update from 'react-addons-update'

export const makeNewDataSaveFilm = (filmId, oldData) => {
    // debugger
    if (oldData.length > 0) {
        let indexFilm = oldData.findIndex(o => o.id == filmId);
        let newFilm = update(oldData[indexFilm], {$merge: {is_saved: !oldData[indexFilm].is_saved}});
        let newData = oldData;
        if (indexFilm > -1) {
            newData = update(oldData, {$splice: [[indexFilm, 1, newFilm]]})
        }
        return newData
    }
    return oldData
    // if (!oldData){
    //     return oldData
    // }

}