
import {useEffect} from "react";

export const useDocumentTitle = (title) => {
            useEffect(() => {
         document.title = `PlayX-Social | ${title}`
            },[title])
}