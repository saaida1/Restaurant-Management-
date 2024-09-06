import { createContext } from "react";
import { table_list } from "../assets/assets";


export const TableContext = createContext(table_list)

const TableContextProvider = (props) =>{
    const contextValue ={
        table_list

    }
    return (
        <TableContext.Provider value={contextValue}>
            {props.children}
        </TableContext.Provider>
    )
}

export default TableContextProvider