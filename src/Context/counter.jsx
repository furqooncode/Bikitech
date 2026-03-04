import { useContext, createContext } from 'react';
import db from '../lib/util.jsx';
 
const CounterContext = createContext();
export function CounterProvider({children}){
  
  async function incrementCount(type) {
  try {
    const stats = await db.listDocuments("stats");
    
    if (stats.length === 0) {
      // create for the first time
      await db.createDocument("stats", {
        whatsapp: 0,
        call: 0,
        mail: 0,
        [type]: 1,
      });
    } else {
      // update existing
      const doc = stats[0];
      await db.updateDocument("stats", doc.id, {
        [type]: doc.data[type] + 1,
      });
    }
  } catch (error) {
    console.error(error);
  }
}

  return(
    <CounterContext.Provider value={{
      incrementCount,
    }}>
      {children}
    </CounterContext.Provider>
    )
}

export function useCounter(){
  return(
    useContext(CounterContext)
    )
}