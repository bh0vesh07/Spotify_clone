export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
   // token:'BQBa5UrJdGfid3ZIf0Lzv26FiIw7FJS6CAx4KwNBbzHs971SCkKTnVGdEUbMc3sH-QduKrS5mEhMoTC8LDH_wev3vXA5opXDV1_VT1h15j2yHtulsiOGZxW7jxIfChImPRZ7rF7AMJthP_50PlerDqLknaVRuIyLa6L2sGC1NlxEfCBUwl2OqICuVgcjqDtD27HksIY9J4GB8-Q26SDKMQ',
  };

const reducer =(state,action) =>{
    console.log(action);
    switch(action.type){

        case "SET_USER":
            return {
            ...state,
            user:action.user,
        };

        case "SET_TOKEN":
            return {
              ...state,
              token: action.token,
            };

        case 'SET_PLAYLISTS':
          return{
            ...state,
            playlists: action.playlists,
          };

        case "SET_DISCOVER_WEEKLY":
           return {
           ...state,
            discover_weekly: action.discover_weekly,
      };

        default:
            return state;
    }
};

  export default reducer;