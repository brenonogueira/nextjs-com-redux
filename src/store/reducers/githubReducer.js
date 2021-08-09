// Estado global (variáveis globais)
export const initialState = {
  index: null,
  show: null
}
 
const githubReducer = (state = initialState, action) => {
  switch (action.type) {
   case 'INDEX_GITHUB': return { ...state, index: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
   case 'SHOW_GITHUB': return { ...state, show: action.values };
   default: return state
   }
}

export default githubReducer;

