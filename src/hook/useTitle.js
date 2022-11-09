import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Super Transport`;
    }, [title])
};

export default useTitle;