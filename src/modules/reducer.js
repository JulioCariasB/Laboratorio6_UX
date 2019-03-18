import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [ 
    {id: 0, description: "UX Restaurants"}, 
    {id: 1, description: "Gramatica de C/AL"}, 
    {id: 2, description: "Command Line"}, 
    {id: 3, description: "Base de Datos Farmacia"},
    {id: 4, description: "Pokedex"}, 
    {id: 5, description: "Structure Base"},
    {id: 6, description: "Soccer Teams HN"},
    {id: 7, description: "Data Center"},
    {id: 8, description: "Tic Tac Toe"},
    {id: 9, description: "Map Search"}
  ],
  homeTitle:"Bienvenido a Project Code Names"
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    case ACTIONS.Types.BOOM:{
      console.log(action);
      let newState=_.cloneDeep(state);
      if(state.homeTitle==="Bienvenido a Project Code Names"){
        newState.homeTitle="813N83N1D0 4 PR0J3CT C0D3 N4M3";
      }else{
      newState.homeTitle="Bienvenido a Project Code Names";
      }
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;