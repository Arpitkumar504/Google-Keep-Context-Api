const notesreducer = (state, action) => {
    switch (action.type) {
        case "setdata": {
            const { names, values } = action.payload;
            return {
                ...state,
                notesdata: {
                    ...state.notesdata,
                    [names]: [values],
                }
            }
        }
        case "addnote": {
            const { name, texts } = state.notesdata;
            const data = {
                names: name,
                texts: texts,
            }
            return {
                ...state,
                alldata: [...state.alldata, data],
                notesdata: {
                    name: "",
                    texts: "",
                }
            }
        }
        case "removenote": {
            const data = state.alldata.filter((element, index) => {
                return index !== action.payload;
            })
            return {
                ...state,
                alldata: data,
            }
        }
        case "clearallnote": {
            return {
                ...state,
                alldata: [],
            }
        }
        default:
            return state;
    }
}
export default notesreducer;